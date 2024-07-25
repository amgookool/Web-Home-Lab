from django.shortcuts import render
from django.template import Context
from django.contrib import messages
from django.http import (
    HttpRequest,
    HttpResponse,
    HttpResponseRedirect,
    HttpResponseNotFound,
)
from django.urls import reverse


# Create your views here.
def index(request: HttpRequest):
    # context = Context({"name": "Adrian Gookool", "age": 26})
    context: dict = {"name": "Adrian Gookool", "age": 26}
    return render(request, "dashboard/index.html", context)


def login(request: HttpRequest):
    if request.method == "GET":
        context: dict = {"name": "Adrian Gookool", "age": 26}
        return render(request, "dashboard/login.html", context)
    if request.method == "POST":
        postData = request.POST
        username = postData.get("username")
        password = postData.get("password")
        if username == "admin" and password == "P@ssword123!":
            return HttpResponseRedirect(reverse("index"))
        return HttpResponseNotFound("Invalid credentials")



def reset_password(request):
    return render(request, "dashboard/reset-password.html")