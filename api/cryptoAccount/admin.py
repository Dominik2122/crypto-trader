from django.contrib import admin

from .models import CryptoAccount, Owned

# Register your models here.
admin.site.register(CryptoAccount)
admin.site.register(Owned)
