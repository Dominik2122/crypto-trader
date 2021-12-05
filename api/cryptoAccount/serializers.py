from cryptocurrency.models import Price
from rest_framework import serializers

from .models import CryptoAccount, Owned


class OwnedSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField('get_name')
    current_price = serializers.SerializerMethodField('get_current_price')
    value = serializers.SerializerMethodField('get_value')

    def get_name(self, owned):
        return owned.crypto.name

    def get_current_price(self, owned):
        return Price.objects.filter(cryptocurrency=owned.crypto).latest('date').value

    def get_value(self, owned):
        price = self.get_current_price(owned)
        amount = owned.amount
        return price * amount

    class Meta:
        model = Owned
        exclude = ('account', 'crypto', 'id')


class CryptoAccountSerializer(serializers.ModelSerializer):
    owned = serializers.SerializerMethodField('get_owned')

    def get_owned(self, cryptoAccount):
        owned = cryptoAccount.owned
        serializer = OwnedSerializer(owned, many=True)
        return serializer.data

    class Meta:
        model = CryptoAccount
        fields = ['balance', 'owned']
