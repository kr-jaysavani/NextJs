import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { Button } from "@/components/ui/button";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";
import Image from "next/image";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();

  return (
    <main className="">

      {/* CarouselBannerWrapper */}
      <CarouselBannerWrapper/>

      <div className="flex flex-col space-y-2 xl:-mt-48 mt-3">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming"/>
        <MoviesCarousel movies={topRatedMovies} title="Top Rated"/>
        <MoviesCarousel movies={popularMovies} title="Popular"/>
      </div>

    </main> 
  );
}
