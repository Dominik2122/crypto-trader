from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
# Create your models here.


class UserManager(BaseUserManager):

    def create_user(self, email, password, **extra_fields):
        user = self.model(email=self.normalize_email(email), password=password, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password):
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save()


class User(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(max_length=255, unique=True)
    login = models.CharField(max_length=255)
    is_staff = models.BinaryField(max_length=255)
    avatar_url = models.CharField(max_length=255)

    objects = UserManager()

    USERNAME_FIELD = 'email'
