from rest_framework import serializers
from qaapp.models import *

class AnswerSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('_user')
    def _user(self, obj):
        # import ipdb
        # ipdb.set_trace()
        if self.context['username']=="Anonymous":
            return obj.user.username
        return self.context['username']
    class Meta:
        model=Answer
        fields=['id','text','upvotes','downvotes','username']
