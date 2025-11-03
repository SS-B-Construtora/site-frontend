import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import clsx from 'clsx'

interface Slide {
  image: string
  title: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
}

interface FullScreenFadeCarouselProps {
  slides: Slide[]
  headerHeight?: string // default "4rem"
  fadeDuration?: number // in ms
}

export default function FullScreenFadeCarousel({
  slides,
  headerHeight = '4rem',
  fadeDuration = 100 // default: 0.5s fade
}: FullScreenFadeCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: fadeDuration / 2 // controls Embla’s internal tween speed
    },
    [Fade()]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    // shorten autoplay to feel more natural
    const interval = setInterval(() => emblaApi.scrollNext(), 4000)
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      clearInterval(interval)
    }
  }, [emblaApi])

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: `calc(100vh - ${headerHeight})`,
        // fade transition speed
        '--embla-fade-slide-opacity-transition': `opacity ${fadeDuration}ms ease`
      } as React.CSSProperties}
      ref={emblaRef}
    >
      <div className="flex h-full">
        {slides.map((slide, i) => (
          <div key={i} className="relative flex-[0_0_100%] h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-16 text-white max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              {slide.subtitle && (
                <p className="text-lg md:text-xl mb-6 drop-shadow">
                  {slide.subtitle}
                </p>
              )}
              {slide.buttonText && (
                <a
                  href={slide.buttonLink}
                  className="inline-flex items-center border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
                >
                  {slide.buttonText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={clsx(
              'h-2 w-2 rounded-full transition-all duration-300',
              i === selectedIndex
                ? 'bg-green-500 w-4'
                : 'bg-white/70 hover:bg-white'
            )}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute bottom-5 right-5 border border-white rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
