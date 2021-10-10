from rest_framework import serializers
from .models import Account, Transaction
import datetime

class AccountSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Account
        fields = '__all__'


class TransactionSerializer(serializers.ModelSerializer):
    crypto = serializers.ReadOnlyField(source='crypto.name')
    price = serializers.ReadOnlyField(source='price.value')

    class Meta:
        model = Transaction
        fields = ('crypto', 'id', 'date', 'price', 'amount', 'value')


class TransactionCreateSerializer(serializers.ModelSerializer):
    price = serializers.ReadOnlyField(source='price.value')
    crypto = serializers.CharField(max_length=255)

    class Meta:
        model = Transaction
        fields = '__all__'
        read_only_fields = ("price", "account", "owner", "value")

    def create(self, validated_data):
        crypto = validated_data.pop('crypto')
        amount = validated_data.pop('amount')
        user = self.context['request'].user
        transaction = Transaction.objects.create_transaction(crypto, user, amount)
        return transaction


class AccountInfoSerializer(serializers.ModelSerializer):
    pastData = serializers.SerializerMethodField('get_pastData')
    transactions = serializers.SerializerMethodField('get_transactions')

    def get_pastData(self, account):
        today = datetime.date.today()
        balance = account.balance
        days = self.context.get('days')
        if not days:
            days = 14
        else:
            days = int(days)
        two_weeks_ago_balances = []
        for i in range(days):
            day = today - datetime.timedelta(days=i)
            daily_transactions = account.transactions.filter(date__date=day).order_by('-date')
            for transaction in daily_transactions:
                serializer = TransactionSerializer(transaction)
                two_weeks_ago_balances.append({
                    'balance': balance,
                    'date': serializer.data['date'],
                    'transactionId': serializer.data['id']
                })
                balance -= transaction.value
        return two_weeks_ago_balances

    def get_transactions(self, account):
        today = datetime.date.today()
        days = self.context.get('days')
        if not days:
            days = 14
        else:
            days = int(days)
        day = today - datetime.timedelta(days=days)
        transactions = account.transactions.filter(date__gte=day).order_by('-date')
        serializer = TransactionSerializer(transactions, many=True)
        return serializer.data

    class Meta:
            model = Account
            fields = ['balance', 'pastData', 'transactions']


class HomeAccountInfoSerializer(serializers.ModelSerializer):
    pastData = serializers.SerializerMethodField('get_pastData')

    def get_pastData(self, account):
        today = datetime.date.today()
        balance = account.balance

        two_weeks_ago_balances = []
        for i in range(14):
            day = today - datetime.timedelta(days=i)
            daily_transactions = account.transactions.filter(date__date=day).order_by('-date')
            two_weeks_ago_balances.append({
                'balance': balance,
                'date': day
            })
            for transaction in daily_transactions:
                balance -= transaction.value
        return two_weeks_ago_balances

    class Meta:
        model = Account
        fields = ['balance', 'pastData']





