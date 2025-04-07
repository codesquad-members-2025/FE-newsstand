// src/types/mockPressData.d.ts
export interface NewsItem {
  "@type": string;
  gdid: string | null;
  title: string;
  url: string;
  aid: string;
  image: {
    url: string;
  } | null;
  _id: string;
}

export interface Press {
  pid: string;
  name: string;
  regDate: string;
  logoDark: string;
  logoLight: string;
  materials: NewsItem[];
}

export type newsItemTypes = NewsItem[];
export type pressTypes = Press[];
