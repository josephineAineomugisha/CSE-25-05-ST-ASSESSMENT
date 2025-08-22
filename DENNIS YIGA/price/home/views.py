from django.shortcuts import render, redirect, get_object_or_404
from django.db.models import Sum, F
from django.contrib import messages
from .models import Product
from . forms import ProductForm



def dashboard(request):
    products = Product.objects.all()

    total_sales = 50000000   # demo value
    total_orders = 15000000  # demo value

    stock_value = products.aggregate(
        total_stock=Sum(F("price") * F("quantity"))
    )["total_stock"] or 0

    out_of_stock = products.filter(quantity=0).count()

    context = {
        "products": products,
        "total_sales": total_sales,
        "total_orders": total_orders,
        "stock_value": stock_value,
        "out_of_stock": out_of_stock,
        "form": ProductForm(),   # send form to template
    }
    return render(request, "dashboard.html", context)


def add_product(request):
    if request.method == "POST":
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, "Product added successfully.")
        else:
            messages.error(request, "Please correct the errors below.")
    return redirect("dashboard")


def update_product(request, pk):
    product = get_object_or_404(Product, pk=pk)
    if request.method == "POST":
        form = ProductForm(request.POST, request.FILES, instance=product)
        if form.is_valid():
            form.save()
            messages.success(request, "Product updated successfully.")
            return redirect("dashboard")
    else:
        form = ProductForm(instance=product)
    return render(request, "update_product.html", {"form": form, "product": product})


def delete_product(request, pk):
    product = get_object_or_404(Product, pk=pk)
    product.delete()
    messages.success(request, "Product deleted successfully.")
    return redirect("dashboard")
