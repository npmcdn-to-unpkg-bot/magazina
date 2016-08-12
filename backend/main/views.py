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
     {'id': 1, 'photo': '3038655H.jpg', 'price': 20}, {'id': 2, 'photo': '3046522H.jpg', 'price': 20},
     {'id': 3, 'photo': '3046525H.jpg', 'price': 20}, {'id': 4, 'photo': '3049276H.jpg', 'price': 20},
     {'id': 5, 'photo': '3056125H.jpg', 'price': 20}, {'id': 6, 'photo': '3056882H.jpg', 'price': 20},
     {'id': 7, 'photo': '3059484H.jpg', 'price': 20}, {'id': 8, 'photo': '3059485H.jpg', 'price': 20},
     {'id': 9, 'photo': '3059770H.jpg', 'price': 20}, {'id': 10, 'photo': '3066949H.jpg', 'price': 20},
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
        'id': id,
        'name': "Курица",
        'photo':  '/media/3117296H.jpg',
        'price': 200,
        'snapshots': {
            '0':  "http://127.0.0.1:8000/media/rucksack_normal_001.jpg",
            '1':  "http://127.0.0.1:8000/media/rucksack_normal_002.jpg",
            '2':  "http://127.0.0.1:8000/media/rucksack_normal_003.jpg",
            '3':  "http://127.0.0.1:8000/media/rucksack_normal_004.jpg",
            '4':  "http://127.0.0.1:8000/media/rucksack_normal_005.jpg",
            '5':  "http://127.0.0.1:8000/media/rucksack_normal_006.jpg",
            '6':  "http://127.0.0.1:8000/media/rucksack_normal_007.jpg",
            '7':  "http://127.0.0.1:8000/media/rucksack_normal_008.jpg",
            '8':  "http://127.0.0.1:8000/media/rucksack_normal_009.jpg",
            '9':  "http://127.0.0.1:8000/media/rucksack_normal_010.jpg",
            '10': "http://127.0.0.1:8000/media/rucksack_normal_011.jpg",
            '11': "http://127.0.0.1:8000/media/rucksack_normal_012.jpg",
            '12': "http://127.0.0.1:8000/media/rucksack_normal_013.jpg",
            '13': "http://127.0.0.1:8000/media/rucksack_normal_014.jpg",
            '14': "http://127.0.0.1:8000/media/rucksack_normal_015.jpg",
            '15': "http://127.0.0.1:8000/media/rucksack_normal_016.jpg",
        }
    }
    return JsonResponse(s)