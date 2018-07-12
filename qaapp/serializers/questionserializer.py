from rest_framework import serializers
from qaapp.models import *

class QuestionSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('_user')
    def _user(self, obj):
        return self.context['username']

    class Meta:
        model = Question
        fields = ['id','title','description','tags','upvotes','downvotes','favourites','username']


