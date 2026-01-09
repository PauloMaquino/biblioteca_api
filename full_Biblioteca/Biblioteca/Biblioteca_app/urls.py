from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AutorViewSet, LivroViewSet, BibliotecarioViewSet, LeitorViewSet

# Criando o router e registrando os ViewSets
router = DefaultRouter()
router.register(r'autores', AutorViewSet)
router.register(r'livros', LivroViewSet)
router.register(r'bibliotecarios', BibliotecarioViewSet)
router.register(r'leitores', LeitorViewSet)

# URLs da API geradas automaticamente pelo router
urlpatterns = [
    path('', include(router.urls)),
]
