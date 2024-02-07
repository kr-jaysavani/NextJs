import MoviesCarousel from "@/components/MoviesCarousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1 className="">let's build Disney</h1>

      {/* CarouselBannerWrapper */}

      <div>
        <MoviesCarousel movies={[]} title="Upcoming"/>
        {/* <MovieCarousel movie={...} title="Upcoming"/> */}
        {/* <MovieCarousel movie={...} title="Upcoming"/> */}
      </div>

    </main> 
  );
}
