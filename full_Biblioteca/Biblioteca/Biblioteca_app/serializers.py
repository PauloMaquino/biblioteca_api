from rest_framework import serializers
from .models import Livro, Autor, Bibliotecario, Leitor

class AutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Autor
        fields = '__all__'


class LivroSerializer(serializers.ModelSerializer):
    autor_nome = serializers.CharField(source='autor.nome', read_only=True)
    
    class Meta:
        model = Livro
        fields = '__all__'


class BibliotecarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bibliotecario
        fields = '__all__'


class LeitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leitor
        fields = '__all__'
