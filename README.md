# Move-In Guide （開発中！！）

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
