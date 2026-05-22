# Brief — Site Sandra Domingues
**Projeto:** Site Institucional + Agendamento
**Cliente:** Sandra Domingues
**Responsável:** Rafael
**Status:** Em aprovação

---

## 1. Visão Geral do Projeto

Sandra Domingues é uma profissional de estética corporal com 25 anos de atuação, mais de 200 mil transformações realizadas, 122k seguidores no Instagram e um produto próprio (Protocolo Sandra Domingues). O site tem como objetivo consolidar sua presença digital com um visual de alto padrão, reforçar sua autoridade e tornar o agendamento de avaliações mais prático para suas clientes.

---

## 2. Objetivos do Site

| Objetivo | Descrição |
|---|---|
| **Credibilidade** | Transmitir autoridade e luxo condizente com o posicionamento dela |
| **Informação** | Apresentar os 25 serviços de forma clara e organizada |
| **Captação** | Converter visitantes em agendamentos de avaliação |
| **Praticidade** | Substituir o agendamento manual pelo WhatsApp com uma solução integrada |

---

## 3. Público-Alvo

- **Primário:** Mulheres insatisfeitas com estética corporal (barriga, pós-parto, excesso de peso)
- **Secundário:** Pacientes em pós-operatório (lipoaspiração, abdominoplastia etc.)
- **Terciário:** Homens insatisfeitos com estética abdominal
- **Canal de entrada:** Instagram → Site → Agendamento

---

## 4. Identidade Visual

### 4.1 Paleta de Cores

| Token | Cor | Uso |
|---|---|---|
| `--color-base` | `#F0EEEB` | Fundo principal (cinza clarinho, não branco puro) |
| `--color-surface` | `#E8E6E2` | Cards, seções alternadas |
| `--color-gold-primary` | `#C9A84C` | Dourado jóia — ações, títulos, destaques |
| `--color-gold-light` | `#E2C97E` | Brilhos, hovers, efeitos de luz |
| `--color-gold-dark` | `#8B6914` | Sombras douradas, profundidade |
| `--color-text-primary` | `#1A1A1A` | Texto principal |
| `--color-text-secondary` | `#5C5C5C` | Texto de suporte, legendas |
| `--color-white` | `#FFFFFF` | Contraste pontual (texto sobre dourado) |

### 4.2 Tipografia

| Papel | Fonte | Estilo |
|---|---|---|
| **Display / Hero** | `Cormorant Garamond` | Serifada, elegante, luxo |
| **Títulos de seção** | `Cormorant Garamond` | Medium/SemiBold |
| **Corpo de texto** | `Jost` ou `DM Sans` | Sans-serif limpa, moderna |
| **Botões / Labels** | `Jost` | Letter-spacing aumentado, uppercase |

> Ambas disponíveis no Google Fonts gratuitamente.

### 4.3 Elementos Visuais

- **Ícones:** Linha fina (estilo minimal/luxury) — Lucide Icons ou personalizados
- **Separadores:** Linhas finas douradas (`1px solid var(--color-gold-primary)`)
- **Bordas:** `border-radius` sutil — `4px` a `8px` nos cards
- **Sombras:** Douradas e difusas — `box-shadow: 0 8px 32px rgba(201, 168, 76, 0.15)`
- **Logo:** Fornecida pela cliente em PNG com fundo transparente

---

## 5. Animações e Efeitos

### Filosofia
> Sutil, elegante, nunca distrai do conteúdo. Movimento reforça luxo — nunca compete com ele.

### Efeitos Planejados

| Efeito | Onde | Técnica |
|---|---|---|
| **Fade-in ao scroll** | Todas as seções | `Intersection Observer` + `opacity/translateY` |
| **Shimmer dourado** | Hero background, separadores | `CSS @keyframes` com gradiente animado |
| **Partículas de luz** | Hero section | `CSS radial-gradient` animado ou canvas leve |
| **Hover nos cards** | Serviços, resultados | `transform: translateY(-4px)` + brilho dourado |
| **Counter animado** | Seção de números (25 anos, 200k) | JS simples de contagem progressiva |
| **Parallax suave** | Foto da Sandra no Hero | `CSS scroll-driven` ou JS leve |
| **Cursor personalizado** | Desktop apenas | Cursor circular dourado |

### Regra de Performance
- Todas as animações usam apenas `transform` e `opacity` (GPU, sem reflow)
- `prefers-reduced-motion` respeitado para acessibilidade
- Nenhuma biblioteca pesada — máximo `GSAP CDN` se necessário

---

## 6. Estrutura do Site (Seções)

