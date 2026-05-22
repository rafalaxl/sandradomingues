# Sandra Domingues — Estética Corporal & Pós-Operatório

Este repositório contém o site institucional completo e responsivo de **Sandra Domingues Estética & Saúde**. O projeto foi concebido sob altos padrões de luxo, performance, semântica avançada de SEO/GEO e conformidade estrita de acessibilidade.

---

## 🚀 Tecnologias Utilizadas

O site foi desenvolvido 100% em código puro (Vanilla), sem o uso de frameworks complexos ou dependências externas, visando o máximo desempenho de carregamento:

1. **HTML5 Semântico:** Estrutura otimizada para buscadores tradicionais, leitores de tela e motores de Inteligência Artificial.
2. **CSS3 Modular com Custom Properties:**
   - **Metodologia BEM** (*Block-Element-Modifier*) para organização e escalabilidade das classes.
   - **Design Tokens** centralizados no arquivo `css/tokens.css` usando a moderna especificação de cores **OKLCH** para paletas harmônicas, contrastes otimizados e gradientes sofisticados.
3. **Vanilla JavaScript com ES Modules:**
   - Organização modular da lógica de interface no diretório `js/modules/` usando declarações modernas de `import` e `export`.
   - Gerenciamento limpo carregado de forma assíncrona por meio da tag `<script type="module">`.

---

## 🎨 Acessibilidade e Semântica (WCAG 2.1 AA)

O site foi estruturado para ser plenamente utilizável por qualquer pessoa, incluindo usuários com deficiências visuais, motoras ou cognitivas:

- **Marcos Semânticos (HTML5 Landmarks):** Divisão lógica da página usando `<header>`, `<nav>`, `<main>`, `<section>` e `<footer>` para navegação intuitiva em leitores de tela.
- **Skip Links (Links de Salto):** Inclusão de um link invisível focado no topo da página que permite que usuários de teclado saltem a barra de navegação principal e vão direto ao conteúdo (`Pular para o conteúdo principal`).
- **Navegação por Teclado Completa:** Todos os elementos interativos (links, botões, modais, carrossel de depoimentos, comparadores e campos de formulário) são operáveis por meio de `Tab`, `Shift + Tab`, `Space` e `Enter`.
- **Destaque de Foco Visível (`focus-visible`):** Estilização de borda dourada intensa em todos os focos do teclado para facilitar o rastreamento visual.
- **Modais Acessíveis e Focus Trap:** 
  - Ao abrir os detalhes de um tratamento, o foco do teclado é transferido para o modal.
  - O foco fica "preso" (*trap*) dentro do modal até que ele seja fechado, evitando que o usuário interaja por engano com o fundo da página.
  - Pressionar a tecla `Escape` (`Esc`) ou clicar fora fecha o modal imediatamente e devolve o foco para o botão original que abriu o card.
- **Sensibilidade a Movimentos (Motion Sensitivity):** Respeito à preferência do sistema operacional (`prefers-reduced-motion: reduce`). Quando ativado:
  - O cursor personalizado em desktop é desativado para evitar tontura ou distrações.
  - As transições e animações de scroll/fade-in são desativadas.
  - O contador da prova social exibe o número final instantaneamente em vez de animar.
- **Descrições de Imagens (`alt`):** Imagens cruciais do consultório e do perfil profissional possuem descrições factuais completas, enquanto SVGs decorativos são marcados com `aria-hidden="true"` para não poluir a leitura de tela.

---

## 🧪 Estratégia de Testes Realizados

Para garantir a qualidade, estabilidade e conformidade do código, aplicamos os seguintes testes manuais e funcionais:

1. **Testes de Contraste e Visualização:**
   - Verificação das cores e do contraste entre textos e fundos para satisfazer a relação mínima de **4.5:1** (texto normal) e **3:1** (títulos) estipulados na WCAG 2.1 AA.
2. **Testes de Navegação por Teclado:**
   - Execução do fluxo completo de uso do site navegando exclusivamente pelo teclado. Validação da abertura e fechamento de modais e navegação nos slides de depoimento.
3. **Testes de Responsividade:**
   - Validação visual em resoluções mobile, tablet e desktop (de 320px até 1440px+). Ajuste do menu hambúrguer para mobile que impede o scroll da página principal ao ser aberto.
4. **Testes do Fluxo de Agendamento (Integração com WhatsApp):**
   - Criação de um formulário de pré-agendamento inteligente que impede a seleção de datas retroativas por JavaScript.
   - Sincronização automatizada: ao clicar em "Agendar Sessão" em qualquer modal descritivo de serviço, a janela fecha e o formulário faz a seleção automática do tratamento correspondente.
   - Codificação de URLs em conformidade para abrir o aplicativo do WhatsApp com a mensagem personalizada contendo o nome do cliente, procedimento, data formatada no padrão brasileiro e período desejado.

---

## 💻 Como Executar o Projeto Localmente

Devido à arquitetura moderna baseada em **ES Modules** (`type="module"`), os navegadores modernos bloqueiam o carregamento dos scripts caso o arquivo `index.html` seja aberto diretamente via duplo clique no Windows Explorer (protocolo `file://`), retornando erros de política CORS.

Para visualizar o site funcionando com todas as animações e interações ativas localmente, você deve servi-lo por meio de um **servidor HTTP local**.

### Opções para rodar localmente:

#### Opção A: VS Code (Recomendado)
1. Instale a extensão **Live Server** (de Ritwick Dey).
2. Abra a pasta do projeto no VS Code.
3. Clique em **Go Live** na barra de status inferior ou clique com o botão direito no `index.html` e selecione `Open with Live Server`.

#### Opção B: Via Terminal (Node.js/NPM)
Se você tiver o Node instalado, rode na pasta do projeto:
```bash
npx serve
```
Abra o link exibido no terminal (geralmente `http://localhost:3000`).

#### Opção C: Python
Se tiver o Python instalado, abra o terminal na pasta do projeto e rode:
```bash
# Python 3
python -m http.server 8000
```
Acesse `http://localhost:8000` no seu navegador.
