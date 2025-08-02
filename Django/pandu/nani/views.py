from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from.models import Student
from django.contrib.auth import login as auth_login,authenticate,logout

def contact(request):
     s=Student.objects.all()
     return render(request,'contact.html',{'Student_list':s})

def details(request,slug):
     Student=Student.objects.get(slug=slug)
     return render(request,'details.html',{'Student':Student})


def register(request):
     if request.method == 'POST':
          form = UserCreationForm(request.post)
          if form.is_valid():
               form.save()
               return redirect("contact")
     else:
          form = UserCreationForm()
     return render(request, 'register.html', {'form': form})


def login(request):
     if request.method == 'POST':
          form = AuthenticationForm(data=request.POST)
          if form.is_valid():
               user = form.get_user()
               auth_login(request, user)
               return redirect("contact")
     else:
          form  = AuthenticationForm()
     return render(request, 'login.html', {'form': form})


def logout(request):
     if request.method == 'POST':
          logout(request)
          return redirect("contact")
     return render(request, 'logout.html')