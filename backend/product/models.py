from django.db import models


class Product(models.Model):
    # sku = models.PositiveSmallIntegerField()
    price = models.PositiveIntegerField()
    #vendor code
    # barcode