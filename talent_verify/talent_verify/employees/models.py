from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=255)
    employee_id = models.CharField(max_length=50, unique=True, null=True, blank=True)
    department = models.ForeignKey('companies.Department', on_delete=models.CASCADE)
    role = models.CharField(max_length=255)
    date_started = models.DateField()
    date_left = models.DateField(null=True, blank=True)
    duties = models.TextField()
    company = models.ForeignKey('companies.Company', on_delete=models.CASCADE)

class RoleHistory(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    role = models.CharField(max_length=255)
    date_started = models.DateField()
    date_left = models.DateField(null=True, blank=True)
    duties = models.TextField()
