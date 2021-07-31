from pycoingecko import CoinGeckoAPI
cg = CoinGeckoAPI()

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


# Create your models here.


class UserManager(BaseUserManager):

    def create_user(self, email, password, **extra_fields):
        if not email or not password:
            raise ValueError('Insert correct data')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        print(user.email, 'from function')
        user.save()
        print(user.email, 'from function')
        return user

    def create_superuser(self, email, password):
        print(email, password)
        user = self.create_user(email, password)
        print(user)
        user.is_staff = True
        user.is_superuser = True
        print(user.is_superuser)
        user.save()
        print('problem' ,user.is_superuser)
        return user


class User(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(max_length=255, unique=True)
    login = models.CharField(max_length=255)
    is_staff = models.BooleanField(max_length=255, default=False)
    is_superuser = models.BooleanField(max_length=255, default=False)
    avatar_url = models.CharField(max_length=255)

    objects = UserManager()

    USERNAME_FIELD = 'email'

