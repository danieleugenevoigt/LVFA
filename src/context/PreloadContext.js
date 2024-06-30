/* eslint-disable no-plusplus */
import React, {
  createContext, useState, useEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { preloadImages } from '../utills/preloadImages';

export const PreloadContext = createContext();

// Define the list of folder names
const folders = [
  'Broken',
  'Contemplation',
  'Dejection',
  'Hidden',
  'Hopefull',
  'Hopeless',
  'Lost',
  'Plea',
  'Trapped',
];

export function PreloadProvider({ children }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Generate URLs for all images in all folders
  const imageUrls = useMemo(() => {
    const urls = [];
    folders.forEach((folder) => {
      for (let i = 1; i <= 31; i++) {
        urls.push(`${process.env.PUBLIC_URL}/images/${folder}/art-${i}.png`);
      }
    });
    return urls;
  }, []);

  useEffect(() => {
    preloadImages(imageUrls, () => {
      setImagesLoaded(true);
    });
  }, [imageUrls]);

  const contextValue = useMemo(() => ({ imagesLoaded }), [imagesLoaded]);

  return (
    <PreloadContext.Provider value={contextValue}>
      {children}
    </PreloadContext.Provider>
  );
}

PreloadProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
