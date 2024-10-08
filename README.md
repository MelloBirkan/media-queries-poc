# Media Queries e Abordagem Desktop First: Análise do Site Bay Bean Co.

## Introdução às Media Queries

Media queries são uma ferramenta poderosa no CSS que permite aplicar estilos diferentes com base nas características do dispositivo, principalmente o tamanho da tela. Elas são fundamentais para criar designs responsivos que se adaptam a diversos dispositivos, desde desktops até smartphones.

Sintaxe básica de uma media query:

```css
@media screen and (max-width: 768px) {
  /* Estilos aplicados quando a largura da tela é 768px ou menos */
}
```

## Abordagem Desktop First

A abordagem "Desktop First" no design responsivo significa que o design base é criado para telas grandes (desktop) e, em seguida, são feitas adaptações para telas menores usando media queries. Esta é a abordagem utilizada no projeto Bay Bean Co.

Características principais:
1. O CSS base é otimizado para desktops.
2. Media queries usam `max-width` para definir breakpoints.
3. As alterações são feitas progressivamente para telas menores.

## Análise do Projeto Bay Bean Co.

![explicando](/images/cafe-video.gif)

### HTML Estrutura

O HTML do projeto é estruturado de forma semântica, dividido em seções principais:

```html
<body>
  <div class="main">...</div>
  <div class="container supporting">...</div>
  <div class="rating">...</div>
  <div class="container gallery">...</div>
  <div class="container location">...</div>
  <footer>...</footer>
</body>
```

Esta estrutura fornece uma base sólida para aplicar estilos responsivos.

### CSS e Media Queries

O projeto utiliza três breakpoints principais:

1. 960px
2. 700px
3. 470px

Vamos analisar cada um:

#### 1. Breakpoint 960px

<div>
  <img src="/images/nav-desktop.png" alt="explicando" height="405px">
  <img src="/images/nav-mobile.png" alt="explicando" height="405px">
</div>

```css
@media screen and (max-width: 960px) {
  .main {
    padding-top: 0;
  }
}
```

Este breakpoint faz um ajuste sutil, removendo o padding superior da seção principal. Isso é feito para otimizar o espaço em telas ligeiramente menores que um desktop padrão.

#### 2. Breakpoint 700px

<div>
  <img src="/images/text-desktop.png" alt="explicando" height="305px">
  <img src="/images/text-mobile.png" alt="explicando" height="305px">
</div>

```css
@media screen and (max-width: 700px) {
  .supporting img {
    display: none;
  }
}
```

Aqui, a imagem da seção de suporte é ocultada. Esta é uma técnica comum em designs responsivos, onde elementos não essenciais são removidos em telas menores para focar no conteúdo principal.

#### 3. Breakpoint 470px

<div>
  <img src="/images/footer-desktop.png" alt="explicando" height="635px">
  <img src="/images/footer-mobile.png" alt="explicando" height="635px">
</div>

```css
@media screen and (max-width: 470px) {
  h1 {
    font-size: 2rem;
  }

  .gallery img {
    margin: 0%;
  }

  footer nav {
    display: none;
  }
}
```

Este breakpoint faz várias alterações para dispositivos móveis:
- Reduz o tamanho da fonte dos títulos para melhor legibilidade.
- Remove as margens das imagens da galeria, provavelmente para um layout de coluna única.
- Oculta a navegação no rodapé, simplificando a estrutura da página.

### Análise da Abordagem Desktop First

1. **Estilos Base para Desktop**: O CSS inicial é otimizado para telas grandes. Por exemplo, a galeria usa `float: left` e `width: 30%` para criar um layout de três colunas.

2. **Adaptações Progressivas**: As media queries fazem ajustes graduais conforme a tela diminui, começando com mudanças sutis em 960px e terminando com alterações mais significativas em 470px.

3. **Uso de max-width**: Todas as media queries usam `max-width`, característica típica da abordagem desktop first.

4. **Simplificação do Layout**: À medida que a tela diminui, o layout é simplificado (remoção de imagens, ajuste de margens).

## Conclusão

