# 🚀 Quick Start - Portfólio Galaxy Theme

## ⚡ Comandos Rápidos

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento (localhost:5173)
npm run dev

# Build de produção
npm run build

# Preview da build
npm run preview

# Verificar erros de lint
npm run lint
```

---

## 🎨 Temas e Personalização

### Trocar Cores
Edite `src/index.css`:
```css
:root {
  --purple: 270 85% 65%;  /* Sua cor aqui */
  --cyan: 190 85% 65%;
  --blue: 220 85% 65%;
}
```

### Ajustar Animações
Edite `src/components/GalaxyBackground.tsx`:
```typescript
// Número de partículas
const particleCount = 100; // Ajuste aqui

// Velocidade das partículas
this.speedX = Math.random() * 0.5 - 0.25; // Ajuste a multiplicação
```

---

## 📝 Conteúdo

### Atualizar Informações Pessoais
**Arquivo**: `src/i18n/translations.ts`

```typescript
hero: {
  role: 'Seu cargo',
  tagline: 'Sua frase de efeito',
  description: 'Sua descrição',
}
```

### Adicionar/Remover Projetos
**Arquivo**: `src/components/Projects.tsx`

```typescript
const allProjects = {
  fullstack: [
    {
      image: importedImage,
      title: 'Nome do Projeto',
      description: 'Descrição',
      tags: ['Tag1', 'Tag2'],
      featured: true, // ou false
    }
  ]
}
```

### Atualizar Skills
**Arquivo**: `src/i18n/translations.ts`

```typescript
skills: {
  fullstack: ['React', 'Node.js', ...],
  data: ['Python', 'SQL', ...],
  ai: ['TensorFlow', 'ML', ...],
}
```

---

## 🖼️ Imagens

### Localização
`src/assets/`

### Formatos Recomendados
- **Foto de perfil**: PNG com fundo transparente ou JPG (800x800px)
- **Projetos**: JPG otimizado (1200x900px)
- **Ícones**: SVG quando possível

### Adicionar Nova Imagem
```typescript
// Em qualquer componente
import minhaImagem from '@/assets/minha-imagem.jpg';

// Usar no JSX
<img src={minhaImagem} alt="Descrição" />
```

---

## 🌐 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Fazer upload da pasta dist/
```

### GitHub Pages
```bash
# Instalar gh-pages
npm i -D gh-pages

# Adicionar no package.json
"scripts": {
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

---

## 🐛 Solução de Problemas

### Build falha
```bash
# Limpar cache
rm -rf node_modules dist
npm install
npm run build
```

### Imagens não aparecem
- Verifique o caminho do import
- Use sempre `@/assets/...`
- Confirme que o arquivo existe

### Animações travando
- Reduza o número de partículas no GalaxyBackground
- Desabilite backdrop-filter em navegadores antigos

---

## 📱 Testar Responsividade

### Chrome DevTools
1. F12 para abrir DevTools
2. Ctrl + Shift + M (toggle device mode)
3. Testar diferentes resoluções

### Resoluções Importantes
- 🖥️ Desktop: 1920x1080, 1366x768
- 💻 Laptop: 1280x720
- 📱 Mobile: 375x667 (iPhone), 360x640 (Android)
- 📱 Tablet: 768x1024 (iPad)

---

## 🎨 Customizar Componentes

### Mudar Estilo de Card
```typescript
// Encontre a classe do card
className="glass-card p-5 rounded-2xl"

// Personalize
className="glass-card p-6 rounded-3xl border-2"
```

### Ajustar Velocidade de Animação
```typescript
// Em componentes com Framer Motion
transition={{ duration: 0.3 }} // Ajuste aqui
```

### Adicionar Nova Seção
1. Crie `src/components/MinhaSecao.tsx`
2. Importe em `src/pages/Index.tsx`
3. Adicione no JSX

---

## 🔧 Ferramentas Úteis

### Verificar Performance
- Lighthouse (Chrome DevTools)
- PageSpeed Insights
- WebPageTest

### Gerar Paletas
- coolors.co
- paletton.com
- color.adobe.com

### Otimizar Imagens
- TinyPNG (tinypng.com)
- Squoosh (squoosh.app)
- ImageOptim (mac)

---

## 📚 Recursos

### Documentação
- React: react.dev
- Tailwind: tailwindcss.com
- Framer Motion: framer.com/motion
- shadcn/ui: ui.shadcn.com

### Inspiração
- Dribbble: dribbble.com
- Awwwards: awwwards.com
- Behance: behance.net

---

## 💡 Dicas

1. **Sempre teste** em modo claro E escuro
2. **Commits frequentes** ao fazer mudanças
3. **Use nomes descritivos** para componentes e funções
4. **Comente código complexo** para referência futura
5. **Otimize imagens** antes de adicionar ao projeto

---

## 🆘 Precisa de Ajuda?

1. Verifique a documentação oficial das tecnologias
2. Busque no Stack Overflow
3. Leia o código existente como referência
4. Teste em diferentes navegadores

---

**Boa sorte com seu portfólio! 🚀**
