from rest_framework import viewsets, mixins, generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import get_user_model

User = get_user_model()


from .serializers import AccountSerializer, TransactionSerializer, TransactionCreateSerializer
from .models import Account, Transaction


class AccountViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    serializer_class = AccountSerializer

    def retrieve(self, request, *args, **kwargs):
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
