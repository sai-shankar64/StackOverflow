from django.views import View
from django.shortcuts import render,get_object_or_404
from qaapp.forms import *
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
from django.shortcuts import redirect

class SignUpView(View):
    form_class = SignUpForm

    def get(self,request,*args,**kwargs):
        form = SignUpForm()
        return render(request,template_name="signupform.html",context={'form':form})

    def post(self,request):
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = User.objects.create_user(**form.cleaned_data)
            user = authenticate(
                request,
                username=form.cleaned_data['username'],
                password=form.cleaned_data['password'],
            )
            if user is not None:
                login(request,user)
                return redirect('qaapp:viewquestions')
            else:
                return redirect('qaapp:signup')
