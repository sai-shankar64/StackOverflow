from django.views import View
from django.shortcuts import render,get_object_or_404
from qaapp.forms import *
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.shortcuts import redirect

def Logout_user(request):
    logout(request)
    return redirect('qaapp:login')