O projeto Bay Bean Co. demonstra uma implementação eficaz da abordagem desktop first no design responsivo. Através do uso estratégico de media queries, o site adapta seu layout e conteúdo para diferentes tamanhos de tela, priorizando a experiência em desktops e fazendo ajustes progressivos para dispositivos menores. Esta abordagem é particularmente útil para sites com conteúdo rico que se beneficiam de uma experiência completa em telas maiores.

# Mobile First

#### Tela Mobile
![exemplo](/images/tela-mobile.png)

#### Tela Desktop
![exemplo](/images/tela-desktop.png)



### O que é Mobile First?
O conceito de Mobile First sugere que os sites sejam inicialmente projetados para dispositivos móveis e, depois, adaptados para telas maiores com media queries. A ideia é começar com um layout mais simples (para mobile) e, conforme o tamanho da tela aumenta, adicionar elementos ou melhorar a disposição.

#### Exemplos práticos:

**Galeria de imagens:** As fotos são organizadas em uma única coluna no mobile, mas em telas maiores, são exibidas lado a lado, criando uma galeria mais ampla e fácil de visualizar.

``` CSS
.card img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    margin: 0;
    padding: 0;
}

```

![exemplo](/images/imagemTam100.png)


Esse estilo define que as imagens ocupem 100% da largura no mobile, mantendo um formato quadrado.

Porém, ao aumentar a tela, com a media query, o tamanho é ajustado para uma largura fixa:

``` CSS
.card img {
    width: var(--figureSize);
    height: var(--figureSize);
    object-fit: cover;
}
```

![exemplo](/images/imagemMenor.png)

**Formulários Responsivos:**  O formulário se ajusta à largura da tela e não possui um fundo destacado (card), mantendo o design simples e limpo para telas pequenas.

``` CSS
#forms {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 90%;
    gap: 24px;
    justify-content: center;
    margin: 12px;
}

```
![exemplo](/images/formMobile.png)


Em dispositivos maiores, como tablets e desktops, o formulário é colocado dentro de um card com bordas arredondadas e uma sombra para destacar o conteúdo visualmente.

``` CSS
@media (min-width: 768px) {
   #filter-form,
    #add-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 600px;
        max-width: 600px;
        gap: 12px;
        padding: 12px;
        box-shadow: var(--shadow);
        border-radius: var(--border-radius);
    }
}

```

![exemplo](/images/formDesktop.png)



# Media Queries no Tailwind CSS: Design Responsivo Explicado

Este documento tem como objetivo explicar os conceitos de media queries no Tailwind CSS, focando em partes específicas do site “Sistema de Recordações”. Serão utilizadas imagens e GIFs para demonstrar os exemplos.

## O que são Media Queries?

Media queries são uma técnica CSS que permite aplicar estilos com base nas características do dispositivo, principalmente na largura da viewport. No Tailwind CSS, as media queries são implementadas através de classes utilitárias responsivas.

## Abordagem de Design Responsivo do Tailwind

O Tailwind usa uma abordagem mobile-first. Isso significa que as utilidades sem prefixo se aplicam a todos os tamanhos de tela, enquanto as utilidades com prefixo se aplicam a breakpoints específicos e acima.

## Breakpoints no Tailwind

Por padrão, o Tailwind inclui estes breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Para aplicar estilos em um breakpoint específico, prefixe a classe com o tamanho desejado seguido de dois pontos. Por exemplo:

```html
<div class="text-center md:text-left">
  <!-- O texto será centralizado em telas menores que 768px e alinhado à esquerda em telas maiores -->
</div>
```
## Projeto Recordações
![Projeto recordações gif](/images/recordacoes-video.gif)

### 1. Tamanho de Texto Responsivo

![explicando](/images/recordaçoes-text-grande.png)

```html
<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sistema de Recordações</h2>
```

- `text-3xl`: Tamanho base para todas as telas
- `sm:text-4xl`: Texto maior em telas pequenas e acima

Neste exemplo, o título terá um tamanho de fonte 3xl (1.875rem ou 30px) em dispositivos móveis e aumentará para 4xl (2.25rem ou 36px) em telas de 640px e maiores.

