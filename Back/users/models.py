from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    loginDate = models.DateTimeField(auto_now_add=True)
    onlineTime = models.IntegerField(default=0)
    button1Counter = models.IntegerField(default=0)
    button2Counter = models.IntegerField(default=0)

    def __str__(self):
        return self.name