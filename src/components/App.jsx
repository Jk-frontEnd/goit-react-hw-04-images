import React, { useState, useEffect, useCallback } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from "./Loader/Loader";

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 12;
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

  const fetchImages = useCallback(() => {
    const apiKey = '41687911-62b9e6d772891b12bf67d3c73';
    const apiUrl = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    setIsLoading(true);

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setImages((prevImages) => [...prevImages, ...data.hits]);
        setTotalImages(data.total);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        setIsLoading(false);
      });
  }, [query, page, perPage]);

  useEffect(() => {
    if (query !== '' && page > 0) {
      fetchImages();
    }
  }, [query, page, fetchImages]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setTotalImages(0);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

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
      {isLoading && Loader }
    </div>
  );
};
