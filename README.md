# Skaaity - Ecommerce de Skates

Skaaity é uma plataforma de ecommerce especializada em skates, construída com tecnologias modernas para proporcionar uma experiência de compra imersiva e fluida.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **Three.js**: Biblioteca JavaScript para criação de gráficos 3D no navegador.
- **Next-Auth**: Solução de autenticação para Next.js.
- **Cookies**: Utilizados para gerenciamento de sessões e preferências do usuário.
- **GSAP (GreenSock Animation Platform)**: Biblioteca para animações de scroll suaves e responsivas.
- **Framer Motion**: Biblioteca de animações para React.
- **Tailwind CSS**: Framework CSS utilitário para design rápido e responsivo.
- **Context API**: Gerenciamento de estado global da aplicação React.

## Funcionalidades

- Visualização 3D de produtos
- Autenticação de usuários
- Animações de interface do usuário fluidas
- Design responsivo
- Gerenciamento de carrinho de compras
- Catálogo de produtos dinâmico

## Screenshots

![Screenshot 1](https://res.cloudinary.com/dmceve2cp/image/upload/v1725159116/imagem_2024-08-31_235152645_dvsada.png)
![Screenshot 2](https://res.cloudinary.com/dmceve2cp/image/upload/v1725159134/imagem_2024-08-31_235211663_txmcha.png)
![Screenshot 2](https://res.cloudinary.com/dmceve2cp/image/upload/v1725159172/imagem_2024-08-31_235249805_ib5zdi.png)

## Instalação

```bash
# Clone o repositório
git clone https://github.com/NicolaazDev/Skaaity.git

# Entre no diretório do projeto
cd skaaity

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Configuração

1. Crie um arquivo `.env.local` na raiz do projeto e adicione as variáveis de ambiente necessárias:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=sua_chave_secreta
# Adicione outras variáveis de ambiente conforme necessário
```

2. Configure as opções de autenticação no arquivo `pages/api/auth/[...nextauth].js`.

## Contribuição

Contribuições são bem-vindas! Por favor, leia o arquivo CONTRIBUTING.md para detalhes sobre nosso código de conduta e o processo para enviar pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para detalhes.
