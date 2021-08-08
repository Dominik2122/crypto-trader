from rest_framework import viewsets, mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated



from .models import Cryptocurrency
from .serializers import CryptocurrencySerializer, CryptoWithCurrentPriceSerializer



class CryptocurrencyViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    queryset = Cryptocurrency.objects.all()
    serializer_class = CryptoWithCurrentPriceSerializer

    def get_queryset(self):
        return Cryptocurrency.objects.all()


# from pycoingecko import CoinGeckoAPI
# cg = CoinGeckoAPI()
# from .tasks import printHello
# def current_datetime(request):
#     now = datetime.datetime.now()
#     html = "<html><body>It is now %s.</body></html>" % now
#     printHello()
#     return HttpResponse(html)
