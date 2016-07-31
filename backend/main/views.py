from django.http import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
import calendar
import locale
from os import listdir
from os.path import isfile, join

def test(request):

    mypath = "../media/"
    onlyfiles = [{'price': 20, 'photo': f} for f in listdir(mypath) if isfile(join(mypath, f))]
    print(onlyfiles)

    context = {
        "files": onlyfiles
    }
    return render(request, 'index.html', context)


def calendar_page(request):
    cal = calendar.Calendar(firstweekday=0)
    year = []

    for i in range(12):
        i += 1
        year.append(cal.monthdayscalendar(2016, i))

    locale.setlocale(locale.LC_ALL, "Russian_Russia.1251")
    context = {
        'year': year,
        'month_abbr': calendar.month_name[1:],
        'day_abbr': calendar.day_abbr
    }
    return render(request, 'main/calendar.html', context)

def search(request):
    s = [
     {'id': 1, 'photo': '3038655H.jpg', 'price': 20}, {'id': 1, 'photo': '3046522H.jpg', 'price': 20},
     {'id': 1, 'photo': '3046525H.jpg', 'price': 20}, {'id': 1, 'photo': '3049276H.jpg', 'price': 20},
     {'id': 1, 'photo': '3056125H.jpg', 'price': 20}, {'id': 1, 'photo': '3056882H.jpg', 'price': 20},
     {'id': 1, 'photo': '3059484H.jpg', 'price': 20}, {'id': 1, 'photo': '3059485H.jpg', 'price': 20},
     {'id': 1, 'photo': '3059770H.jpg', 'price': 20}, {'id': 1, 'photo': '3066949H.jpg', 'price': 20},
     {'id': 1, 'photo': '3072333H.jpg', 'price': 20}, {'id': 1, 'photo': '3078820H.jpg', 'price': 20},
     {'id': 1, 'photo': '3117296H.jpg', 'price': 20}, {'id': 1, 'photo': '3117300H.jpg', 'price': 20},
     {'id': 1, 'photo': '3125111H.jpg', 'price': 20}, {'id': 1, 'photo': '3130430H.jpg', 'price': 20},
     {'id': 1, 'photo': '3163977H.jpg', 'price': 20}, {'id': 1, 'photo': '3211180H.jpg', 'price': 20},
     {'id': 1, 'photo': '3211377H.jpg', 'price': 20}, {'id': 1, 'photo': '3236104H.jpg', 'price': 20},
     {'id': 1, 'photo': '3245098H.jpg', 'price': 20}, {'id': 1, 'photo': '3265559H.jpg', 'price': 20},
     {'id': 1, 'photo': '3268346H.jpg', 'price': 20}, {'id': 1, 'photo': '3270165H.jpg', 'price': 20},
     {'id': 1, 'photo': '3285531H.jpg', 'price': 20}, {'id': 1, 'photo': '3285532H.jpg', 'price': 20},
     {'id': 1, 'photo': '3288427H.jpg', 'price': 20}, {'id': 1, 'photo': '3294049H.jpg', 'price': 20},
     {'id': 1, 'photo': '3294050H.jpg', 'price': 20}, {'id': 1, 'photo': '3294051H.jpg', 'price': 20}]

    return JsonResponse(s, safe=False)

def product_detail(request, id):
    s = {
        'id': 1,
        'name': "Курица",
    }
    return JsonResponse(s)