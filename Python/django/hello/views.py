import re
from datetime import datetime
from django.http import HttpResponse
from django.shortcuts import render
from django.shortcuts import redirect
from hello.forms import LogMessageForm
from hello.models import LogMessage
from django.views.generic import ListView


# Replace the existing home function with the one below

class HomeListView(ListView):
    """Renders the home page, with a list of all messages."""
    model = LogMessage

    def get_context_data(self, **kwargs):
        context = super(HomeListView, self).get_context_data(**kwargs)
        return context

def about(request):
    return render(request, "hello/about.html")

def contact(request):
    return render(request, "hello/contact.html")

def log_message(request):
    form = LogMessageForm(request.POST or None)

    if request.method == "POST":
        if form.is_valid():
            message = form.save(commit=False)
            message.log_date = datetime.now()
            message.save()
            return redirect("home")
    else:
        return render(request, "hello/log_message.html", {"form": form})

# def home(request):
   #  return HttpResponse("Hello, Django!")

# def hello_there(request, name):
    # return render(
        # request,
        # 'hello/hello_there.html',
        # {
        #     'name': name,
        #     'date': datetime.now()
        # }
    # )

    #now = datetime.now()
    #formatted_now = now.strftime("%A, %d %B, %Y at %X")

    ##now.strftime("%a, %d %B, %Y at %X")
    ##'Fri, 07 September, 2018 at 07:46:32'
    ##now.strftime("%a, %d %b, %Y at %X")
    ##'Fri, 07 Sep, 2018 at 07:46:32'
    ##now.strftime("%a, %d %b, %y at %X")
    ##'Fri, 07 Sep, 18 at 07:46:32'

    ## Filter the name argument to letters only using regular expressions. URL arguments
    ## can contain arbitrary text, so we restrict to safe characters only.
    #match_object = re.match("[a-zA-Z]+", name)

    #if match_object:
    #    clean_name = match_object.group(0)
    #else:
    #    clean_name = "Friend"

    #content = "<h1>Hello there, " + clean_name + "!</h1>" + formatted_now
    #return HttpResponse(content)