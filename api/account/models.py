from django.db import models
from django.contrib.auth import get_user_model
from cryptocurrency.models import Cryptocurrency, Price
from django.db.models.signals import post_save
from django.dispatch import receiver

User = get_user_model()


class Account(models.Model):
    balance = models.DecimalField(decimal_places=2, max_digits=9, default=1000)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='account')


@receiver(post_save, sender=User)
def create_user_account(sender, instance, created, **kwargs):
    if created:
        Account.objects.create(owner=instance)

class TransactionManager(models.Manager):
    def create_transaction(self, crypto, user, amount):
        cryptocurrency = Cryptocurrency.objects.get(name=crypto)
        price = Price.objects.filter(cryptocurrency=cryptocurrency).first()
        account = Account.objects.get(owner=user)
        value = amount * price.value
        transaction = self.create(price=price, account=account, crypto=cryptocurrency, owner=user, amount=amount, value=value)
        return transaction

class Transaction(models.Model):
    price = models.ForeignKey(Price, on_delete=models.CASCADE, related_name='transaction')
    account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='transactions')
    crypto = models.ForeignKey(Cryptocurrency, on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='transactions')
    amount = models.DecimalField(decimal_places=3, max_digits=9, default=0)
    value = models.DecimalField(decimal_places=2, max_digits=9, default=0)

    objects = TransactionManager()
