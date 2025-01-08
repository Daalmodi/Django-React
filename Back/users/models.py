from django.db import models
from django.contrib.auth.hashers import make_password ,check_password as check_password_hash
# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=100,null=True)
    role = models.CharField(max_length=100)
    loginDate = models.DateTimeField(auto_now_add=True)
    onlineTime = models.IntegerField(default=0)
    button1Counter = models.IntegerField(default=0)
    button2Counter = models.IntegerField(default=0)

    def check_password(self,password):
        return check_password_hash(password,self.password)


    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.password:
                self.password = make_password('1234')
        else:
             self.password = make_password(self.password)
        super(User, self).save(*args, **kwargs)