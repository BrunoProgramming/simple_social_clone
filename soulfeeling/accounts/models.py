from django.contrib import auth
from django.utils import timezone

from django.db import migrations, models
from django.contrib.auth.models import User
import django.db.models.deletion


from django.core.urlresolvers import reverse
import misaka


class User(auth.models.User, auth.models.PermissionsMixin):
    
    def __str__(self):
        return "@{}".format(self.username)


# Create your models here.
class UserProfileInfo(models.Model):

    # Create relationship (don't inherit from User!)
    user = models.OneToOneField(User,on_delete=django.db.models.deletion.CASCADE)

    # Add any additional attributes you want
    portfolio_site = models.URLField(blank=True)
    # pip install pillow to use this!
    # Optional: pip install pillow --global-option=”build_ext” --global-option=”--disable-jpeg”
    profile_pic = models.ImageField(upload_to='profile_pics',blank=True)

    def __str__(self):
        # Built-in attribute of django.contrib.auth.models.User !
        return self.user.username


class SuggestMessage(models.Model):
    user = models.OneToOneField(User,on_delete=django.db.models.deletion.CASCADE)
    phone = models.TextField()
    address = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    message = models.TextField()
    message_html = models.TextField(editable=False)

    def __str__(self):
        return self.message

    def save(self, *args, **kwargs):
        self.message_html = misaka.html(self.message)
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse(
            "groups:onlineMessage",
        )

    class Meta:
        ordering = ["-created_at"]
        unique_together = ["user", "message"]
