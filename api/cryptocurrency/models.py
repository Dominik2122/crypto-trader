from django.db import models

# Create your models here.
class Cryptocurrency(models.Model):
    name = models.CharField(max_length=255)


class Price(models.Model):
    cryptocurrency = models.ForeignKey(Cryptocurrency, related_name='price', on_delete=models.CASCADE)
    value = models.DecimalField(decimal_places=2, max_digits=9, default=0)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.cryptocurrency.name + 'price'
