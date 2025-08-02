from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    return render(request, 'home.html')
    # return HttpResponse("Hello, my world! ")


def about(request):
    return render(request, 'about.html')
    # return HttpResponse("This is about page")
