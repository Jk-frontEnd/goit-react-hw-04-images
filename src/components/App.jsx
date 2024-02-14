import React, { useState, useEffect, useCallback } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from "./Loader/Loader";

export const App = () => {
  
  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery
          query={query}
          page={page}
          perPage={perPage}
          images={images}
          isLoading={isLoading}
          totalImages={totalImages}
          onLoadMore={handleLoadMore}
        />
      )}
      {isLoading && <Loader />}
    </div>
  );
};
