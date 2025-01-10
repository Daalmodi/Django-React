from django.urls import path , include
from rest_framework import routers
from  users import views
from users.loginView import LoginView
from users.regularView import regular_users

router =routers.DefaultRouter()

router.register(r'users', views.UserView, 'users')
urlpatterns =[
    path('api/v1/', include(router.urls) ),# tupla de rutas de la apo
    path('login/',LoginView.as_view(), name='login'), #tupla de ruta de login http://localhost:8000/users/login/
    path('regular-users/', regular_users,name='regular_users')#http://localhost:8000/users/regular-users/
    
]