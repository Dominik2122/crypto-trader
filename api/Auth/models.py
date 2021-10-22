from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from datetime import datetime
# Create your models here.


class UserManager(BaseUserManager):

    def create_user(self, login, email, password, **extra_fields):
        if not email or not password:
            raise ValueError('Insert correct data')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.login = login
        user.save()
        return user

    def create_superuser(self, login, email, password):
        user = self.create_user(login, email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(max_length=255, blank=False, unique=True)
    login = models.CharField(max_length=255, blank=False, unique=True)
    is_staff = models.BooleanField(max_length=255, default=False)
    is_superuser = models.BooleanField(max_length=255, default=False)
    last_login = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['login']


    def __str__(self):
        return self.login


class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='profile')
    avatar_url = models.CharField(max_length=255, blank=True)
    description = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.user.login
