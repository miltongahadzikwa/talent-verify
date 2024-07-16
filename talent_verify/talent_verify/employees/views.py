from rest_framework import viewsets, generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Employee
from .serializers import EmployeeSerializer
import csv

class EmployeeList(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeListCreate(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class BulkUploadView(APIView):
    def post(self, request, *args, **kwargs):
        file = request.FILES['file']
        decoded_file = file.read().decode('utf-8').splitlines()
        reader = csv.DictReader(decoded_file)

        employees = []
        for row in reader:
            employee = Employee(
                name=row['name'],
                employee_id=row['employee_id'],
                department_id=row['department_id'],
                role=row['role'],
                date_started=row['date_started'],
                date_left=row['date_left'],
                duties=row['duties'],
                company_id=row['company_id']
            )
            employees.append(employee)

        Employee.objects.bulk_create(employees)
        return Response(status=status.HTTP_201_CREATED)
