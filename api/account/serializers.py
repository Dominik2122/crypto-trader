from rest_framework import serializers
from .models import Account, Transaction
import datetime

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

    class Meta:
        model = Transaction
        fields = '__all__'
        read_only_fields = ("price", "account", "owner", "value")

    crypto = serializers.CharField(max_length=255)

    def create(self, validated_data):
        crypto = validated_data.pop('crypto')
        amount = validated_data.pop('amount')
        user = self.context['request'].user
        transaction = Transaction.objects.create_transaction(crypto, user, amount)
        return transaction


class AccountInfoSerializer(serializers.ModelSerializer):
    pastData = serializers.SerializerMethodField('get_pastData')

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
                    'date': serializer.data['date']
                })
                balance -= transaction.value
        return two_weeks_ago_balances

    class Meta:
        model = Account
        fields = ['balance', 'pastData']


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