### 2. Padding Responsivo

```html
<div class="bg-gray-900 py-5 sm:py-12 rounded-tl-3xl rounded-tr-3xl shadow-2xl mt-5 md:h-fit">
```

- `py-5`: Padding vertical base para todas as telas
- `sm:py-12`: Mais padding em telas pequenas e acima

Aqui, o elemento terá um padding vertical de 1.25rem (20px) em dispositivos móveis, aumentando para 3rem (48px) em telas de 640px e maiores.

### 3. Mudança de Layout Responsiva

<div>
  <img src="/images/layout-desktop.png" alt="explicando" height="405px">
  <img src="/images/layout-mobile.png" alt="explicando" height="405px">
</div>

```html
<section id="list" class="w-full flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:justify-center"></section>
```

- Layout base: `flex flex-col items-center`
- Em telas médias e acima:
    - `md:flex-row`: Muda para layout em linha
    - `md:flex-wrap`: Permite quebra de linha
    - `md:justify-center`: Centraliza itens horizontalmente

Este é um exemplo clássico de mudança de layout. Em dispositivos móveis, os itens são empilhados verticalmente. Em telas médias e maiores, os itens são dispostos horizontalmente, com quebra de linha e centralização.

### 4. Dimensionamento de Imagem Responsivo

```html
<img class="w-full aspect-square object-cover md:size-72 md:rounded-2xl" src="${photo.url}" />
```

- Estilo base: Largura total, proporção quadrada
- Em telas médias e acima:
    - `md:size-72`: Tamanho fixo de 18rem (288px)
    - `md:rounded-2xl`: Cantos arredondados

As imagens ocupam toda a largura disponível em dispositivos móveis, mantendo uma proporção quadrada. Em telas médias e maiores, elas assumem um tamanho fixo e ganham cantos arredondados.

### 5. Background e Padding Responsivos

<img src="/images/layout-desktop.png" alt="explicando">

```html
<section class="md:bg-gray-800 md:px-3 md:py-5 rounded-2xl">
```

- Sem background ou padding em dispositivos móveis
- Em telas médias e acima:
    - `md:bg-gray-800`: Adiciona uma cor de fundo
    - `md:px-3 md:py-5`: Adiciona padding

Este exemplo mostra como você pode adicionar estilos apenas para telas maiores, criando uma experiência mais rica em desktops sem sobrecarregar a versão móvel.

### Pontos-Chave

1. **Mobile-First**: Comece com estilos para dispositivos móveis e adicione complexidade para telas maiores.
2. **Prefixos de Breakpoint**: Use `sm:`, `md:`, `lg:`, `xl:`, e `2xl:` para aplicar estilos em breakpoints específicos.
3. **Layouts Flexíveis**: Use utilidades de Flexbox como `flex-col` e `flex-row` para mudar layouts entre breakpoints.
4. **Dimensionamento Responsivo**: Ajuste tamanhos de elementos, texto e espaçamento para diferentes tamanhos de tela.
5. **Aprimoramento Progressivo**: Adicione recursos ou estilos à medida que o tamanho da tela aumenta.

## Implementação Prática

Para implementar essas técnicas em seu projeto:

1. Comece sempre pensando na versão móvel primeiro.
2. Use as classes responsivas do Tailwind para ajustar o layout conforme necessário para telas maiores.
3. Teste seu design em vários tamanhos de tela para garantir uma transição suave entre breakpoints.

## Exemplo Visual de Mobile First

Para melhor compreensão, aqui está como o layout da seção de recordações muda em diferentes tamanhos de tela:

**Móvel (< 768px):**
```
+-------------------+
|    Recordação 1   |
+-------------------+
|    Recordação 2   |
+-------------------+
|    Recordação 3   |
+-------------------+
```

**Tablet e Desktop (>= 768px):**
```
+--------+--------+--------+
| Record.| Record.| Record.|
|   1    |   2    |   3    |
+--------+--------+--------+
| Record.| Record.| Record.|
|   4    |   5    |   6    |
+--------+--------+--------+
```
