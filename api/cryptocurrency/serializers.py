import datetime

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


class PriceWithoutCryptoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        exclude = ('cryptocurrency', 'id')


class CryptoWithCurrentPriceSerializer(serializers.ModelSerializer):
    price = serializers.SerializerMethodField('get_current_price')

    def get_current_price(self, crypto):
        price = crypto.price.latest('date')
        serializer = PriceSerializer(price)
        return serializer.data

    class Meta:
        model = Cryptocurrency
        fields = ['name', 'price']


class CryptoWithPriceChangeSerializer(serializers.ModelSerializer):
    price = serializers.SerializerMethodField('get_current_price')
    change = serializers.SerializerMethodField('get_price_change')
    pastData = serializers.SerializerMethodField('get_pastData')

    def get_pastData(self, crypto):
        today = datetime.date.today()
        two_weeks_ago = today - datetime.timedelta(days=14)
        two_weeks_ago_prices = crypto.price.filter(date__gte=two_weeks_ago)
        serializer = PriceWithoutCryptoSerializer(two_weeks_ago_prices, many=True)
        return serializer.data

    def get_current_price(self, crypto):
        price = crypto.price.latest('date')
        serializer = PriceWithoutCryptoSerializer(price)
        return serializer.data

    def get_price_change(self, crypto):
        today = datetime.date.today()
        yesterday = today - datetime.timedelta(days=1)
        yesterday_price = crypto.price.filter(date__lte=yesterday)
        serializer = PriceWithoutCryptoSerializer(yesterday_price.latest('date'))
        return serializer.data

    class Meta:
        model = Cryptocurrency
        fields = ['id', 'name', 'price', 'change', 'pastData']
