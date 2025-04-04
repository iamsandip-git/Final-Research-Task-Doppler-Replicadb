from django.contrib import admin
from .models import News



class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'source',)  # Optional: to show these fields in list view
    list_filter = ('source',)  # This enables the filter by 'source' in the sidebar
admin.site.register(News, NewsAdmin)