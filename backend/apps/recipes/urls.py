__author__ = 'Red'

from django.conf.urls import url, patterns
from views import RecipeList, RecipeDetail, AddRecipe

urlpatterns = [

    url('^recipes/$', RecipeList.as_view(), name='recipe-list'),
    url('^recipes/(?P<pk>\d+)/$', RecipeDetail.as_view(), name='recipe-list'),
    url('^add-recipe/$', AddRecipe.as_view(), name='recipe-list'),

]
