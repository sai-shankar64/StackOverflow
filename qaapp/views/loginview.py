from django.views import View
from django.shortcuts import render,get_object_or_404
from qaapp.forms import *
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.shortcuts import redirect
import ipdb

class LoginView(View):
    form_class = LoginForm

    def get(self,request,*args,**kwargs):
        # ipdb.set_trace()
        form=LoginForm()
        return render(request,template_name='loginform.html',context={'form':form})

    def post(self,request):
        form=LoginForm(request.POST)
        if form.is_valid():
            user = authenticate(
                request,
                username=form.cleaned_data['username'],
                password=form.cleaned_data['password'],
            )
            if user is not None:
                login(request,user)
                return redirect('qaapp:viewquestions')
            else:
                return redirect('qaapp:login')
