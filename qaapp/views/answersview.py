from django.views import View
from django.shortcuts import render
from qaapp.models import *
from rest_framework.response import Response
from qaapp.serializers import *
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework import status
import ipdb


class AnswersViewApi(APIView):
    def get(self,request,id):
        result = Answer.objects.filter(question_id=id)
        serializer = AnswerSerializer(result,context={'username':'Anonymous'},many=True)
        return Response(serializer.data)

class CreateAnswerViewApi(CreateAPIView):

    def post(self,request,id):
        serializer = AnswerSerializer(data=request.data,context={'username':request.user.username})
        if serializer.is_valid():
            serializer.validated_data['question_id']=id
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
