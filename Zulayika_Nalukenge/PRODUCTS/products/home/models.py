from django.db import models

# Create your models here.
class Products(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=False, null=False)
    category = models.CharField(max_length=255, choices=[('smart_phones', 'Smart Phones'), ('fashion', 'Phones'),('interior_design', 'Interior Design'), ('laptops','Laptops')])
    price = models.PositiveBigIntegerField(max_length=255)
    quantity = models.PositiveIntegerField()
    colour = models.CharField(max_length=30, blank=True, null=True)
   
    def __str__(self):
      return self.name