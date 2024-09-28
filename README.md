# Media Queries e Mibile First

### O que são Media Queries?
As media queries são uma técnica do CSS que permite aplicar estilos diferentes dependendo do tamanho ou das características do dispositivo do usuário. Elas são ótimas para criar layouts que se adaptam a diferentes tamanhos de tela, como smartphones, tablets e desktops.

#### Exemplo 
``` CSS
@media (min-width: 768px) {
    body {
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: center;
    }
}

```

Neste exemplo, o layout muda quando a largura da tela atinge pelo menos 768px (tamanho típico de tablets). O código ajusta a disposição dos elementos para melhor visualização em dispositivos maiores.


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

(Imagem 1)


Esse estilo define que as imagens ocupem 100% da largura no mobile, mantendo um formato quadrado.

Porém, ao aumentar a tela, com a media query, o tamanho é ajustado para uma largura fixa:

``` CSS
.card img {
    width: var(--figureSize);
    height: var(--figureSize);
    object-fit: cover;
}
```

(Imagem 2)

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
(Imagem 3)


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

(Imagem 4)




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

## Pontos-Chave

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

## Exemplo Visual

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
