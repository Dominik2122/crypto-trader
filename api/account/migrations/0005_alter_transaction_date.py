# Generated by Django 3.2 on 2021-10-10 15:38

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('account', '0004_alter_transaction_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='date',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]