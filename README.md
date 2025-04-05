
# 📸 Galeria de Fotos  

Bem-vindo(a) à **Galeria de Fotos**, uma aplicação web interativa que permite aos usuários explorar, filtrar e pesquisar imagens de forma intuitiva e elegante.  

## 🎯 **Objetivo do Projeto**  
O objetivo desta aplicação é fornecer uma experiência visual dinâmica e responsiva para a visualização de imagens, combinando tecnologias modernas como React e TailwindCSS para um layout clean e funcional.  

## Funcionalidades
- Exibição de fotos com títulos organizados em um layout grid.
- Barra de pesquisa com funcionalidade de busca em tempo real.
- Mensagem amigável quando nenhuma foto é encontrada para a pesquisa.
- Efeito interativo ao passar o mouse sobre as fotos.
- Responsividade para diferentes tamanhos de tela.
- Informações de copyright no rodapé.

## Estrutura do Projeto
A estrutura do projeto segue uma organização modular, facilitando o entendimento e a manutenção do código.

```
src/
├── app/
│   ├── globals.css          # Estilos globais da aplicação
│   ├── layout.tsx           # Layout principal da aplicação
│   ├── page.tsx             # Página inicial da galeria
├── components/              # Componentes reutilizáveis
│   ├── BarraPesquisa.tsx    # Barra de busca
│   ├── Footer.tsx           # Rodapé com informações de copyright
│   ├── FotoCards.tsx        # Cartões individuais das fotos
│   ├── Galeria.tsx          # Grid de fotos
│   ├── Header.tsx           # Cabeçalho com o título
├── fotos/                   # Imagens utilizadas na galeria
│   ├── Arvores.jpg
│   ├── Espaco.jpg
│   ├── Gatinho.jpg
│   ├── Mar.jpg
│   ├── NuvemCoracao.jpg
│   ├── Piano.jpg
│   ├── Ventos.jpg
│   ├── fotos.ts             # Dados das fotos (nome e caminho)
```

## Tecnologias Utilizadas
- **React**
- **TailwindCSS**
- **TypeScript**
  
## Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas na sua máquina:
- Node.js (versão mais recente)
- npm ou yarn

## Como Rodar o Projeto Localmente
1. Clone este repositório:
   ```bash
   git clone (https://github.com/Ppedro-Leal/Galeria_Fotos.git)
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd galeria-de-fotos
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra o navegador e acesse:
   ```
   http://localhost:3000
   ```

