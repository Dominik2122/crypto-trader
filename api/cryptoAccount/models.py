from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver

from account.models import Transaction
from cryptocurrency.models import Cryptocurrency


User = get_user_model()

# Create your models here.
class CryptoAccount(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cryptoAccount')
    balance = models.DecimalField(decimal_places=2, max_digits=9, default=0)

    def __str__(self):
        return self.owner.login + ' ' + str(self.balance)

class Owned(models.Model):
    crypto = models.ForeignKey(Cryptocurrency, on_delete=models.CASCADE)
    amount = models.DecimalField(decimal_places=3, max_digits=9, default=0)
    account = models.ForeignKey(CryptoAccount, on_delete=models.CASCADE, related_name='owned', blank=True, default=None)

    def __str__(self):
        return self.crypto.name + ' ' + self.account.owner.login


@receiver(post_save, sender=Transaction)
def update_account_status(sender, instance, created, **kwargs):
    if created:
        user = instance.owner
        account, created = CryptoAccount.objects.get_or_create(owner=user)
        owned, created = Owned.objects.get_or_create(crypto=instance.crypto, account=account)
        if created:
            owned.amount = instance.amount
        else:
            owned.amount += instance.amount
        owned.save()
        cryptoAccount, created = CryptoAccount.objects.get_or_create(owner=user)
        cryptoAccount.balance = cryptoAccount.balance - instance.crypto.price.latest('date').value * instance.amount
        cryptoAccount.save()
