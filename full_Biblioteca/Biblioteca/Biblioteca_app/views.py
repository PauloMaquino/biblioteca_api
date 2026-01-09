from rest_framework import viewsets
from .models import Autor, Livro, Bibliotecario, Leitor
from .serializers import AutorSerializer, LivroSerializer, BibliotecarioSerializer, LeitorSerializer

class AutorViewSet(viewsets.ModelViewSet):
    queryset = Autor.objects.all()
    serializer_class = AutorSerializer


class LivroViewSet(viewsets.ModelViewSet):
    queryset = Livro.objects.all()
    serializer_class = LivroSerializer



class BibliotecarioViewSet(viewsets.ModelViewSet):
    queryset = Bibliotecario.objects.all()
    serializer_class = BibliotecarioSerializer


class LeitorViewSet(viewsets.ModelViewSet):
    queryset = Leitor.objects.all()
    serializer_class = LeitorSerializer
