"use client"

import { Movie } from "@/typings";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';
import getImagePath from '@/lib/getImagePath';

Autoplay.globalOptions = { delay: 5000 }

const CarouselBanner = ({movies}:{movies: Movie[];}) => {
    const [emblaRef] = useEmblaCarousel({ loop: true,duration:100 }, [Autoplay()])

  return (
    <div className='overflow-hidden lg:-mt-40 relative cursor-pointer'
    ref={emblaRef} >
        <div className='flex'>
            {movies?.map((movie) => (
                <div key={movie.id} className='flex-[0_0_100%] min-w-0 relative'>
                <Image
                key={movie.id}
                    src={getImagePath(movie.backdrop_path||movie.poster_path,true)  }
                    alt={movie.title}
                    width={1920}
                    height={1080}
                    />

                    <div className="hidden md:inline absolute mt-0 top-0 bg-transparent z-20 pt-40 left-0 xl:pt-52 lg:mt-40 h-full w-full bg-gradient-to-r from-gray-900/90 transparent to-transparent p-10 space-y-5 text-white" >
                      <h2 className="text-5xl font-bold max-w-xl z-50">{movie.title}</h2>
                      <p className=" line-clamp-3 max-w-xl z-50">{movie.overview}</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
                </div>     
            ))}
        </div>
    </div>
  )
}

export default CarouselBanner 