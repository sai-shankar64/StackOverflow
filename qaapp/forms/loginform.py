from django import forms
class LoginForm(forms.Form):
    username=forms.CharField(
        max_length=50,
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter Username'})
    )
    password=forms.CharField(
        max_length=100,
        required=True,
        widget=forms.PasswordInput(attrs={'class':'form-control','placeholder':'Enter Password'})
    )