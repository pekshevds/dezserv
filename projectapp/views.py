from django.shortcuts import render
from .models import Project, Picture

from django.core.paginator import Paginator

# Create your views here.


class Item(object):
	
	project = Project
	image = Picture



def show_index(request):
	return render(request, 'projectapp/index.html')



def get_table(category):
	
	projects = Project.objects.filter(category=category).order_by('-date_of_completion')[:3]

	table = []
	for project in projects:

		item = Item()

		item.project = project

		images = Picture.objects.filter(project=project, main_image=True).first()
		if images:

			item.image = images
		else:

			item.image = Picture.objects.filter(project=project).first()

		table.append(item)

	return table


def show_pesticide(request):

	table = get_table(category='PS')	

	context = {
        'page_object': 	table,
    }

	return render(request, 'projectapp/pesticide.html', context)


def show_disinfection(request):

	table = get_table(category='DF')	

	context = {
        'page_object': 	table,
    }

	return render(request, 'projectapp/disinfection.html', context)


def show_pestcontrol(request):

	table = get_table(category='PC')	

	context = {
        'page_object': 	table,
    }

	return render(request, 'projectapp/pestcontrol.html', context)


def show_aeration(request):

	table = get_table(category='AE')	

	context = {
        'page_object': 	table,
    }

	return render(request, 'projectapp/aeration.html', context)


def show_projects(request):

	projects_count = 6


	projects = Project.objects.all().order_by('-date_of_completion')

	table = []
	for project in projects:

		item = Item()

		item.project = project

		images = Picture.objects.filter(project=project, main_image=True).first()
		if images:

			item.image = images
		else:

			item.image = Picture.objects.filter(project=project).first()

		table.append(item)


	page_number = request.GET.get('page', 1)
	paginator = Paginator(table, projects_count)
	page = paginator.get_page(page_number)
	is_paginated = page.has_other_pages()

	if page.has_previous():
		
		prev_url = '?page={}'.format(page.previous_page_number())
	else:
		
		prev_url = ''

	if page.has_next():
			
		next_url = '?page={}'.format(page.next_page_number())
	else:
		
		next_url = ''


	context = {
        'page_object': 	page, 
        'prev_url': 	prev_url, 
        'next_url': 	next_url, 
		'is_paginated': is_paginated,
     }
	return render(request, 'projectapp/projects.html', context)


def show_about(request):
	return render(request, 'projectapp/about.html')


def show_contacts(request):
	return render(request, 'projectapp/contacts.html')


def show_project(request, slug):

	project = Project.objects.filter(slug=slug).first()
	images 	= Picture.objects.filter(project=project)
	context = {
        'project': 		project, 
        'images': 		images,
     }
	return render(request, 'projectapp/project.html', context)