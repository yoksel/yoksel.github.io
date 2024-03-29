import Widget from '../Widget';
import photos from '../../../../data/meta/photos';
import { WidgetItem } from '../../../types';

export const MAX_PHOTOS = 18;

const PhotosWidget = () => {
  const items: WidgetItem[] = photos.map((photo) => ({
    imageSrc: photo.urls.small,
    href: photo.link,
  }));
  return (
    <Widget
      id="photos"
      title="Фотографии"
      items={items.slice(0, MAX_PHOTOS)}
      hideTitle={true}
      layout="grid"
      footerContent="<a href='https://unsplash.com/@yoksel/'>unsplash.com/@yoksel</a>"
    />
  );
};

export default PhotosWidget;
