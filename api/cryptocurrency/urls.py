from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter()
router.register('', views.CryptocurrencyViewSet)

app_name = 'cryptocurrency'

urlpatterns = router.urls
# urlpatterns = [
#     path('a', views.current_datetime)
# ]
