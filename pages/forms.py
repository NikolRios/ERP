from django import forms


class ContactMessageForm(forms.Form):
    name = forms.CharField(max_length=120)
    email = forms.EmailField(max_length=254)
    company = forms.CharField(max_length=160, required=False)
    plan = forms.CharField(max_length=80, required=False)
    message = forms.CharField(max_length=5000)
