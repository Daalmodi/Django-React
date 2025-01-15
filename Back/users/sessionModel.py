from django.db import models
from .models import User
class Session(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField(null=True,blank = True)
    duration = models.IntegerField(default=0)

    def __str__ (self):
        return f"Sesion de {self.user.name}desde {self.start_time}"
    
    def calculate_duration(self):
        if self.end_time:
            self.duration = (self.end_time -self.start_time).total_seconds()
            self.save()