import { HistoricalEvent } from "@/types/historicalEvents";

export function parseHistoricalEvent(eventStrings: string[]): HistoricalEvent[] {
    const datePattern = /\[([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})\]/;
    const results: HistoricalEvent[] = [];

    for (const eventString of eventStrings) {
        const dateMatch = eventString.match(datePattern);
        if (!dateMatch) continue;

        const day = parseInt(dateMatch[1], 10);
        const month = parseInt(dateMatch[2], 10) - 1;
        const year = parseInt(dateMatch[3], 10);

        if (day < 1 || day > 31 || month < 0 || month > 11 || year < 1) continue;

        const eventDate = new Date(year, month, day);
        if (
            eventDate.getDate() !== day ||
            eventDate.getMonth() !== month ||
            eventDate.getFullYear() !== year
        ) continue;

        const bulletIndex = eventString.indexOf('•');
        if (bulletIndex === -1) continue;

        results.push({
            date: eventDate,
            event: eventString.slice(bulletIndex + 1).trim(),
        });
    }

    return results;
}
