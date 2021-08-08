from rest_framework import serializers
from .models import Cryptocurrency, Price

class CryptocurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Cryptocurrency
        fields = '__all__'





class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = '__all__'


class CryptoWithCurrentPriceSerializer(serializers.ModelSerializer):
    price = serializers.SerializerMethodField('get_current_price')

    def get_current_price(self, crypto):
        price = crypto.price.latest('date')
        serializer = PriceSerializer(price)
        print(serializer)
        return serializer.data

    class Meta:
        model = Cryptocurrency
        fields = ['name', 'price']
