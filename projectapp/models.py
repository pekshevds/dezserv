from django.db import models
import uuid



def get_uuid():

	return str(uuid.uuid4().fields[0])


def get_image_name(instance, filename):
	
	new_name = ('%s' + '.' + filename.split('.')[-1]) % instance.slug
	return new_name


# Create your models here.



class Project(models.Model):
	
	pesticide 		= 'PS'
	disinfection 	= 'DF'
	pestcontrol 	= 'PC'
	aeration 		= 'AE'
	fumigation		= 'FU'
    
	SHOW_CHOICES = (
		(pesticide, 	'Дератизация'),
        (disinfection, 	'Дезинфекция'),
        (pestcontrol, 	'Дезинсекция'),
        (aeration, 		'Газация'),
        (fumigation, 	'Фумигация'),
    )

	slug 					= models.SlugField(max_length=36, verbose_name='Url', blank=True, db_index=True)
	title 					= models.CharField(max_length=255, verbose_name="Заголовок", null=True)
	description 			= models.TextField(verbose_name="Описание", null=True)
	date_of_completion 		= models.DateField(verbose_name="Дата исполнения", null=True)
	category	 			= models.CharField(max_length=2, verbose_name="Категория услуги", choices=SHOW_CHOICES, default=pesticide)
		
	def __str__(self):

		return self.title


	def save(self, *args, **kwargs):

		if self.slug == "":
			self.slug = get_uuid()	

		super(Project, self).save(*args, **kwargs)
			
	
	class Meta:
		verbose_name 		= 'Проект'
		verbose_name_plural = 'Проекты'


class Picture(models.Model):

	title 					= models.CharField(max_length=150, verbose_name='Наименование', blank=True)
	slug 					= models.SlugField(max_length=36, verbose_name='Url', blank=True, db_index=True)
	project					= models.ForeignKey('Project', verbose_name='Проект', on_delete=models.CASCADE)
	images					= models.ImageField(upload_to=get_image_name, verbose_name='Изображение 370x220', default=None, null=True, blank=True)
	main_image				= models.BooleanField(verbose_name='Основная картинка', default=False)


	def __str__(self):
		
		return self.slug


	def save(self, *args, **kwargs):
		
		if self.slug == "":
			self.slug = get_uuid()
			self.title = self.slug

		super(Picture, self).save(*args, **kwargs)


	class Meta:
		
		verbose_name 		= 'Картинка'
		verbose_name_plural = 'Картинки'