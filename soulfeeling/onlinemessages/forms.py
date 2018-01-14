from django import forms

from onlinemessages import models


class OnlineMessagesForm(forms.ModelForm):
    class Meta:
        fields = ("message", "address","phone")
        model = models.OnlineMessages

    def __init__(self, *args, **kwargs):
        user = kwargs.pop("user", None)
        super().__init__(*args, **kwargs)
