# -*- coding: utf-8 -*-
import os, sys
sys.path.insert(0, '/var/www/u0872810/data/www/dezserv.ru/dezserv')
sys.path.insert(1, '/var/www/u0872810/data/dezservenv/lib/python3.7/site-packages')
os.environ['DJANGO_SETTINGS_MODULE'] = 'dezserv.settings'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()