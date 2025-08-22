from django.shortcuts import render, redirect
from django.db.models import Sum
from .forms import ProductForm
from .models import Product

def add_product(request):
    if request.method == "POST":
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("product")
    else:
        form = ProductForm()

    stock = Product.objects.aggregate(total=Sum('quantity'))['total'] or 0
    out_stock_count = Product.objects.filter(quantity=0).count()
    products = Product.objects.all()

    context = {
        "form": form,
        "products": products,
        "requests": products,
        "stock_summary": {"sales": 0, "orders": 0},
        "stock": stock,
        "out_stock_count": out_stock_count,
    }
    return render(request, "pages/product.html", context)
