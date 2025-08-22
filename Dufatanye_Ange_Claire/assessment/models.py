from django.db import models

class Product (models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    categories = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField()
    def __str__(self):
        return f"{self.name} - {self.quantity} - {self.categories} - {self.price}"