import React from 'react'


// components
import FeaturedMovie from "@/components/featured-movies";
import Categories from '@/components/Categories';
import MoviesSection from '@/components/Movies-section';

function HomeContainer({
  topRatedMovies = [],
  popularMovies = [],
  categories=[],
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <Categories categories={categories.slice(0, 9)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          movies={selectedCategory.movies}
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory.id)
              .name
          }
        />
      )}
      <MoviesSection
        title="Top Rated Films"
        movies={topRatedMovies.slice(1, 15)}
      />
      <MoviesSection
        title="Popular Films"
        movies={popularMovies.slice(1, 15)}
      />
    </div>
  );
}

export default HomeContainer;