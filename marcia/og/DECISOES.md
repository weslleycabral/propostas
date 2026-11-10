# OG da proposta · MS Massage Therapies

Arquivos: `og.html` (fonte, 1200×630), `gerar.mjs` (render com Playwright), `preview-400.jpg` (conferência da miniatura).
Saída: `/home/weslleycabral/www/clientes/propostas/marcia/og.jpg` — **66,8 KB**, JPG 1200×630, qualidade 82 (limite era 300 KB).

## Texto e hierarquia
1. Eyebrow mono em caixa alta, cor accent: "Diagnóstico e proposta" — mesmo padrão `.eyebrow` da página.
2. Título (Bricolage Grotesque 700, 72px, 2 linhas): "Visibilidade no Google e nas IAs para a MS Massage Therapies". "Google" e "IAs" em accent para destacar o assunto sem usar logotipos. É o único elemento que precisa ser lido na miniatura de 400 px — e lê (conferido em `preview-400.jpg`).
3. Dois cartões de dado (mesmo estilo `.stat` da página, verde = bom, vermelho = ruim): "5,0 ★ · 113 avaliações no Google, nota máxima" e "0 de 44 · resultados de 'massage' no Google Maps, buscando da porta dela". O contraste bom/ruim é o argumento da proposta em um relance; os números grandes ainda se leem na miniatura, o texto menor é bônus no desktop.
4. Rodapé: "MS Massage Therapies · Liverpool" à esquerda (semibold + cidade em muted), assinatura "Weslley Cabral" à direita em IBM Plex Mono muted — discreta como o `.from` da página.

## Cores e fontes
Paleta do `:root` claro da `proposta.html`: fundo `#f4f6f5`, tinta `#18272b`, muted `#5a6b6f`, linha `#d9e1df`, accent `#0d6b6b`, good `#1f7a4a`, bad `#a23a3a`. Barra accent de 14px na borda esquerda como marca visual única. Fontes via Google Fonts: Bricolage Grotesque (título e números), IBM Plex Sans (corpo), IBM Plex Mono (eyebrow e assinatura). Tema claro fixo: prévias de link não respeitam dark mode.

## Ajuste feito após a 1ª renderização
O primeiro cartão trazia "5,0 · 113 avaliações" inteiro em 46px e quebrava em duas linhas desalinhado do segundo. Passou a "5,0 ★" grande com "113 avaliações no Google" na legenda; cartões ficaram com largura igual (`flex:1`). A prévia de 400 px também foi corrigida (imagem embutida em base64, pois `file://` não carregava a partir de `about:blank`).

Nada publicado; nada alterado fora desta pasta e do `og.jpg`.