```
┌─────────────────────────────────────┐
│  HEADER                             │
│  Logo + Nav (Sobre, Serviços,       │
│  Resultados, Protocolo, Agendar)    │
│  Sticky | Backdrop blur no scroll   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  HERO                               │
│  Foto dela (grande, lado direito)   │
│  Headline impactante à esquerda     │
│  Sub-headline com credenciais       │
│  CTA primário: "Agendar Avaliação"  │
│  CTA secundário: "Conheça os        │
│  serviços"                          │
│  Efeito de luz / shimmer dourado    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  NÚMEROS (Social Proof Rápido)      │
│  25 anos | +200k transformações     │
│  122k seguidores | 25 serviços      │
│  Counters animados ao entrar na     │
│  viewport                           │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  SOBRE SANDRA                       │
│  Foto dela (ambiente/consultório)   │
│  Texto de autoridade                │
│  Graduanda em Biomedicina           │
│  25 anos de experiência             │
│  Credenciais e diferenciais         │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  SERVIÇOS (25 serviços)             │
│  Organizados em 3-4 categorias:     │
│  ├── Pós-operatório                 │
│  ├── Emagrecimento                  │
│  ├── Zero Diástase                  │
│  └── Estética Corporal              │
│  Cards com ícone, nome e descrição  │
│  breve. Expandível ou com modal.    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  RESULTADOS                         │
│  Galeria Antes/Depois               │
│  Carrossel de depoimentos           │
│  (fotos + texto das clientes)       │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  PROTOCOLO SANDRA DOMINGUES         │
│  Apresentação do produto            │
│  O que é, como funciona,            │
│  para quem é indicado               │
│  CTA: "Saiba mais / Fale comigo"    │
│  (WhatsApp — produto vendido só     │
│  no consultório)                    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  AGENDAMENTO                        │
│  Calendly embarcado no site         │
│  (iframe customizado com as         │
│  cores do site)                     │
│  Texto de suporte + WhatsApp        │
│  como alternativa                   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  FOOTER                             │
│  Logo | Links rápidos               │
│  Instagram | WhatsApp               │
│  Endereço do consultório            │
│  Copyright                          │
└─────────────────────────────────────┘
```

---

## 7. Stack Técnica

| Camada | Tecnologia | Motivo |
|---|---|---|
| **Estrutura** | HTML5 semântico | Leve, rápido, SEO nativo |
| **Estilo** | CSS3 puro + Custom Properties | Controle total, sem overhead |
| **Interatividade** | JavaScript vanilla | Sem framework pesado necessário |
| **Animações** | CSS Animations + Intersection Observer | GPU, sem biblioteca |
| **Agendamento** | Calendly (embed) | Prático, gratuito, confiável |
| **Hospedagem** | Vercel | Deploy automático, CDN global, HTTPS grátis |
| **Domínio** | A definir com a cliente | `.com.br` recomendado |
| **Banco de dados** | ❌ Não necessário | Produto vendido só no consultório |

---

## 8. Responsividade (Mobile First)

| Breakpoint | Largura | Comportamento |
|---|---|---|
| **Mobile** | `< 768px` | Layout base — coluna única, nav hamburguer |
| **Tablet** | `768px - 1024px` | Grid 2 colunas, hero lado a lado |
| **Desktop** | `> 1024px` | Layout completo com efeitos avançados |

> Prioridade de desenvolvimento: Mobile → Tablet → Desktop

---

## 9. SEO Básico

- Title tag com nome + cidade + especialidade
- Meta description focada em conversão
- Heading hierarchy (H1 único → H2 por seção → H3 nos cards)
- Alt text em todas as imagens
- Schema markup: `LocalBusiness` + `Person`
- Open Graph para preview no WhatsApp e Instagram

---

## 10. Entregas do Projeto

| Entrega | Descrição |
|---|---|
| ✅ **Site completo** | Todas as seções acima, responsivo |
| ✅ **Calendly configurado** | Conta criada, tipos de agendamento, embed no site |
| ✅ **Domínio** | Registro + apontamento para Vercel (pendente aprovação do nome) |
| ✅ **HTTPS** | SSL automático via Vercel |
| ✅ **SEO básico** | Meta tags, Schema, Open Graph |
| ✅ **Entrega do código** | Repositório Git organizado |

---

## 11. Conteúdo Necessário da Cliente

> ⚠️ O site só pode ser finalizado com esses itens entregues pela Sandra.

- [ ] **Fotos dela** — Alta resolução, fundo neutro ou ambiente do consultório
- [ ] **Logo** — PNG com fundo transparente (versão clara e escura se possível)
- [ ] **Lista dos 25 serviços** — Nome + descrição breve de cada um
- [ ] **Fotos de antes/depois** — Com autorização das pacientes
- [ ] **Depoimentos** — Texto + foto das clientes (ou prints do Instagram)
- [ ] **Texto "Sobre Sandra"** — Trajetória, formação, diferencial
- [ ] **Endereço do consultório**
- [ ] **Nome do domínio preferido** — Ex: `sandradomingues.com.br`
- [ ] **Descrição do Protocolo Sandra Domingues** — O que é, como funciona, para quem

---

## 12. Próximos Passos

1. [ ] Enviar este brief para aprovação da Sandra
2. [ ] Definir e registrar o domínio
3. [ ] Receber o conteúdo listado no item 11
4. [ ] Criar conta no Calendly e configurar os tipos de agendamento
5. [ ] Desenvolver o site
6. [ ] Revisão com a cliente
7. [ ] Deploy e entrega final
