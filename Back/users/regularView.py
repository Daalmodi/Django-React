from django.http import JsonResponse
from .models import User

def regular_users(request):
    regular_users = User.objects.filter(role='Regular').values('id','name','loginDate','onlineTime','button1Counter','button2Counter')
    return JsonResponse({'regular_users':list(regular_users)}, safe=False)
