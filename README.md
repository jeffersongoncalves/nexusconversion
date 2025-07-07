# Nexus Conversion

Nexus Conversion é uma aplicação web para conversão de criptomoedas para USD e BRL. Desenvolvida com Next.js, TypeScript e Prisma.

## Funcionalidades

- Autenticação de usuários
- Seleção de criptomoedas favoritas
- Conversão de criptomoedas para USD e BRL
- Histórico de conversões
- Interface em português do Brasil

## Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/) - Framework React com Server Components
- [React 19](https://react.dev/) - Biblioteca JavaScript para interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Prisma](https://www.prisma.io/) - ORM para acesso ao banco de dados
- [NextAuth.js](https://next-auth.js.org/) - Autenticação para Next.js
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Radix UI](https://www.radix-ui.com/) - Componentes de UI acessíveis

## Começando

### Pré-requisitos

- Node.js 18 ou superior
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

3. Configure as variáveis de ambiente (veja o arquivo `.env.example`)

### Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

- `/app` - Rotas e páginas da aplicação
- `/components` - Componentes React reutilizáveis
- `/lib` - Utilitários e configurações
- `/prisma` - Schema e migrações do banco de dados

## Implantação

A maneira mais fácil de implantar o aplicativo é usar a [Plataforma Vercel](https://vercel.com/new), dos criadores do Next.js.

Para mais detalhes, consulte a [documentação de implantação do Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
