from django.contrib.auth import get_user_model
from rest_framework import viewsets, mixins, generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

User = get_user_model()

from .serializers import AccountSerializer, TransactionSerializer, \
    TransactionCreateSerializer, HomeAccountInfoSerializer, AccountInfoSerializer
from .models import Account, Transaction


class AccountViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = AccountSerializer

    def list(self, request, *args, **kwargs):
        user = request.user
        serializer = self.get_serializer(Account.objects.get(owner=user))
        return Response(serializer.data)


class TransactionViewSet(viewsets.GenericViewSet, generics.ListCreateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        return Transaction.objects.filter(owner=user)

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return TransactionSerializer
        else:
            return TransactionCreateSerializer


class AccountInfoViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = AccountInfoSerializer

    def get_queryset(self):
        user = self.request.user
        return Account.objects.filter(owner=user)

    def get_serializer_context(self):
        context = super().get_serializer_context()
        print(self.request.query_params.get('days'))
        context["days"] = self.request.query_params.get('days')
        return context

    def list(self, request, *args, **kwargs):
        user = request.user
        serializer = self.get_serializer(Account.objects.get(owner=user))
        return Response(serializer.data)


class HomeAccountInfo(viewsets.GenericViewSet, mixins.ListModelMixin):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = HomeAccountInfoSerializer

    def list(self, request, *args, **kwargs):
        user = request.user
        serializer = self.get_serializer(Account.objects.get(owner=user))
        return Response(serializer.data)
