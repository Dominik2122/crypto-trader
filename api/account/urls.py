from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter()
router.register('', views.AccountViewSet, basename='account')
router.register('transactions', views.TransactionViewSet, basename='transactions')


app_name = 'account'

urlpatterns = [
    path('', include((router.urls, 'account'), namespace='account')),
]
