import datetime

from django.shortcuts import render
from rest_framework import viewsets, mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse

from .serializers import AccountSerializer, TransactionSerializer, TransactionCreateSerializer
from .models import Account, Transaction


class AccountViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = AccountSerializer

    def retrieve(request, *args, **kwargs):
        user = request.user
        return Account.filter(user=user)


class TransactionViewSet(ListCreateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        return Transaction.filter(owner=user)

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return TransactionSerializer
        else:
            return TransactionCreateSerializer
