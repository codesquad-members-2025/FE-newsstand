// src/types/mockPressData.d.ts
export interface NewsItem {
  id: number;
  newsTitle: string;
  thumbnailImage: string;
  link: string;
  date: string;
}

export interface Press {
  pressName: string;
  logoImage: string;
  category: string;
  editedTime: string;
  newsData: NewsItem[];
}

export type newsDataTypes = NewsItem[];
export type pressDataTypes = Press[];
