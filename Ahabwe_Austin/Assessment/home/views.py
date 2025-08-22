from django.shortcuts import render,redirect
from .models import Product
from .forms import ProductForm
from django.db.models import Sum, Count

def dashboard(request):
    products = Product.objects.all()

    total_sales = products.aggregate(total=Sum('price'))['total'] or 0
    total_orders = products.count()
    in_stock_value = products.aggregate(stock_value=Sum('price'))['stock_value'] or 0
    out_of_stock = products.filter(quantity=0).count()

    if request.method == "POST":
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
    else:
        form = ProductForm()

    context = {
        'products': products,
        'total_sales': total_sales,
        'total_orders': total_orders,
        'in_stock_value': in_stock_value,
        'out_of_stock': out_of_stock,
        'form': form,
    }
    return render(request, "dashboard.html", context)

# Add product view
def add_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('dashboard')
    else:
        form = ProductForm()
    return render(request, 'dashboard.html', {'form': form})