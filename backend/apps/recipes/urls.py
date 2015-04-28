__author__ = 'Red'

from django.conf.urls import url
from django.conf import settings
from views import RecipeList, RecipeDetail, AddRecipe

urlpatterns = [

    url('^recipes/$', RecipeList.as_view(), name='recipe-list'),
    url('^recipes/(?P<pk>\d+)/$', RecipeDetail.as_view(), name='recipe-list'),
    url('^add-recipe/$', AddRecipe.as_view(), name='recipe-list'),
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),

]
