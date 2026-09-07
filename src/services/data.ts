import { booths as fallbackBooths, goods as fallbackGoods, performances as fallbackPerformances } from '@/data/mock';
import { supabase } from './supabase';
import type { Booth, GoodsItem, Performance } from '@/types';

export async function getPerformances(): Promise<Performance[]> {
  if (!supabase) return fallbackPerformances;
  try {
    const { data, error } = await supabase.from('performances').select('*').order('startAt', { ascending: true });
    if (error || !data?.length) return fallbackPerformances;
    return data as Performance[];
  } catch {
    return fallbackPerformances;
  }
}

export async function getBooths(): Promise<Booth[]> {
  if (!supabase) return fallbackBooths;
  try {
    const { data, error } = await supabase.from('booths').select('*');
    if (error || !data?.length) return fallbackBooths;
    return data as Booth[];
  } catch {
    return fallbackBooths;
  }
}

export async function getGoods(): Promise<GoodsItem[]> {
  if (!supabase) return fallbackGoods;
  try {
    const { data, error } = await supabase.from('goods').select('*').order('requiredVisits', { ascending: true });
    if (error || !data?.length) return fallbackGoods;
    return data as GoodsItem[];
  } catch {
    return fallbackGoods;
  }
}
