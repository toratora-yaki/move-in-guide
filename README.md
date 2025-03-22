# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Move-In Guide

## 概要
このプロジェクトは、React (Next.js) を使用して構築されたWebアプリケーションで、ユーザーはDiscord IDを使用してログインできます。ユーザー管理はSupabaseを通じて行われ、アプリケーションはDiscordのボイスチャンネルやイベントに関連する情報を表示します。

## 機能
- **Discord認証**: ユーザーはDiscordアカウントを使用してログインできます。
- **ボイスチャンネルユーザー表示**: ホームページでは、指定されたボイスチャンネルに接続しているユーザーとその総数を表示します。
- **画像ギャラリー**: Discordにアップロードされた画像を表示する専用ページ。
- **イベント取得**: 将来的にDiscordで作成されたイベントを取得して表示する機能を実装予定。

## プロジェクト構成
```
move-in-guide
├── public
│   └── index.html
├── prisma
│   └── schema.prisma
├── src
│   ├── components
│   │   ├── UserList.tsx
│   │   └── DiscordImageGallery.tsx
│   ├── pages
│   │   ├── index.tsx
│   │   ├── voice.tsx
│   │   └── events.tsx
│   ├── services
│   │   ├── discord.ts
│   │   └── supabase.ts
│   ├── store
│   │   └── useStore.ts
│   ├── utils
│   │   └── config.ts
│   └── App.tsx
├── .env
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## セットアップ手順
1. **リポジトリをクローン**: 
   ```
   git clone <repository-url>
   cd move-in-guide
   ```

2. **依存関係をインストール**: 
   ```
   npm install
   ```


3. **環境変数の設定**: ルートディレクトリに `.env` ファイルを作成し、Discordの `server_id` と `voice_channel_id` を追加します:
   ```
   DISCORD_SERVER_ID=your_server_id
   DISCORD_VOICE_CHANNEL_ID=your_voice_channel_id
   ```

4. **開発サーバを起動**: 
   ```
   npm run dev
   ```

5. **本番用にビルド**: 
   ```
   npm run build
   ```

6. **デプロイ**: Vercelでアプリケーションを簡単にホスティングできます。

## 将来的な拡張
- Discordイベントの取得と表示を実装。
- 画像ギャラリーにフィルタリングやソートなどの追加機能を強化。

## ライセンス
このプロジェクトはMITライセンスの下でライセンスされています。
