from django.conf import settings
from django.core.urlresolvers import reverse
from django.db import models

import misaka

from django.contrib.auth import get_user_model
User = get_user_model()


class OnlineMessages(models.Model):
    user = models.ForeignKey(User, related_name="onlineMessages")
    created_at = models.DateTimeField(auto_now=True)
    phone = models.TextField()
    address = models.TextField()
    message = models.TextField()
    message_html = models.TextField(editable=False)

    def __str__(self):
        return self.message

    def save(self, *args, **kwargs):
        self.message_html = misaka.html(self.message)
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("groups:contactUs")

    class Meta:
        ordering = ["-created_at"]
        unique_together = ["user", "message"]
