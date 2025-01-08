from django.urls import path , include
from rest_framework import routers
from  users import views
from users.loginView import LoginView

router =routers.DefaultRouter()

router.register(r'users', views.UserView, 'users')
urlpatterns =[
    path('api/v1/', include(router.urls) ),
    path('login/',LoginView.as_view(), name='login')
    
]