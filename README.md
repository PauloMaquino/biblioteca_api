# 📚 Sistema de Biblioteca com CRUD

Este projeto é uma **dashboard de biblioteca** que permite gerenciar **Autores, Livros, Leitores e Bibliotecários**.  
O frontend é feito com **Vue 3 via CDN** e **Axios** para consumir a **API Django REST**.  
Inclui funcionalidades como **CRUD completo** e **paginação**.

## 💻 Tecnologias Utilizadas

- **Frontend:** HTML, CSS, Vue 3 (via CDN), Axios, Font Awesome  
- **Backend:** Django + Django REST Framework  
- **Banco de Dados:** SQLite (padrão Django)  
- **Outras:** CORS para permitir acesso da aplicação frontend



## 🗂 Estrutura do Projeto



biblioteca/
├─ backend/                 # Projeto Django
│  ├─ biblioteca/           # Configurações Django
│  ├─ api/                  # Aplicação com modelos e views
│  │   ├─ models.py         # Modelos: Autor, Livro, Leitor, Bibliotecario
│  │   ├─ serializers.py    # Serializadores para Django REST
│  │   └─ views.py          # Views (ViewSets)
│  └─ manage.py
│
├─ frontend/
│  └─ index.html            # Dashboard Vue 3 com CRUDs e paginação
├─ README.md
└─ requirements.txt         # Dependências Python

`



## 🏗 Modelos Django

### Autor
python
nome: CharField
nacionalidade: CharField
data_nascimento: DateField
`

### Livro

python
titulo: CharField
autor: ForeignKey(Autor)
ano_publicacao: IntegerField
disponivel: BooleanField


### Leitor

python
nome: CharField
email: EmailField
data_registo: DateField(auto_now_add=True)


### Bibliotecário

python
nome: CharField
email: EmailField
telefone: CharField




## 🚀 Instalação

1. **Clonar o repositório**

git clone https://github.com/seuusuario/biblioteca.git
cd biblioteca


2. **Criar ambiente virtual**

python -m venv .venv
source .venv/bin/activate   # Linux / macOS
.venv\Scripts\activate      # Windows


3. **Instalar dependências**


pip install -r requirements.txt


4. **Migrar banco de dados**

python manage.py makemigrations
python manage.py migrate


5. **Criar superusuário (opcional)**

python manage.py createsuperuser


6. **Rodar o servidor**

python manage.py runserver


7. **Abrir a aplicação**

* Abra o arquivo `frontend/index.html` em seu navegador
* O frontend consumirá a API no endereço `http://127.0.0.1:8000/api/`



## 🌐 Endpoints da API

* **Autores:** `/api/autores/`
* **Livros:** `/api/livros/`
* **Leitores:** `/api/leitores/`
* **Bibliotecários:** `/api/bibliotecarios/`

Métodos suportados:

* `GET` → Listar
* `POST` → Criar
* `PUT` → Atualizar
* `DELETE` → Remover

> ⚠️ Certifique-se que o CORS está configurado para permitir requisições do frontend.



## 💡 Funcionalidades do Frontend

* **CRUD completo** para todas as entidades
* **Dashboard moderna com sidebar e abas**
* **Paginação** para listas grandes (5 itens por página)
* **Formulários reutilizáveis**
* **Confirmação antes de excluir**



## 🔧 Configurações Adicionais

* Alterar **itens por página**:

js
itensPorPagina: 5


* Alterar **URL da API** no Vue:

js
api: 'http://127.0.0.1:8000/api'



## 📝 Autor

* Desenvolvido por: **Paulo Makino**
* GitHub: https://github.com/PauloMakino



## 📄 Licença

MIT License
