from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin

from django.core.urlresolvers import reverse_lazy
from django.http import Http404
from django.views import generic

from braces.views import SelectRelatedMixin

from . import forms
from . import models

from django.contrib.auth import get_user_model
User = get_user_model()


class PostList(SelectRelatedMixin, generic.ListView):
    model = models.OnlineMessages
    select_related = ("user",)

class CreatePost(LoginRequiredMixin, SelectRelatedMixin, generic.CreateView):
    fields = ('message','phone','address')
    model = models.OnlineMessages

    def form_valid(self, form):
        self.object = form.save(commit=False)
        self.object.user = self.request.user
        self.object.save()
        return super().form_valid(form)