from django.shortcuts import render
from rest_framework import generics
from serializers import RecipeSerializer
from models import Recipe


class RecipeList(generics.ListAPIVIew):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()

