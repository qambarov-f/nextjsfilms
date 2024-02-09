import CategoriesLoading from "@/components/Categories/loading.js";
import MoviesSectionLoading from "@/components/Movies-section/loading";
import FeatureMovieLoading from "@/components/featured-movies/loading";
import React from "react";

function Loading() {
  return (
    <div>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </div>
  );
}

export default Loading;
