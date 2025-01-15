import datetime
from rest_framework.views import APIView
from sessionModel import Session
from rest_framework.response import Response
class LogoutView(APIView):
    def post(self,request):
        try:
            session = Session.objects.get(user = request.user, end_time =None)
            session.end_time = datetime.now()
            session.save()
            return Response({'message':'Logout Exitoso'})

        except Session.DoesNotExist:
            return Response({'message':'No hay sesion activa'}, status=404)