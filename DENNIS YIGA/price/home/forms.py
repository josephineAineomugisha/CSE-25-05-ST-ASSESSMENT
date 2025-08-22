from django import forms
from .models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ["name", "category", "price", "quantity", "color", "image"]

        widgets = {
            "name": forms.TextInput(attrs={"class": "form-control mb-2", "placeholder": "Product Name"}),
            "category": forms.TextInput(attrs={"class": "form-control mb-2", "placeholder": "Category"}),
            "price": forms.NumberInput(attrs={"class": "form-control mb-2", "placeholder": "Price"}),
            "quantity": forms.NumberInput(attrs={"class": "form-control mb-2", "placeholder": "Quantity"}),
            "color": forms.TextInput(attrs={"class": "form-control mb-2", "placeholder": "Color"}),
            "image": forms.FileInput(attrs={"class": "form-control mb-2"}),
        }
        labels = {
            "name": "Product Name",
            "category": "Category",
            "price": "Price (UGX)",
            "quantity": "Quantity",
            "color": "Color",
            "image": "Product Image"
        }