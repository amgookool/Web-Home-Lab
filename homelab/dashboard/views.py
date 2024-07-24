from django.shortcuts import render
from django.http import HttpRequest, HttpResponse

# Create your views here.
def index(request: HttpRequest):
    context: dict = {
        "name": "Adrian Gookool",
        "age": 26
    }
    return render(request, "dashboard/index.html", context)

