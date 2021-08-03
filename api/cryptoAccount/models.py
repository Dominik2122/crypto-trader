from django.db import models
from cryptocurrency.models import Cryptocurrency
from Auth.models import User


# Create your models here.
class Owned(models.Model):
    crypto = models.ForeignKey(Cryptocurrency, on_delete=models.CASCADE)
    amount = models.DecimalField(decimal_places=3, max_digits=9, default=0)


class CryptoAccount(models.Model):
    owned = models.ForeignKey(Owned, on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cryptoAccount')
    balance = models.DecimalField(decimal_places=2, max_digits=9, default=0)
