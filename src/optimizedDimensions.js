// 1280 is the max value accepted by mapbox static API
const MAPBOX_SIZE_LIMIT = 1280;

const optimizedDimensions = ({ width, height }) => {
  const ratio = width/height;

  if (width > MAPBOX_SIZE_LIMIT) {
    width = MAPBOX_SIZE_LIMIT;
    height = Math.round(width / ratio);
  }

  // TODO: handle height bigger than 1280

  return { width, height };
};

export default optimizedDimensions;