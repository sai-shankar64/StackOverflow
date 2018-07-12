from rest_framework import serializers
from qaapp.models import *

class CommentSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('_user')

    def _user(self, obj):
        if self.context['username']=="Anonymous":
            return obj.user.username
        return self.context['username']

    class Meta:
        model=Comment
        fields=['id','text','upvotes','username']
