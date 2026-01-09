const { createApp } = Vue;

createApp({
    data() {
        return {
            api: 'http://127.0.0.1:8000/api/',
            aba: 'livros',

            livros: [],
            autores: [],
            leitores: [],
            bibliotecarios: [],

            livroForm: { titulo: '', autor: '', ano_publicacao: '', disponivel: true },
            autorForm: { nome: '', nacionalidade: '', data_nascimento: '' },
            leitorForm: { nome: '', email: '' },
            bibliotecarioForm: { nome: '', email: '', telefone: '' },

            livroId: null, autorId: null, leitorId: null, bibId: null,
            livroEditando: false, autorEditando: false, leitorEditando: false, bibEditando: false
        }
    },
    methods: {
        async fetchAll() {
            this.livros = (await axios.get(this.api + 'livros/')).data;
            this.autores = (await axios.get(this.api + 'autores/')).data;
            this.leitores = (await axios.get(this.api + 'leitores/')).data;
            this.bibliotecarios = (await axios.get(this.api + 'bibliotecarios/')).data;
        },

        /* LIVROS */
        salvarLivro() {
            const req = this.livroEditando
                ? axios.put(this.api + `livros/${this.livroId}/`, this.livroForm)
                : axios.post(this.api + 'livros/', this.livroForm);

            req.then(() => { this.cancelarLivro(); this.fetchAll(); });
        },
        editarLivro(l) {
            this.livroEditando = true; this.livroId = l.id;
            this.livroForm = { titulo: l.titulo, autor: l.autor, ano_publicacao: l.ano_publicacao, disponivel: l.disponivel };
        },
        apagarLivro(id) {
            if (confirm('Apagar livro?')) axios.delete(this.api + `livros/${id}/`).then(this.fetchAll);
        },
        cancelarLivro() {
            this.livroEditando = false; this.livroId = null;
            this.livroForm = { titulo: '', autor: '', ano_publicacao: '', disponivel: true };
        },

        /* AUTORES */
        salvarAutor() {
            const req = this.autorEditando
                ? axios.put(this.api + `autores/${this.autorId}/`, this.autorForm)
                : axios.post(this.api + 'autores/', this.autorForm);

            req.then(() => { this.cancelarAutor(); this.fetchAll(); });
        },
        editarAutor(a) { this.autorEditando = true; this.autorId = a.id; this.autorForm = a; },
        apagarAutor(id) { if (confirm('Apagar autor?')) axios.delete(this.api + `autores/${id}/`).then(this.fetchAll); },
        cancelarAutor() { this.autorEditando = false; this.autorId = null; this.autorForm = { nome: '', nacionalidade: '', data_nascimento: '' }; },

        /* LEITORES */
        salvarLeitor() {
            const req = this.leitorEditando
                ? axios.put(this.api + `leitores/${this.leitorId}/`, this.leitorForm)
                : axios.post(this.api + 'leitores/', this.leitorForm);

            req.then(() => { this.cancelarLeitor(); this.fetchAll(); });
        },
        editarLeitor(l) { this.leitorEditando = true; this.leitorId = l.id; this.leitorForm = l; },
        apagarLeitor(id) { if (confirm('Apagar leitor?')) axios.delete(this.api + `leitores/${id}/`).then(this.fetchAll); },
        cancelarLeitor() { this.leitorEditando = false; this.leitorId = null; this.leitorForm = { nome: '', email: '' }; },

        /* BIBLIOTECÁRIOS */
        salvarBibliotecario() {
            const req = this.bibEditando
                ? axios.put(this.api + `bibliotecarios/${this.bibId}/`, this.bibliotecarioForm)
                : axios.post(this.api + 'bibliotecarios/', this.bibliotecarioForm);

            req.then(() => { this.cancelarBibliotecario(); this.fetchAll(); });
        },
        editarBibliotecario(b) { this.bibEditando = true; this.bibId = b.id; this.bibliotecarioForm = b; },
        apagarBibliotecario(id) { if (confirm('Apagar bibliotecário?')) axios.delete(this.api + `bibliotecarios/${id}/`).then(this.fetchAll); },
        cancelarBibliotecario() { this.bibEditando = false; this.bibId = null; this.bibliotecarioForm = { nome: '', email: '', telefone: '' }; }
    },
    mounted() {
        this.fetchAll();
    }
}).mount('#app');
