from django.db import models
from backend.product.models import Product
from backend.customer.models import Customer


class Order(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    # rest of it
    products = models.ManyToManyField(Product)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)