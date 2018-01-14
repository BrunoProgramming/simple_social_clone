from django.conf.urls import url, include
from django.contrib.auth import views as auth_views
from . import views
from . import forms

app_name = 'accounts'

urlpatterns = [
    url(r"login/$",auth_views.LoginView.as_view(template_name="accounts/login.html") ,name='login'),
    url(r"signup/$", views.SignUp.as_view(), name="signup"),
    url(r'^register/$',views.register,name='register'),
    url(r'^user_login/$',views.user_login,name='user_login'),
    url(r'^special/',views.special,name='special'),
    url(r'^logout/$', views.user_logout, name='logout'),
    url(r"onlineMessage/$",views.onlineMessagePage.as_view(),name="onlineMessage"),
]
