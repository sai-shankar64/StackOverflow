from django.views import View
from django.shortcuts import render
from qaapp.models import *
from qaapp.forms import *
from rest_framework.response import Response
from qaapp.serializers import *
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework import status
from rest_framework.renderers import TemplateHTMLRenderer
from django.views.generic import CreateView
import ipdb
from django.core import serializers

class QuestionViewApi(APIView):
    def get(self,request,id,format=None):
        # ipdb.set_trace()
        result=Question.objects.filter(id=id)
        serializer=QuestionSerializer(result,context={'username':result[0].user.username},many=True)
        return Response(serializer.data)
