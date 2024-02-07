import MoviesCarousel from '@/components/MoviesCarousel'
import { getDiscoverMovies } from '@/lib/getMovies'
import React from 'react'

type Props = {
    params:{
        id:string
    },
    searchParams:{
        genre:string
    }
}

const GenrePage = async ({params:{id},searchParams:{genre}}:Props) => {
  const movie = await  getDiscoverMovies(id);
  return (
    <div className='max-w-7xl mx-auto'>
    <div className='flex flex-col space-y-5 mt-32 xl:mt-42'>
      <h1 className='text-6xl font-bold px-10'>Result for {genre}</h1>
      <MoviesCarousel movies={movie} isVertical/>
    </div> 
    </div>
  )
}

export default GenrePage