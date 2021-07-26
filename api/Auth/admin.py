from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# Register your models here.

from . import models


class UserAdmin(BaseUserAdmin):
    ordering = ['id']
    list_display = ('email', 'login')
    list_filter = ('is_staff', 'is_superuser')
    fieldsets = (
        (None,
         {'fields': ('email', 'password')}
         ),
        ('Personal Info',
         {'fields': ('login',)}
         ),
        ('Permissions',
         {'fields': ('is_staff', 'is_superuser')}
         ),
        ('Important dates',
        {'fields': ('last_login',)})
    )

    add_fielsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2')
        })
    )


admin.site.register(models.User, UserAdmin)
