from django.views import View
from django.shortcuts import render
from qaapp.models import *
from qaapp.forms import *
from django.db.models import F
from rest_framework.response import Response
from qaapp.serializers import *
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView,UpdateAPIView
from rest_framework import status
from rest_framework.renderers import TemplateHTMLRenderer
import ipdb

class VotingViewApi(UpdateAPIView):
    def put(self,request,type,id,action):
        if(type=="question"):
            if action=="upvote":
                Question.objects.filter(id=id).update(upvotes = F('upvotes')+1)
            elif action == "downvote":
                Question.objects.filter(id=id).update(downvotes=F('downvotes') + 1)
            elif action=="favourite":
                Question.objects.filter(id=id).update(favourites = F('favourites')+1)
        elif (type == "answer"):
            if action == "upvote":
                Answer.objects.filter(id=id).update(upvotes=F('upvotes') + 1)
            elif action == "downvote":
                Answer.objects.filter(id=id).update(downvotes=F('downvotes') + 1)
        return Response({})
