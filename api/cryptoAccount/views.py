from rest_framework import viewsets, mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import get_user_model

User = get_user_model()

from .serializers import CryptoAccountSerializer
from .models import CryptoAccount, Owned


class CryptoAccountViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = CryptoAccountSerializer

    def list(self, request, *args, **kwargs):
        user = request.user
        serializer = self.get_serializer(CryptoAccount.objects.get(owner=user))
        return Response(serializer.data)
