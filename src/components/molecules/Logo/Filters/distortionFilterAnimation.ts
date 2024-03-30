// https://tympanus.net/Development/DistortedButtonEffects/

const distortionFilterAnimationGetHandler = () => {
  if (typeof window === 'undefined') {
    return;
  }

  const requestAnimationFrame = window.requestAnimationFrame;

  const wavesImage: SVGFEImageElement | null = document.querySelector('.distortion-circles__image');
  const wavesMap: SVGFEDisplacementMapElement | null = document.querySelector(
    '.distortion-circles__map',
  );
  let isRunning = false;
  const duration = 50;
  const minSize = 100;
  const maxSize = 1500;
  const step = 25;
  const steps = (maxSize - minSize) / step;

  const maxScale = 50;
  const scaleStep = maxScale / steps;

  let mouseEvent: React.MouseEvent | null = null;

  function changeProp() {
    if (!isRunning) {
      return;
    }

    if (!(wavesImage && wavesMap && mouseEvent)) {
      return;
    }

    const nextSizeValue = wavesImage.width.animVal.value + step;
    const nextSizeValueString = String(nextSizeValue);
    const nextHalfValue = nextSizeValue / 2;
    const nextScaleValue = wavesMap.scale.animVal - scaleStep;

    wavesImage.setAttribute('width', nextSizeValueString);
    wavesImage.setAttribute('height', nextSizeValueString);
    const { nativeEvent } = mouseEvent;

    wavesImage.setAttribute('x', String(nativeEvent?.offsetX - nextHalfValue));
    wavesImage.setAttribute('y', String(nativeEvent?.offsetY - nextHalfValue));
    wavesMap.setAttribute('scale', String(nextScaleValue));

    if (nextSizeValue > maxSize) {
      isRunning = false;
      return;
    }

    setTimeout(() => {
      requestAnimationFrame(changeProp);
    }, duration);
  }

  return (event: React.MouseEvent) => {
    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(changeProp);
    }

    if (wavesImage && wavesMap) {
      wavesImage.setAttribute('width', String(minSize));
      wavesImage.setAttribute('height', String(minSize));
      wavesMap.setAttribute('scale', String(maxScale));
    }
    mouseEvent = event;
  };
};

export default distortionFilterAnimationGetHandler;
