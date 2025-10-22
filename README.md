# AI ToolLaboratory

一個使用 Next.js 14、TypeScript 和 Material UI 建構的現代化 AI 工具推薦網站。

## 特性

- 🎨 **Material Design** - 遵循 Google Material Design 設計語言
- 🎯 **直觀美觀** - 清晰的視覺層級和流暢的使用者體驗
- 📱 **響應式設計** - 完美適配行動裝置、平板和桌面設備
- 🔍 **智慧搜尋** - 即時搜尋工具名稱、描述和標籤
- 🏷️ **分類篩選** - 按類別快速篩選AI工具
- 🎨 **單色系統** - 統一的品牌色和灰階色系，無漸層設計
- ⚡ **靜態生成** - 超快的載入速度和SEO優化
- 📦 **100款AI工具** - 涵蓋文本生成、圖像生成、圖像編輯、程式碼輔助、影片製作、語音合成、音樂生成、翻譯、客服、3D建模、教育、遊戲等16大領域
- 🧪 **實驗室概念** - 將AI工具視為實驗室中的精密儀器，幫助用戶進行創新實驗

## 技術棧

- **框架**: Next.js 14 (App Router)
- **語言**: TypeScript
- **UI庫**: Material UI v5
- **樣式**: MUI 系統 + Emotion
- **部署**: Vercel

## 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

### 建構生產版本

```bash
npm run build
npm start
```

## 專案結構

```
/app
  /page.tsx                 # 首頁 - 工具列表
  /tools/[id]/page.tsx      # 工具詳情頁
  /layout.tsx               # 全域布局
/components
  /ToolCard.tsx             # 工具卡片元件
  /SearchBar.tsx            # 搜尋欄
  /CategoryFilter.tsx       # 分類篩選
  /Header.tsx               # 頂部導覽
  /Footer.tsx               # 底部
/data
  /tools.ts                 # AI工具資料（100款工具）
  /categories.ts            # 分類資料
/lib
  /utils.ts                 # 工具函數
/theme
  /theme.ts                 # MUI主題設定
```

## 功能說明

### 首頁
- 展示所有AI工具的卡片網格
- 搜尋欄支援即時搜尋
- 分類標籤支援快速篩選
- 響應式布局（行動裝置單列，平板2列，桌面3-4列）

### 工具詳情頁
- 詳細的工具介紹和說明
- 標籤展示
- 定價資訊
- 造訪官網連結
- 麵包屑導覽

## AI工具分類

AI ToolLaboratory 收錄了 **100款** 熱門AI工具，涵蓋以下16大類別：

- **文本生成** - ChatGPT、Claude、Gemini、Notion AI、Jasper、Copy.ai、Writesonic、Grammarly、Character.AI、Poe 等
- **圖像生成** - Midjourney、DALL·E 3、Stable Diffusion、Leonardo.AI、Adobe Firefly 等
- **圖像編輯** - Remove.bg、Adobe Photoshop AI、Luminar Neo、Topaz Labs、Cleanup.pictures 等
- **程式碼輔助** - GitHub Copilot、Cursor、Tabnine、Replit AI、Hugging Face、Replicate 等
- **影片製作** - Runway、Sora、Pika、HeyGen、Synthesia、Descript、Luma AI、Opus Clip、Vizard、Pictory、Fliki 等
- **語音合成** - ElevenLabs、Murf AI、Play.ht、Resemble AI、Otter.ai、Krisp、Fireflies.ai 等
- **音樂生成** - Suno AI、Mubert、AIVA、Soundraw、Boomy 等
- **翻譯工具** - DeepL、ChatGPT 翻譯、Translate.Video、Reverso 等
- **客戶服務** - Intercom AI、Drift、Ada、Zendesk AI、Tidio 等
- **3D建模** - Spline AI、Kaedim、Meshy、Alpha3D 等
- **教育學習** - Khan Academy AI、Duolingo Max、Quizlet AI、Cognii 等
- **遊戲開發** - Scenario、Rosebud AI、Ludo AI 等
- **行銷工具** - Namelix、Brand24 AI、Surfer SEO、AdCreative.ai 等
- **資料分析** - Tableau AI、Julius AI、Akkio、Perplexity AI 等
- **設計工具** - Canva AI、Figma AI、Tome、Beautiful.ai、Framer AI 等

## 部署到 Vercel

1. 推送程式碼到 GitHub 儲存庫
2. 在 [Vercel](https://vercel.com) 匯入專案
3. Vercel 會自動檢測 Next.js 專案並完成部署

或使用 Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 設計規範

- **品牌色**: 深藍色系統 (#1976d2)
- **灰階色系**: 統一的 50-900 灰階等級
- **無漸層**: 所有背景和按鈕使用純色
- **圓角**: 統一 8px 圓角
- **陰影**: Material Design elevation 系統
- **版權**: © 2025

## 授權

© AI ToolLaboratory.

