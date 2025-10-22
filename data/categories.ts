export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const categories: Category[] = [
  { id: '1', name: '全部', slug: 'all' },
  { id: '2', name: '文本生成', slug: 'text-generation' },
  { id: '3', name: '圖像生成', slug: 'image-generation' },
  { id: '4', name: '圖像編輯', slug: 'image-editing' },
  { id: '5', name: '程式碼輔助', slug: 'code-assistant' },
  { id: '6', name: '影片製作', slug: 'video-creation' },
  { id: '7', name: '語音合成', slug: 'voice-synthesis' },
  { id: '8', name: '音樂生成', slug: 'music-generation' },
  { id: '9', name: '翻譯工具', slug: 'translation' },
  { id: '10', name: '客戶服務', slug: 'customer-service' },
  { id: '11', name: '3D建模', slug: '3d-modeling' },
  { id: '12', name: '教育學習', slug: 'education' },
  { id: '13', name: '遊戲開發', slug: 'gaming' },
  { id: '14', name: '行銷工具', slug: 'marketing' },
  { id: '15', name: '資料分析', slug: 'data-analysis' },
  { id: '16', name: '設計工具', slug: 'design-tools' },
];

