from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter()
router.register('my', views.AccountViewSet, basename='')
router.register('transactions', views.TransactionViewSet, basename='transactions')


app_name = 'account'

urlpatterns = router.urls
