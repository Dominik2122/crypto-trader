from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter()
router.register('my', views.AccountViewSet, basename='')
router.register('transactions', views.TransactionViewSet, basename='transactions')
router.register('home-account-info', views.HomeAccountInfo, basename='home-account-info')
router.register('account-info', views.AccountInfoViewSet, basename='account-info')


app_name = 'account'

urlpatterns = router.urls
