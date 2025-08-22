from django.shortcuts import render
from django.shortcuts import render, redirect
from .models import Products


# Create your views here.
def homepage(request):
    return render(request, 'homepage.html')

def add_product(request):
    products = Products.objects.all
    if request.method == 'POST':
        NAME = request.POST.get('name')
        CATEGORY = request.POST.get('category')
        PRICE = request.POST.get('price')
        QUANTITY = request.POST.get('quantity')
        products =  Products.objects.create(
            name=NAME,
            category=CATEGORY,
            price=PRICE,
            quantity=QUANTITY,
        )
    return render(request, 'homepage.html')









