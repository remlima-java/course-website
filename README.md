# Site de Cursos Online

Este é um site de cursos online responsivo desenvolvido em React, que permite a visualização de vídeos hospedados no Google Drive com funcionalidades interativas como curtidas e comentários.

## Funcionalidades

### ✅ Funcionalidades Implementadas

- **Reprodução de Vídeos do Google Drive**: Integração direta com vídeos hospedados no Google Drive através de iframes
- **Interface Responsiva**: Design adaptável para desktop, tablet e mobile
- **Navegação de Vídeos**: Setas laterais para navegar entre os vídeos do curso
- **Sistema de Curtidas**: Botão de curtir com contador dinâmico
- **Sistema de Comentários**: Área para visualizar e adicionar comentários
- **Design Moderno**: Interface limpa e amigável com gradientes e sombras

### 🎨 Design e UX

- **Layout Responsivo**: Utiliza Tailwind CSS para garantir compatibilidade com todos os dispositivos
- **Cores e Gradientes**: Esquema de cores azul/índigo com gradientes suaves
- **Tipografia**: Hierarquia clara de títulos e textos
- **Interatividade**: Botões com estados hover e feedback visual
- **Acessibilidade**: Elementos bem contrastados e navegação intuitiva

## Estrutura do Projeto

```
course-website/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── ui/
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos customizados
│   ├── index.css        # Estilos globais
│   └── main.jsx         # Ponto de entrada
├── dist/                # Build de produção
├── package.json
└── README.md
```

## Tecnologias Utilizadas

- **React 18**: Framework JavaScript para interface de usuário
- **Vite**: Ferramenta de build rápida e moderna
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Biblioteca de ícones
- **shadcn/ui**: Componentes de UI pré-construídos

## Como Executar

### Desenvolvimento

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse `http://localhost:5173` no navegador

### Produção

1. Construa o projeto:
   ```bash
   npm run build
   ```

2. Os arquivos de produção estarão na pasta `dist/`

## Configuração de Vídeos

Para adicionar novos vídeos, edite o array `videos` no arquivo `src/App.jsx`:

```javascript
const videos = [
  {
    id: 1,
    title: "Título do Vídeo",
    description: "Descrição do vídeo",
    iframe: '<iframe src="URL_DO_GOOGLE_DRIVE" width="640" height="480" allow="autoplay"></iframe>',
    likes: 0,
    comments: []
  }
]
```

### Como Obter o URL do Google Drive

1. Faça upload do vídeo para o Google Drive
2. Clique com o botão direito no vídeo e selecione "Compartilhar"
3. Altere as permissões para "Qualquer pessoa com o link pode visualizar"
4. Copie o ID do arquivo da URL (parte entre `/d/` e `/view`)
5. Use o formato: `https://drive.google.com/file/d/SEU_ID_AQUI/preview`

## Funcionalidades Futuras (Sugestões)

- **Autenticação de Usuários**: Sistema de login/registro
- **Persistência de Dados**: Backend para salvar curtidas e comentários
- **Progresso do Curso**: Marcação de vídeos assistidos
- **Busca e Filtros**: Funcionalidade de busca por vídeos
- **Categorias**: Organização de vídeos por categorias
- **Avaliações**: Sistema de avaliação por estrelas
- **Certificados**: Geração de certificados de conclusão

## Hospedagem

O projeto está pronto para ser hospedado em qualquer serviço de hospedagem estática como:

- **Vercel**: Deploy automático via Git
- **Netlify**: Hospedagem com CI/CD
- **GitHub Pages**: Hospedagem gratuita
- **Firebase Hosting**: Hospedagem do Google

### Deploy na Vercel

1. Conecte seu repositório Git à Vercel
2. Configure o comando de build: `npm run build`
3. Configure o diretório de output: `dist`
4. Faça o deploy

## Suporte

Para dúvidas ou sugestões sobre o projeto, consulte a documentação do React e Tailwind CSS.

---

**Desenvolvido com ❤️ usando React e Tailwind CSS**

