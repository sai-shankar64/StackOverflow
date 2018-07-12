from django import forms
from qaapp.models import *

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        exclude = ['id']
        widgets = {
            'text': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Your Comment'}),
        }

