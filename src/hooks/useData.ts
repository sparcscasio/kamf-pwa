import { useQuery } from '@tanstack/react-query';
import { getBooths, getGoods, getPerformances } from '@/services/data';

export const usePerformances = () => useQuery({ queryKey: ['performances'], queryFn: getPerformances });
export const useBooths = () => useQuery({ queryKey: ['booths'], queryFn: getBooths });
export const useGoods = () => useQuery({ queryKey: ['goods'], queryFn: getGoods });
