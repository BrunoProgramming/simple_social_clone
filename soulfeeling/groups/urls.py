from django.conf.urls import url
from django.views.generic import TemplateView
from . import views

app_name = 'groups'

urlpatterns = [
    url(r"^$", views.ListGroups.as_view(), name="all"),
    url(r"^new/$", views.CreateGroup.as_view(), name="create"),
    url(r"^posts/in/(?P<slug>[-\w]+)/$",views.SingleGroup.as_view(),name="single"),
    url(r"join/(?P<slug>[-\w]+)/$",views.JoinGroup.as_view(),name="join"),
    url(r"leave/(?P<slug>[-\w]+)/$",views.LeaveGroup.as_view(),name="leave"),

    url(r"contactUs/$",views.contactUsPage.as_view(),name="contactUs"),
    url(r"feedBack/$",views.feedBackPage.as_view(),name="feedBack"),
    url(r"fieldInformation/$",views.fieldInformationPage.as_view(),name="fieldInformation"),
    url(r"offlineStore_newestStore/$",views.offlineStore_newestStorePage.as_view(),name="offlineStore_newestStore"),
    url(r"offlineStore_onlyOnePage/$",views.offlineStore_onlyOnePagePage.as_view(),name="offlineStore_onlyOnePage"),
    url(r"offlineStore_policy/$",views.offlineStore_policyPage.as_view(),name="offlineStore_policy"),
    url(r"offlineStore/$",views.offlineStorePage.as_view(),name="offlineStore"),
    url(r"productContent/$",views.productContentPage.as_view(),name="productContent"),
    url(r"secondPageContent/$",views.secondPageContentPage.as_view(),name="secondPageContent"),
    url(r"newsInformation/$",views.newsInformationPage.as_view(),name="newsInformation"),
    url(r"video/$",views.VideoPage.as_view(),name="video"),
    url(r"join/$",views.joinPage.as_view(),name="join"),

    url(r"feedBack_afterMarketPolicy/$",views.feedBackPage_afterMarketPolicy.as_view(),name="feedBack_afterMarketPolicy"),
    url(r"feedBack_deliver/$",views.feedBackPage_deliver.as_view(),name="feedBack_deliver"),
    url(r"feedBack_feedBackTable/$",views.feedBackPage_feedBackTable.as_view(),name="feedBack_feedBackTable"),
    url(r"feedBack_shop/$",views.feedBackPage_shop.as_view(),name="feedBack_shop"),
]
