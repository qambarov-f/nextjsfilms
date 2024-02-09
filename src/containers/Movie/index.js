import FeaturedMovie from '@/components/featured-movies'
import React from 'react'

function MovieContainer({movie}) {
  return <FeaturedMovie movie={movie} isCompact={false} />;
}

export default MovieContainer