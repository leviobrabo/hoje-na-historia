import { HistoricalEvents } from '@/types/historicalEvents';

export function getTodayEvent(historicalEvents: HistoricalEvents, date?: Date): string[] {
    const target = date ?? new Date();
    const dateKey = `${target.getMonth() + 1}-${target.getDate()}`;
    return historicalEvents[dateKey] ?? [];
}