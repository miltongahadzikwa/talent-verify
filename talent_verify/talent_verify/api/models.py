# api/models.py

from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100)
    date_of_registration = models.DateField()
    registration_number = models.CharField(max_length=100)
    address = models.TextField()
    contact_person = models.CharField(max_length=100)
    departments = models.TextField()
    number_of_employees = models.IntegerField()
    contact_phone = models.CharField(max_length=15)
    email = models.EmailField()

class Employee(models.Model):
    company = models.ForeignKey(Company, related_name='employees', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100, blank=True, null=True)
    department = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    date_started = models.DateField()
    date_left = models.DateField(blank=True, null=True)
    duties = models.TextField()
