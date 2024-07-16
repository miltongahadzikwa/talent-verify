from django.contrib import admin
from django.urls import path, include
from . import views  
from .views import index  # Import the index view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', views.index, name='index'),  
    path('api/companies/', include('companies.urls')),
    path('api/employees/', include('employees.urls')),
]
