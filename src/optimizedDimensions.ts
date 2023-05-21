// 1280 is the max value accepted by mapbox static API
const MAPBOX_SIZE_LIMIT = 1280;

const optimizedDimensions = ({ width, height }: IDimension): IDimension => {
  const ratio = width / height;

  if (width > MAPBOX_SIZE_LIMIT) {
    width = MAPBOX_SIZE_LIMIT;
    height = Math.round(width / ratio);
  }

  if (height > MAPBOX_SIZE_LIMIT) {
    height = MAPBOX_SIZE_LIMIT;
    width = Math.round(height * ratio);
  }

  return { width, height };
};

export default optimizedDimensions;
