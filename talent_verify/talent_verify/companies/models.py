from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    date_of_registration = models.DateField()
    registration_number = models.CharField(max_length=50, unique=True)
    address = models.TextField()
    contact_person = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    email = models.EmailField()

class Department(models.Model):
    name = models.CharField(max_length=255)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
