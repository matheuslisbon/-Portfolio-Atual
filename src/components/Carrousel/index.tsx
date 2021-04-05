import React, { useState } from 'react'
import { Carrousel } from './styles'

interface SlideImage {
  image: string
}
interface ImageSliderProps {
  slides: Array<SlideImage>
}
export const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
    console.log(current)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <Carrousel>
      <section className="slider">
        <button className="left-arrow" onClick={prevSlide}>
          {'<'}
        </button>
        {current === 0 && (
          <img
            src={slides[length - 1].image}
            alt="travel image"
            className="image not-selected right"
            onClick={prevSlide}
          />
        )}
        {slides.map((slide, index) => {
          return (
            <>
              <div>
                {current - 1 === index && (
                  <>
                    <img
                      src={slide.image}
                      alt="travel image"
                      className="image not-selected right"
                      onClick={prevSlide}
                    />
                  </>
                )}

                {current === index && (
                  <>
                    <img
                      src={slide.image}
                      alt="travel image"
                      className="image selected"
                    />{' '}
                  </>
                )}
                {current + 1 === index && (
                  <>
                    <img
                      src={slide.image}
                      alt="travel image"
                      className="image not-selected left"
                      onClick={nextSlide}
                    />
                  </>
                )}
              </div>
            </>
          )
        })}
        {slides[current + 1] === undefined && (
          <img
            src={slides[0].image}
            alt="travel image"
            className="image not-selected left"
            onClick={nextSlide}
          />
        )}

        <button className="right-arrow" onClick={nextSlide}>
          {'>'}
        </button>
      </section>
    </Carrousel>
  )
}
