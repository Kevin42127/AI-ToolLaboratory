export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const categories: Category[] = [
  { id: '1', name: 'All', slug: 'all' },
  { id: '2', name: 'Text Generation', slug: 'text-generation' },
  { id: '3', name: 'Image Generation', slug: 'image-generation' },
  { id: '4', name: 'Image Editing', slug: 'image-editing' },
  { id: '5', name: 'Code Assistant', slug: 'code-assistant' },
  { id: '6', name: 'Video Creation', slug: 'video-creation' },
  { id: '7', name: 'Voice Synthesis', slug: 'voice-synthesis' },
  { id: '8', name: 'Music Generation', slug: 'music-generation' },
  { id: '9', name: 'Translation', slug: 'translation' },
  { id: '10', name: 'Customer Service', slug: 'customer-service' },
  { id: '11', name: '3D Modeling', slug: '3d-modeling' },
  { id: '12', name: 'Education', slug: 'education' },
  { id: '13', name: 'Gaming', slug: 'gaming' },
  { id: '14', name: 'Marketing', slug: 'marketing' },
  { id: '15', name: 'Data Analysis', slug: 'data-analysis' },
  { id: '16', name: 'Design Tools', slug: 'design-tools' },
];

