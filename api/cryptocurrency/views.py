from rest_framework import viewsets, mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .tasks import makeAnAPICall
from django.http import HttpResponse
import datetime

from pycoingecko import CoinGeckoAPI

cg = CoinGeckoAPI()

from .models import Cryptocurrency
from .serializers import CryptocurrencySerializer


class CryptocurrencyViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    queryset = Cryptocurrency.objects.all()
    serializer_class = CryptocurrencySerializer

    def get_queryset(self):
        user = self.request.user
        return Cryptocurrency.objects.all()


# if needed - async task ready
# def current_datetime(request):
#     now = datetime.datetime.now()
#     html = "<html><body>It is now %s.</body></html>" % now
#     makeAnAPICall.delay()
#     return HttpResponse(html)



