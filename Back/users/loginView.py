from rest_framework.views import APIView
from .models import User
from rest_framework.response import Response

class LoginView(APIView):
    def post(self,request):
        name = request.data['name']
        password = request.data['password']
        try:
            user =User.objects.get(name=name)
            if user.check_password(password):
                return Response({
                    'message':'Login Exitoso','role':user.role
                })
            else:
                return Response({
                    'message':'Contraseña Incorrecta'
                },status=401)
        except User.DoesNotExist:
            return Response({
                'message': 'Usuario No Encontrado'
            },status=404) 