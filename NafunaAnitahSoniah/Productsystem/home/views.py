from django.shortcuts import render, redirect
from .models import Product
from django.contrib import messages
from django.db.models import Sum

# Create your views here.
def homepage(request):
    products = Product.objects.all()
    
    # Calculate stats for the dashboard
    context = {
        'products': products,
        'stock_in_shs': sum(p.price * p.quantity for p in products),
        'available_products': products.count(),        
        'Stock_in_figures': products.aggregate(Sum('quantity'))['quantity__sum'] or 0
    }

    if request.method == 'POST':
        name = request.POST.get('name')
        category = request.POST.get('category')
        price = request.POST.get('price')
        quantity = request.POST.get('quantity')
        color = request.POST.get('color')  
        image = request.FILES.get('image') 

        # Validation to ensure no form field is left empty
        errors = {}
        if not name:
            errors['name'] = "Product Name is required."
        if not category:
            errors['category'] = "Category is required."
        if not price or not price.isdigit() or int(price) <= 0:
            errors['price'] = "Valid price is required."
        if not quantity or not quantity.isdigit() or int(quantity) < 0:
            errors['quantity'] = "Valid quantity is required."

        if errors:
            context.update({
                'errors': errors,
                'form_data': {'name': name, 'category': category, 'price': price, 'quantity': quantity, 'color': color}
            })
            return render(request, 'home.html', context)

        if not all([name, category, price, quantity]):  
            messages.error(request, "All fields are required.")
            return render(request, 'home.html', context)  

        try:
            # Creating product and saving it to the database
            product = Product.objects.create(
                name=name,
                category=category,
                price=price,
                quantity=quantity,
                color=color,  
                image=image if image else None  # In cases where no image is uploaded
            )
            messages.success(request, "Product has been added successfully!")
            return redirect('homepage')
        except Exception as e:
            messages.error(request, f"Error adding product: {str(e)}")
            return render(request, 'home.html', context)  # Use the existing context

    return render(request, 'home.html', context)  