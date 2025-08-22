from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Product
from .forms import ProductForm

def index(request):
    products = Product.objects.all()
    sales = 50000000  # Placeholder, replace with actual logic if needed
    orders = 15000000  # Placeholder
    in_stock = 42000000
    out_of_stock = 5

    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, "Product has been added successfully!")
            return redirect('index')
    else:
        form = ProductForm()

    context = {
        'products': products,
        'sales': sales,
        'orders': orders,
        'in_stock': in_stock,
        'out_of_stock': out_of_stock,
        'form': form,
    }
    return render(request, 'index.html', context)
