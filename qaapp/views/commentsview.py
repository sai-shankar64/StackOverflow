from django.views import View
from django.shortcuts import render
from qaapp.models import *
from rest_framework.response import Response
from qaapp.serializers import *
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework import status

class CommentsViewApi(APIView):

    def get(self, request,type,id):
        if type=="question":
            result = Comment.objects.filter(question_id=id)
        elif type=="answer":
            result = Comment.objects.filter(answer_id=id)
        serializer = CommentSerializer(result,context={'username':'Anonymous'},many=True)
        return Response(serializer.data)

class CreateCommentViewApi(CreateAPIView):

    def post(self,request,type,id):
        serializer = CommentSerializer(data=request.data,context={'username':request.user.username})
        if serializer.is_valid():
            serializer.validated_data[type+"_id"]=id
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
