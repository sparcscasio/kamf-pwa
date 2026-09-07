export type PerformanceType = 'INVITED_ARTIST' | 'OPEN_STAGE' | 'OPEN_BUSKING';
export type BoothCategory = 'INFO_SELF' | 'SPONSOR' | 'INVITED' | 'CLUB' | 'NIGHT_MARKET' | 'FOOD_TRUCK';

export interface Performance {
  id: string;
  title: string;
  type: PerformanceType;
  date: '2026-09-10' | '2026-09-11' | '2026-09-12';
  startAt: string;
  endAt?: string;
  stage: string;
  description?: string;
  part?: string;
}

export interface Booth {
  id: string;
  boothNumber: string;
  name: string;
  organization?: string;
  category: BoothCategory;
  description?: string;
  locationHint?: string;
}

export interface GoodsItem {
  id: string;
  name: string;
  requiredVisits: number;
  requiredCategory?: BoothCategory;
  requiredCategoryLabel?: string;
  description: string;
}
