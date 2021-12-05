from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('', views.CryptocurrencyViewSet)
router.register('home', views.CryptocurrencyWithPriceChangedViewSet)

app_name = 'cryptocurrency'

urlpatterns = router.urls
