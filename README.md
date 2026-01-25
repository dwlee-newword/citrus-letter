# Citrus Letter 🍊

Citrus Letter의 기업 소개 및 브랜드 페이지입니다. Svelte 5와 SvelteKit을 사용하여 구축되었으며, 심플하고 현대적인 디자인을 지향합니다.

## 🚀 주요 특징

- **Modern Stack**: Svelte 5 (Runes) 및 SvelteKit 2 기반.
- **Styling**: Tailwind CSS 4를 이용한 효율적인 스타일링.
- **i18n**: `svelte-i18n`을 활용한 다국어 지원.
  - 현재는 한국어만 지원합니다.
- **Deployment**: Cloudflare Pages에 최적화.

## 🛠 기술 스택

- **Framework**: [Svelte 5](https://svelte.dev/) / [SvelteKit 2](https://kit.svelte.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Localization**: [svelte-i18n](https://github.com/kaisermann/svelte-i18n)
- **Runtime**: Node.js v22
- **Deployment**: Cloudflare Pages (via `@sveltejs/adapter-cloudflare`)

## 📂 프로젝트 구조

```text
src/
├── lib/
│   ├── assets/       # 정적 자산 (로고, 아이콘 등)
│   ├── components/   # 공통 컴포넌트 (Button, Header, Footer 등)
│   │   └── home/     # 메인 페이지용 슬라이드 컴포넌트
│   └── i18n/         # 다국어 설정 및 번역 파일 (ko, en)
├── routes/           # 페이지 라우팅 (+page.svelte, +layout.svelte)
└── app.css           # 글로벌 스타일 (Tailwind directives)
```

## 💻 로컬 개발 설정

### 필수 조건

- [Node.js](https://nodejs.org/) v22 이상
- [pnpm](https://pnpm.io/) 권장

### 설치 및 실행

1. 의존성 설치:

   ```bash
   pnpm install
   ```

2. 개발 서버 실행:

   ```bash
   pnpm dev
   ```

3. 빌드 및 프리뷰:
   ```bash
   pnpm build
   pnpm preview
   ```

## 🛠 스크립트

- `pnpm dev`: 개발 서버 실행
- `pnpm build`: 프로덕션용 빌드
- `pnpm check`: Svelte 및 TypeScript 타입 체크
- `pnpm lint`: ESLint 및 Prettier를 이용한 코드 스타일 검사 및 수정
- `pnpm format`: Prettier를 사용한 전체 코드 포맷팅

---

© 2026 Citrus Letter. All rights reserved.
