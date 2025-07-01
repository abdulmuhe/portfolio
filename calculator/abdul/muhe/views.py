from django.shortcuts import render
from django.http import HttpResponse

# def home(request):
#     return HttpResponse(2+3)
# def minus(request):
#     return HttpResponse(3-1)
# def mul(request):
#     return HttpResponse(9*8)
# def div(request):
#     return HttpResponse(10/2)

def home(request):
    result = None
    if request.method == 'POST':
        n1=float(request.POST.get('num1',0))
        n2=float(request.POST.get('num2',1))
        operation = request.POST.get("operation")
        print(f"Received : n1 = {n1}, n2 = {n2}, operation = {operation}")

        if operation == 'add':
            result = n1 + n2
        elif operation == 'sub':
            result = n1 - n2
        elif operation == 'mul':
            result = n1 * n2
        elif operation == 'div':
            result = n1 / n2 if n2 != 0 else 'Cannot divide by zero'
        elif operation == 'mod':
            result = n1 % n2
    
    return render(request, 'muhe/home.html', {'result' : result})
