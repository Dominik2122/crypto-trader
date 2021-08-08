from rest_framework import serializers
from .models import CryptoAccount, Owned


class OwnedSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField('get_name')

    def get_name(self, owned):
        return owned.crypto.name


    class Meta:
            model = Owned
            exclude = ('account',)


class CryptoAccountSerializer(serializers.ModelSerializer):
    owned = serializers.SerializerMethodField('get_owned')

    def get_owned(self, cryptoAccount):
        owned = cryptoAccount.owned
        serializer = OwnedSerializer(owned, many=True)
        return serializer.data

    class Meta:
        model = CryptoAccount
        fields = ['balance', 'owned']
