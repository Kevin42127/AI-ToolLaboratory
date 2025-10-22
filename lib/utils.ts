import { AITool } from '@/data/tools';

export function filterToolsByCategory(tools: AITool[], categorySlug: string): AITool[] {
  if (categorySlug === 'all') {
    return tools;
  }
  return tools.filter(tool => tool.category.includes(categorySlug));
}

export function searchTools(tools: AITool[], query: string): AITool[] {
  if (!query.trim()) {
    return tools;
  }
  
  const lowerQuery = query.toLowerCase();
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getPricingLabel(pricing: AITool['pricing']): string {
  const labels = {
    free: '免費',
    freemium: '免費/付費',
    paid: '付費',
  };
  return labels[pricing];
}

export function getPricingColor(pricing: AITool['pricing']): 'success' | 'info' | 'warning' {
  const colors = {
    free: 'success' as const,
    freemium: 'info' as const,
    paid: 'warning' as const,
  };
  return colors[pricing];
}

