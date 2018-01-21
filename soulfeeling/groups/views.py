from django.contrib import messages
from django.contrib.auth.mixins import(
    LoginRequiredMixin,
    PermissionRequiredMixin
)

from django.core.urlresolvers import reverse
from django.db import IntegrityError
from django.shortcuts import get_object_or_404
from django.views import generic
from groups.models import Group,GroupMember
from . import models
from django.views.generic import TemplateView

from braces.views import SelectRelatedMixin

class CreateGroup(LoginRequiredMixin, generic.CreateView):
    fields = ("name", "description")
    model = Group

class SingleGroup(generic.DetailView):
    model = Group

class ListGroups(generic.ListView):
    model = Group


class JoinGroup(LoginRequiredMixin, generic.RedirectView):

    def get_redirect_url(self, *args, **kwargs):
        return reverse("groups:single",kwargs={"slug": self.kwargs.get("slug")})

    def get(self, request, *args, **kwargs):
        group = get_object_or_404(Group,slug=self.kwargs.get("slug"))

        try:
            GroupMember.objects.create(user=self.request.user,group=group)

        except IntegrityError:
            messages.warning(self.request,("Warning, already a member of {}".format(group.name)))

        else:
            messages.success(self.request,"You are now a member of the {} group.".format(group.name))

        return super().get(request, *args, **kwargs)


class LeaveGroup(LoginRequiredMixin, generic.RedirectView):

    def get_redirect_url(self, *args, **kwargs):
        return reverse("groups:single",kwargs={"slug": self.kwargs.get("slug")})

    def get(self, request, *args, **kwargs):

        try:

            membership = models.GroupMember.objects.filter(
                user=self.request.user,
                group__slug=self.kwargs.get("slug")
            ).get()

        except models.GroupMember.DoesNotExist:
            messages.warning(
                self.request,
                "You can't leave this group because you aren't in it."
            )
        else:
            membership.delete()
            messages.success(
                self.request,
                "You have successfully left this group."
            )
        return super().get(request, *args, **kwargs)


class contactUsPage(TemplateView):
    template_name = 'groups/contactUs.html'

class VideoPage(TemplateView):
    template_name = 'groups/video.html'

class feedBackPage(TemplateView):
    template_name = 'groups/feedBack.html'

class feedBackPage_afterMarketPolicy(TemplateView):
    template_name = 'groups/feedBack_afterMarketPolicy.html'

class feedBackPage_deliver(TemplateView):
    template_name = 'groups/feedBack_deliver.html'

class feedBackPage_feedBackTable(TemplateView):
    template_name = 'groups/feedBack_feedBackTable.html'

class feedBackPage_shop(TemplateView):
    template_name = 'groups/feedBack_shop.html'

class fieldInformationPage(TemplateView):
    template_name = 'groups/fieldInformation.html'


class offlineStore_newestStorePage(TemplateView):
    template_name = 'groups/offlineStore_newestStore.html'


class offlineStore_onlyOnePagePage(TemplateView):
    template_name = 'groups/offlineStore_onlyOnePage.html'


class offlineStore_policyPage(TemplateView):
    template_name = 'groups/offlineStore_policy.html'


class offlineStorePage(TemplateView):
    template_name = 'groups/offlineStore.html'

class joinPage(TemplateView):
    template_name = 'groups/join.html'



#class onlineMessagePage(generic.ListView):
#    template_name = 'groups/onlineMessage.html'
#    model = SuggestMessage
    



class productContentPage(TemplateView):
    template_name = 'groups/productContent.html'


class secondPageContentPage(TemplateView):
    template_name = 'groups/secondPageContent.html'

class newsInformationPage(TemplateView):
    template_name = 'groups/newsInformation.html'