from django.db import models
from django.utils import timezone

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=12, decimal_places=2) #eg."50000000 in UGX")
    quantity = models.PositiveIntegerField(default=0)
    color = models.CharField(max_length=100, blank=True)
    image = models.ImageField(upload_to="products/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} ({self.category})"

