export class MarkerHandler {
  constructor () {
    const elementsWithIDList = Array.from(
      document.querySelectorAll('.post__content [id]')
    );
    this._elementsWithID = elementsWithIDList.reduce((prev, item) => {
      prev.set(item.id, item);

      return prev;
    }, new Map());

    this._postElement = document.querySelector('.post');
    this._marker = this._postElement.querySelector('.post__marker');
    this._markerHiddenClass = 'post__marker--hidden';
    this._id = null;
  }

  addEvents () {
    if (this._elementsWithID.length === 0) {
      return;
    }
    const urlHash = document.location.hash;

    if (urlHash) {
      this._id = urlHash.slice(1);
      this._moveMarker();
    }

    // Move marker by click on link in post
    this._postElement.addEventListener('click', (event) => {
      const aWithID = event.target.closest('A[href*="#"]');

      if (!aWithID) {
        return;
      }

      this._id = aWithID
        .getAttribute('href')
        .slice(1);

      this._moveMarker();
    });

    window.addEventListener('resize', () => {
      if (this._id) {
        this._moveMarker();
      }
    });
  }

  _moveMarker () {
    if (this._id === 'begin') {
      this._marker.classList.add(this._markerHiddenClass);
      this._id = null;
      return;
    }

    const targetElement = this._elementsWithID.get(this._id);

    if (!targetElement) {
      this._marker.classList.add(this._markerHiddenClass);
      this._id = null;
      return;
    }

    const markerTop = targetElement.offsetTop;
    this._marker.style.top = `${markerTop}px`;

    setTimeout(() => {
      this._marker.classList.remove(this._markerHiddenClass);
    }, 500);
  }
};
