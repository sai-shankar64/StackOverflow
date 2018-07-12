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
class QuestionsViewApi(APIView):
    # renderer_classes = [TemplateHTMLRenderer]
    def get(self,request,format=None):
        result=Question.objects.all()
        serializer=QuestionSerializer(result,context={'username':'Anonymous'},many=True)
        # ipdb.set_trace()
        # return Response({'questions':serializer.data},template_name="questions.html")
        # return Response({'questions': serializer.data})
        return Response(serializer.data)

class CreateQuestionViewApi(CreateAPIView):

    def post(self,request):
        serializer = QuestionSerializer(data=request.data,context={'username':request.user.username})
        if serializer.is_valid():
            # import ipdb
            # ipdb.set_trace()
            serializer.save(user=request.user)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
