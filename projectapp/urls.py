"""dezserv URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from .views import * 

urlpatterns = [
	path('', 					show_index, 		name='show_index'),
	path('pesticide/', 			show_pesticide, 	name='show_pesticide'),#Дератизация
	path('disinfection/', 		show_disinfection, 	name='show_disinfection'),#Дезинфекция
	path('pestcontrol', 		show_pestcontrol, 	name='show_pestcontrol'),#Дезинсекция
	path('aeration/', 			show_aeration, 		name='show_aeration'),#Газация
	path('projects/', 			show_projects, 		name='show_projects'),
	path('about/', 				show_about, 		name='show_about'),
	path('contacts/', 			show_contacts, 		name='show_contacts'),
	path('projects/<str:slug>', show_project, 		name='show_project'),
]
