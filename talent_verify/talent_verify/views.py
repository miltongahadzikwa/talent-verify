# talent_verify/views.py

from django.http import HttpResponse

def index(request):
    return HttpResponse("Welcome to the Talent Verify Application")
