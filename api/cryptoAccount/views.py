from django.contrib.auth import get_user_model
from rest_framework import viewsets, mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

User = get_user_model()

from .serializers import CryptoAccountSerializer
from .models import CryptoAccount


class CryptoAccountViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = CryptoAccountSerializer

    def list(self, request, *args, **kwargs):
        user = request.user
        account, created = CryptoAccount.objects.get_or_create(owner=user)
        serializer = self.get_serializer(account)
        return Response(serializer.data)
