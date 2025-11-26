import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import clsx from 'clsx';

interface Slide {
  image: string;
  title: string | React.ReactElement;
  subtitle?: string | React.ReactElement;
  buttonText?: string;
  buttonLink?: string;
  secondButtonText?: string;
  secondButtonLink?: string;
}

interface FullScreenFadeCarouselProps {
  slides: Slide[];
  fadeDuration?: number; // in ms
}

export default function FullScreenFadeCarousel({
  slides,
  fadeDuration = 100, // default: 0.5s fade
}: FullScreenFadeCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: fadeDuration / 2, // controls Embla’s internal tween speed
    },
    [Fade()],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    // shorten autoplay to feel more natural
    const interval = setInterval(() => emblaApi.scrollNext(), 150000);
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(interval);
    };
  }, [emblaApi]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={
        {
          height: '90vh',
          '--embla-fade-slide-opacity-transition': `opacity ${fadeDuration}ms ease`,
        } as React.CSSProperties
      }
      ref={emblaRef}
    >
      <div className="flex h-full">
        {slides.map((slide, i) => (
          <div key={i} className="relative flex-[0_0_100%] h-full">
            <img
              src={slide.image}
              alt={
                typeof slide.title === 'string'
                  ? slide.title
                  : 'SS&B Construtora'
              }
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-between px-6 md:px-16 text-white py-8 md:py-16">
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-left max-w-3xl ml-0 md:ml-6 lg:ml-60">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight mb-2 sm:mb-4 md:mb-6 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 drop-shadow leading-relaxed">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex-shrink-0 pb-4 md:pb-8">
                <div className="ml-0 md:ml-6 lg:ml-60">
                  {slides[selectedIndex] && (slides[selectedIndex].buttonText || slides[selectedIndex].secondButtonText) && (
                    <div className="flex flex-row gap-2 sm:gap-3 md:gap-3 mb-4 sm:mb-0">
                      {slides[selectedIndex].buttonText && (
                        <a
                          href={slides[selectedIndex].buttonLink}
                          className="inline-flex items-center justify-center text-[10px] sm:text-sm md:text-base border border-white text-white px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-200 font-medium shadow-sm hover:shadow-md whitespace-nowrap"
                        >
                          {slides[selectedIndex].buttonText}
                        </a>
                      )}
                      {slides[selectedIndex].secondButtonText && (
                        <a
                          href={slides[selectedIndex].secondButtonLink}
                          className="inline-flex items-center justify-center text-[10px] sm:text-sm md:text-base border border-white text-white px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-200 font-medium shadow-sm hover:shadow-md whitespace-nowrap"
                        >
                          {slides[selectedIndex].secondButtonText}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-16 flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={clsx(
                'h-2 w-2 sm:h-3 sm:w-3 rounded-md transition-all duration-300',
                i === selectedIndex
                  ? 'bg-green-500 w-3 sm:w-4'
                  : 'bg-white/70 hover:bg-white',
              )}
            />
          ))}
        </div>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="border-2 border-white rounded-md w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
