from django import forms
from qaapp.models import *

class QuestionForm(forms.ModelForm):
    class Meta:
        model=Question
        exclude=['id','user','upvotes','downvotes','favourites']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder':'Question Title'}),
            'description': forms.Textarea(attrs={'class': 'form-control', 'placeholder':'Question Description'}),
            'tags': forms.TextInput(attrs={'class': 'form-control', 'placeholder':'Tags - seperate by Space'}),
        }

