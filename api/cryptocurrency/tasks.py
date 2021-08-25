from celery import shared_task
from datetime import datetime
from pycoingecko import CoinGeckoAPI
from celery.utils.log import get_task_logger
from .models import Price, Cryptocurrency
cg = CoinGeckoAPI()

cryptos = ['bitcoin', 'litecoin', 'ethereum', 'tether', 'binance coin', 'cardano', 'xrp', 'dogecoin', 'usd coin', 'polkadot', 'uniswap']

# @shared_task(bind=True)
# def makeAnAPICall(self):
#     RequestResponse = cg.get_price(ids='bitcoin', vs_currencies='usd')
#     print(RequestResponse)
#     createNewObjects(RequestResponse)
#     return RequestResponse


def createNewObjects(APIResponse):
    print(APIResponse)
    price = Cryptocurrency(name='bitcoin')
    price.save()


@shared_task
def getBitcoinPrices():
    RequestResponse = cg.get_price(ids=cryptos, vs_currencies='usd')
    for key in RequestResponse.keys():
        crypto = Cryptocurrency.objects.get_or_create(name=key)
        Price.objects.create(cryptocurrency=crypto[0], value=float(RequestResponse.get(key).get('usd')))
