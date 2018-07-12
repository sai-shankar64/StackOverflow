from django import forms
from qaapp.models import *

class AnswerForm(forms.ModelForm):
    class Meta:
        model = Answer
        exclude = ['id']
        widgets = {
            'text': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Your Answer'}),
        }

