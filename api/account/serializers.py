from rest_framework import serializers
from .models import Account, Transaction


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'


class TransactionCreateSerializer(serializers.ModelSerializer):
    crypto = serializers.CharField(max_length=255)
    amount = serializers.DecimalField(decimal_places=2, max_digits=9, coerce_to_string=False)

    def create(self, validated_data):
        crypto = validated_data.pop('crypto')
        amount = validated_data.pop('amount')
        user = self.context['request'].user
        transaction = Transaction.objects.create(crypto, user, amount)
        return transaction
