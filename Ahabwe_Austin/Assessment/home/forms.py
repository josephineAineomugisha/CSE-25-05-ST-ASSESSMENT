from django import forms
from .models import Product

class ProductForm(forms.ModelForm):
    name = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Product Name'}))
    category = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Category'}))
    price = forms.DecimalField(widget=forms.NumberInput(attrs={'class': 'form-control', 'placeholder': 'Price'}))
    quantity = forms.IntegerField(widget=forms.NumberInput(attrs={'class': 'form-control', 'placeholder': 'Quantity'}))
    color = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Color'}))
    image = forms.ImageField(widget=forms.FileInput(attrs={'class': 'form-control'}))

    class Meta:
        model = Product
        fields = ['name', 'category', 'price', 'quantity', 'color', 'image']