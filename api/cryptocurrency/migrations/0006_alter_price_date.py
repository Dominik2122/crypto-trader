# Generated by Django 3.2.5 on 2021-07-31 10:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cryptocurrency', '0005_alter_price_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='price',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2021, 7, 31, 10, 57, 29, 667695)),
        ),
    ]
