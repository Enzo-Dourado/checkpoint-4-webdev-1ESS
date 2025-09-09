# App de Anotação

Este é um aplicativo de anotações simples desenvolvido com [Next.js](https://nextjs.org/) e React. Permite criar, buscar, visualizar detalhes e excluir anotações de forma rápida e intuitiva.

## Funcionalidades

- Adicionar novas anotações com título e conteúdo
- Listar todas as anotações
- Buscar anotações por título, conteúdo, ID ou data de criação
- Excluir anotações
- Visualizar detalhes de uma anotação (exibido no console)

## Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) para estilização

## Como rodar o projeto

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura de Pastas

- `app/` - Componentes e páginas principais do projeto
- `public/` - Arquivos estáticos
- `.next/` - Build gerado pelo Next.js (ignorado no git)
- `package.json` - Dependências e scripts

## Participantes

Veja a lista de participantes em [participantes.md](participantes.md).

## Observações

- As anotações são mantidas apenas em memória (não persistem ao recarregar a página).
- O botão "Ver detalhes" exibe as informações da anotação no console do navegador.

---
Projeto desenvolvido para fins educacionais.