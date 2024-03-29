import Widget from '../Widget';
import photos from '../../../../data/meta/photos';
import { WidgetItem } from '../../../types';
import { useEffect, useState } from 'react';

export const MAX_PHOTOS = 18;

const PhotosWidget = () => {
  const [randomPhotos, setRandomPhotos] = useState<WidgetItem[]>();

  // to avoid differences between client and server
  useEffect(() => {
    const items: WidgetItem[] = photos.map((photo) => ({
      imageSrc: photo.src,
      href: photo.link,
      alt: photo.altDescription,
    }));

    const randomPhotos = new Set<WidgetItem>();

    while (randomPhotos.size < MAX_PHOTOS) {
      const randomIndex = Math.floor(Math.random() * items.length);
      randomPhotos.add(items[randomIndex]);
    }

    setRandomPhotos(Array.from(randomPhotos));
  }, []);

  if (!randomPhotos) return null;

  return (
    <Widget
      id="photos"
      title="Фотографии"
      items={Array.from(randomPhotos)}
      hideTitle={true}
      layout="grid"
      footerContent="<a href='https://unsplash.com/@yoksel/'>unsplash.com/@yoksel</a>"
    />
  );
};

export default PhotosWidget;
