from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)

    def __str__(self):
        return self.name

class Employee(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    position = models.CharField(max_length=50)
    company = models.ForeignKey(Company, related_name='employees', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"



