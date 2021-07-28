from django.db import models

# Create your models here.
class Cryptocurrency(models.Model):
    name = models.CharField(max_length=255)


class Price(models.Model):
    cryptocurrency = models.ForeignKey(Cryptocurrency, related_name='price', on_delete=models.CASCADE)
    # price = models.NumberField()
    # date = models.DateTimeField()

    def __str__(self):
        return self.cryptocurrency.name + 'price'



