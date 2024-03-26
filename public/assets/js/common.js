import { initMarker } from './marker-handler.js';
import { initTagsList } from './init-tags-list.js';
import { initPhotoWidget } from './init-photo-widget.js';

document.documentElement.classList.remove('no-js');

initMarker();
initTagsList();
initPhotoWidget();
