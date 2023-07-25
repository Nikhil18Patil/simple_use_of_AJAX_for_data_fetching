# myapp/views.py
from django.http import JsonResponse
from a1.models import Person
from django.http import HttpResponse
from django.template import loader


def fetch_data(request):
    # Fetch data from the database
    persons = Person.objects.all().values()

    # Convert the data to a list of dictionaries
    data_list = list(persons)

    return JsonResponse(data_list, safe=False)

def one(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render())