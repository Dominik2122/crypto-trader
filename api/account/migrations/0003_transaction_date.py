# Generated by Django 3.2.5 on 2021-09-24 20:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_alter_account_balance'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='date',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]