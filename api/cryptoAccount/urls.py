from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter()
router.register('my', views.CryptoAccountViewSet, basename='')


app_name = 'cryptoAccount'

urlpatterns = router.urls
