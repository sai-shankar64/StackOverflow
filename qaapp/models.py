from django.db import models
from django.contrib.auth.models import User

class Question(models.Model):
    title=models.CharField(max_length=256)
    description=models.CharField(max_length=1024)
    upvotes=models.IntegerField(default=0)
    downvotes=models.IntegerField(default=0)
    favourites=models.IntegerField(default=0)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    tags=models.CharField(max_length=216)


class Answer(models.Model):
    text=models.CharField(max_length=10240)
    upvotes=models.IntegerField(default=0)
    downvotes=models.IntegerField(default=0)
    question=models.ForeignKey(Question,on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)


class Comment(models.Model):
    text = models.CharField(max_length=10240)
    upvotes = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    answer=models.ForeignKey(Answer,on_delete=models.CASCADE, blank=True, null=True)
    question=models.ForeignKey(Question,on_delete=models.CASCADE, blank=True, null=True)
