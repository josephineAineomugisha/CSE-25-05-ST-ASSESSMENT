from django.shortcuts import render,redirect
from django.contrib import messages
from .models import Product
from .form import ProductForm # here we shall use the modelform

# Create your views here.
def index(request):
    products = Product.objects.all()  # get all products for table

    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES) 
        if form.is_valid():
            form.save()  # save to database
            messages.success(request, "Product has been added succesfully! ")
            return redirect('index')  # reload page to see new product
    else:
        form = ProductForm()
    return render(request, 'index.html', {'form': form, 'products': products})