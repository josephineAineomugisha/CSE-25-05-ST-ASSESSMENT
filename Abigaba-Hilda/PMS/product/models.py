from django.db import models
from django.db.models import Max


class Product(models.Model):
    p_id = models.CharField(max_length=100, unique=True)  
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    quantity = models.PositiveIntegerField()
    color = models.CharField(max_length=30)
    image = models.ImageField(upload_to='product/', blank=True, null=True)
    date = models.DateField(auto_now_add=True)

    def save(self, *args, **kwargs):
        # Generate p_id only when creating a new product
        if not self.p_id:
            last_pid = Product.objects.aggregate(max_id=Max('id'))['max_id'] or 0
            next_id = last_pid + 1
            self.p_id = f"#{next_id:06d}"   
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} ({self.category})"
