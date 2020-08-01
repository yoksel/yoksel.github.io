import { initMarker } from './marker-handler.js';
import { initTagsList } from './init-tags-list.js';
import { initComments } from './init-comments.js';

document.documentElement.classList.remove('no-js');

initMarker();
initTagsList();
initComments();
