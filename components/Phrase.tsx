'use client'

import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState, useRef } from "react";
import { IconQuoteLeft } from "@/components/Icon";
import { eventHistoricService } from "@/services/eventHistoric";
import { useQuery } from "react-query";
import { getTodayEvent } from "@/utils/getTodayEvent";
import { formatDateToBrazilianFormat } from "@/utils/formatDateToBrazilianFormat";
import { parseHistoricalEvent } from "@/utils/parseHistoricalEvent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"
import { HistoricalEvent } from "@/types/historicalEvents";
import ShareButton from "@/components/ShareButton";

interface PhraseProps {
  month?: number;
  day?: number;
}

const Phrase = ({ month, day }: PhraseProps) => {
    const PhraseQuery = useQuery('phrase', eventHistoricService.getPhases);
    const [todayEvents, setTodayEvents] = useState<HistoricalEvent[]>([])

    const plugin = useRef(
      Autoplay({ delay: 6000, stopOnInteraction: true })
    )

    useEffect(() => {
      if (!PhraseQuery.isFetching && PhraseQuery.data) {
        const targetDate = (month !== undefined && day !== undefined)
          ? new Date(new Date().getFullYear(), month, day)
          : undefined;
        const eventPhraseRaw = getTodayEvent(PhraseQuery.data, targetDate);
        const events = parseHistoricalEvent(eventPhraseRaw);
        setTodayEvents(events);
      }
    }, [PhraseQuery.data, PhraseQuery.isFetching, month, day])

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!api) return;

      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);

      const handler = () => setCurrent(api.selectedScrollSnap() + 1);
      api.on("select", handler);
      return () => { api.off("select", handler); };
    }, [api])

    if (PhraseQuery.isFetching && !PhraseQuery.data) {
      return (
        <div className="flex items-center justify-center py-8">
          <div className="w-8 h-8 border-4 border-CustomCharcoal dark:border-CustomAntiqueWhite border-dotted rounded-full animate-spin" />
        </div>
      );
    }

    if (!PhraseQuery.isFetching && todayEvents.length === 0) {
      return (
        <div className="text-center py-8 text-CustomSepia/50 dark:text-CustomAntiqueWhite/40 text-sm">
          Nenhum evento histórico encontrado para esta data.
        </div>
      );
    }

    const currentEvent = todayEvents[current - 1];

    return (
      <div className="flex flex-col items-center max-w-lg gap-3 w-full">
        <div className="flex flex-col gap-1 w-full">
          <IconQuoteLeft className="text-3xl lg:text-4xl flex-shrink-0"/>
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{ align: "start" }}
            orientation="vertical"
            className="w-full max-w-xs"
          >
            <CarouselContent className="-mt-1 h-[200px]">
              {todayEvents.map((event, index) => (
                <CarouselItem key={index} className="pt-1">
                  <div className="flex flex-col h-[200px]">
                    <span className="w-full text-center text-lg lg:text-xl font-semibold">
                      {formatDateToBrazilianFormat(event.date)}
                    </span>
                    <div className="p-1">{event.event}</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="py-2 flex items-center justify-between text-sm text-CustomSepia/90 dark:text-CustomAntiqueWhite/90">
            <span>{current} de {count}</span>
            {currentEvent && (
              <ShareButton
                text={`📅 ${formatDateToBrazilianFormat(currentEvent.date)}\n\n${currentEvent.event}\n\n— Hoje na História • historiadodia.com`}
              />
            )}
          </div>
        </div>
      </div>
    );
}

export default Phrase;