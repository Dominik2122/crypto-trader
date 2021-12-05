from rest_framework import viewsets, mixins

from .models import Cryptocurrency
from .serializers import CryptoWithCurrentPriceSerializer \
    , CryptoWithPriceChangeSerializer


class CryptocurrencyViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    queryset = Cryptocurrency.objects.all()
    serializer_class = CryptoWithCurrentPriceSerializer

    def get_queryset(self):
        return Cryptocurrency.objects.all()


class CryptocurrencyWithPriceChangedViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    queryset = Cryptocurrency.objects.all()
    serializer_class = CryptoWithPriceChangeSerializer

    def get_queryset(self):
        return Cryptocurrency.objects.all()
