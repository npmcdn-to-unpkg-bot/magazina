from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.test),
    url(r'^calendar$', views.calendar_page),
    url(r'^api2/search$', views.search),
    url(r'^api2/product/([0-9]+)$', views.product_detail),
]
