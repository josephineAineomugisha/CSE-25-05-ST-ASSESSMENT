from django import forms
from .models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['product_id', 'name', 'category', 'price', 'quantity', 'color', 'image']
        widgets = {
            'product_id': forms.TextInput(attrs={'placeholder': 'Product ID'}),
            'name': forms.TextInput(attrs={'placeholder': 'Product Name'}),
            'category': forms.TextInput(attrs={'placeholder': 'Category'}),
            'price': forms.NumberInput(attrs={'placeholder': 'Price'}),
            'quantity': forms.NumberInput(attrs={'placeholder': 'Quantity'}),
            'color': forms.TextInput(attrs={'placeholder': 'Color'}),
            'image': forms.ClearableFileInput(attrs={'placeholder': 'Upload Image'}),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field_name in self.fields:
            if field_name not in ['image', 'color']:
                self.fields[field_name].required = True
            else:
                self.fields[field_name].required = False