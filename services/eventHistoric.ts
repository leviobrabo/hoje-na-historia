import { HistoricalEvents } from "@/types/historicalEvents"
import { apiService } from "./client"

export const eventHistoricService = {
    async getPhases():Promise<HistoricalEvents> {
        const response = await apiService.get('https://raw.githubusercontent.com/leviobrabo/history-api/main/history_api/data/events/events-pt.json')
        return response.data
    }
}
