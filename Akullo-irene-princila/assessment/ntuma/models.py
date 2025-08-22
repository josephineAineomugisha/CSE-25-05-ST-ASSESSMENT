from django.db import models


class Product(models.Model):
    product_id = models.CharField(max_length=20, unique=True)  # e.g., #045341
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, )
    price = models.DecimalField(max_digits=12, decimal_places=2)  # e.g., 6,030,000
    quantity = models.PositiveIntegerField()
    color = models.CharField(max_length=30, blank=True, null=True)
    image = models.ImageField(upload_to='product_images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.product_id})"
