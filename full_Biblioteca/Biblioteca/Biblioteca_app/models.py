from django.db import models

class Autor(models.Model):
    nome = models.CharField(max_length=100)
    nacionalidade = models.CharField(max_length=50, blank=True, null=True)
    data_nascimento = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.nome


class Livro(models.Model):
    titulo = models.CharField(max_length=150)
    autor = models.ForeignKey(Autor, on_delete=models.CASCADE)
    ano_publicacao = models.IntegerField()
    disponivel = models.BooleanField(default=True)

    def __str__(self):
        return self.titulo


class Bibliotecario(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    telefone = models.CharField(max_length=20)

    def __str__(self):
        return self.nome


class Leitor(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    data_registo = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.nome

