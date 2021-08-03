from django.db import models
from Auth.models import User
from cryptocurrency.models import Cryptocurrency, Price


# Create your models here.
class Account(models.Model):
    balance = models.DecimalField(decimal_places=2, max_digits=9, default=0)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='account')


class Transaction(models.Model):
    price = models.ForeignKey(Price, on_delete=models.CASCADE, related_name='transaction')
    account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='transactions')
    crypto = models.ForeignKey(Cryptocurrency, on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='transactions')
    amount = models.DecimalField(decimal_places=3, max_digits=9, default=0)
    value = models.DecimalField(decimal_places=2, max_digits=9, default=0)

    objects = TransactionManager()


class TransactionManager(models.Manager):
    def create_transaction(self, crypto, user, amount):
        crypto = Cryptocurrency.objects.get(name=crypto)
        price = Price.objects.filter(crypto=crypto)
        account = Account.object.get(owner=user)
        value = amount * price.value
        transaction = self.create(price=price, account=account, cyrpto=crypto, owner=user, amount=amount, value=value)
        return transaction
