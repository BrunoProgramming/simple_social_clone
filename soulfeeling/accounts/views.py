from django.contrib.auth import login, logout
from django.core.urlresolvers import reverse_lazy
from django.views.generic import CreateView

# Extra Imports for the Login and Logout Capabilities
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect, HttpResponse
from django.core.urlresolvers import reverse
from django.contrib.auth.decorators import login_required

from . import forms
from . import models
from django.shortcuts import render
from accounts.forms import UserForm,UserProfileInfoForm

from django.core.mail import send_mail

from django.contrib.auth.mixins import(
    LoginRequiredMixin,
    PermissionRequiredMixin
)

from braces.views import SelectRelatedMixin
from django.views import generic

class SignUp(CreateView):
    form_class = forms.UserCreateForm
    success_url = reverse_lazy("login")
    template_name = "accounts/signup.html"



# Create your views here.
def index(request):
    return render(request,'accounts/index.html')

@login_required
def special(request):
    # Remember to also set login url in settings.py!
    # LOGIN_URL = '/basic_app/user_login/'
    return HttpResponse("You are logged in. Nice!")

@login_required
def user_logout(request):
    # Log out the user.
    logout(request)
    # Return to homepage.
    return HttpResponseRedirect(reverse('accounts:user_login'))

def register(request):

    registered = False

    if request.method == 'POST':

        # Get info from "both" forms
        # It appears as one form to the user on the .html page
        user_form = UserForm(data=request.POST)

        # Check to see both forms are valid
        if user_form.is_valid():

            # Save User Form to Database
            user = user_form.save()

            # Hash the password
            user.set_password(user.password)

            # Update with Hashed password
            user.save()

            # Registration Successful!
            registered = True

        else:
            # One of the forms was invalid if this else gets called.
            print(user_form.errors)

    else:
        print("blank page")
        # Was not an HTTP post so we just render the forms as blank.
        user_form = UserForm()

    if registered:
        return HttpResponseRedirect('accounts/user_login')
    # This is the render and context dictionary to feed
    # back to the registration.html file page.
    return render(request,'accounts/registration.html',
                          {'user_form':user_form,
                           'registered':registered})

def user_login(request):

    if request.method == 'POST':
        # First get the username and password supplied
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Django's built-in authentication function:
        user = authenticate(username=username, password=password)

        # If we have a user
        if user:
            #Check it the account is active
            if user.is_active:
                # Log the user in.
                login(request,user)
                # Send the user back to some page.
                # In this case their homepage.
                return HttpResponseRedirect(reverse('index'))
            else:
                # If account is not active:
                return HttpResponse("Your account is not active.")
        else:
            print("Someone tried to login and failed.")
            print("They used username: {} and password: {}".format(username,password))
            return HttpResponse("Invalid login details supplied.")

    else:
        #Nothing has been provided for username or password.
        return render(request, 'accounts/login.html', {})