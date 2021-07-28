from rest_framework import viewsets, mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .tasks import sleepy
from django.http import HttpResponse
import datetime


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



def current_datetime(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    sleepy.delay(4)
    return HttpResponse(html)
