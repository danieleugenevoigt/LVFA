/* eslint-disable import/prefer-default-export */
export function preloadImages(urls, allImagesLoadedCallback) {
  let loadedCount = 0;
  const total = urls.length;

  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      loadedCount += 1;
      if (loadedCount === total) {
        allImagesLoadedCallback();
      }
    };
    img.onerror = () => {
      loadedCount += 1; // Consider as loaded to prevent blocking
      if (loadedCount === total) {
        allImagesLoadedCallback();
      }
    };
  });
}
