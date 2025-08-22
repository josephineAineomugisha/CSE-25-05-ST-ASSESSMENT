from django.db import models


# Create your models here.

class Product(models.Model):
    id = models.AutoField(primary_key=True)   # Auto-increment product ID
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=12, decimal_places=2)  # e.g. 15,800,000.00
    quantity = models.PositiveIntegerField()
    color = models.CharField(max_length=50, blank=True, null=True)
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True) 
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} ({self.category})"

    @property
    def total_value(self):
        """Returns the stock value of this product"""
        return self.price * self.quantity
