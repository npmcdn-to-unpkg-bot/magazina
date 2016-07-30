from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.test),
    url(r'^calendar$', views.calendar_page),
]
