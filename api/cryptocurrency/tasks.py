from celery import shared_task
from datetime import datetime
from pycoingecko import CoinGeckoAPI
from celery.utils.log import get_task_logger
from .models import Price, Cryptocurrency
cg = CoinGeckoAPI()

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


@shared_task(bind=True)
def printHello(self):
    RequestResponse = cg.get_price(ids='bitcoin', vs_currencies='usd')
    print(self)
    print(RequestResponse)
    createNewObjects(RequestResponse)
    return RequestResponse