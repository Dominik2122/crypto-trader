# Generated by Django 3.2.5 on 2021-08-02 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cryptocurrency', '0012_merge_0003_auto_20210728_2117_0011_alter_price_date'),
    ]

    operations = [
        migrations.RenameField(
            model_name='price',
            old_name='price',
            new_name='value',
        ),
        migrations.AlterField(
            model_name='price',
            name='date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]