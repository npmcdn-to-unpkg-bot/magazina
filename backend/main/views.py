from django.shortcuts import render
from django.http import HttpResponse
import calendar
import locale
from os import listdir
from os.path import isfile, join

def test(request):

    mypath = "../media/"
    onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
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