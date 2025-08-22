from django import forms
from .models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = [ 'name', 'category', 'price', 'quantity', 'color', 'image']
        widgets = {
            'name': forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}),
            'category': forms.TextInput(attrs={'class':'form-control', 'placeholder':'Category'}),
            'price': forms.NumberInput(attrs={'class':'form-control', 'placeholder':'Price'}),
            'quantity': forms.NumberInput(attrs={'class':'form-control', 'placeholder':'Quantity'}),
            'color': forms.TextInput(attrs={'class':'form-control', 'placeholder':'Color'}),
            'image': forms.ClearableFileInput(attrs={'class':'form-control'}),
        }
