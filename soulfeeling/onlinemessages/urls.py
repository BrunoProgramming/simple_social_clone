from django.conf.urls import url

from . import views

app_name='onlinemessages'

urlpatterns = [
    url(r"^$", views.PostList.as_view(), name="all"),
    url(r"new/$", views.CreatePost.as_view(), name="create"),
]
