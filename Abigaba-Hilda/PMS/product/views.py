
from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import ProductForm
from .models import Product

def product_list(request):
    products = Product.objects.all()
    form = ProductForm(request.POST or None, request.FILES or None)
    if request.method == "POST":
        if form.is_valid():
            form.save()
            messages.success(request, "✅ Product added successfully!")
            return redirect("product_list")  

    context = {
        "form": form,
        "products": products,

    }
    return render(request, "products.html", context)
