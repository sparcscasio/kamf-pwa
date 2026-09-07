import type { BoothCategory } from '@/types';

export const BOOTH_CATEGORY: Record<BoothCategory, { label: string; shortLabel: string; color: string }> = {
  INFO_SELF: { label: '인포 / 자체부스', shortLabel: '인포·자체', color: '#C5A63A' },
  SPONSOR: { label: '후원부스', shortLabel: '후원', color: '#657D50' },
  INVITED: { label: '초청부스', shortLabel: '초청', color: '#5F8F88' },
  CLUB: { label: '학생부스', shortLabel: '학생', color: '#5F8F88' },
  NIGHT_MARKET: { label: '야시장부스', shortLabel: '야시장', color: '#56351F' },
  FOOD_TRUCK: { label: '푸드트럭', shortLabel: '푸드트럭', color: '#B69A77' },
};
