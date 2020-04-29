from django.contrib import admin
from django import forms

from .models import Project, Picture


class PictureInline(admin.TabularInline):
    model = Picture
    exclude = ('title', 'slug')
    extra = 0


class ProjectAdmin(admin.ModelAdmin):
	list_display = (
					'title',
					'date_of_completion',
					'category',
					)
	
	inlines 	 = [PictureInline,]

	list_filter = ('category',)

	
	exclude = ('slug',)


admin.site.register(Project, ProjectAdmin)