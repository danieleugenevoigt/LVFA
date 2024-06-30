/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
// utils/preloadImages.js

export const preloadImages = (imageUrls, callback) => {
  let loadedCount = 0;

  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      loadedCount++;
      if (loadedCount === imageUrls.length) {
        callback();
      }
    };
  });
};
