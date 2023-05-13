interface IDimension {
  width: number;
  height: number;
}

interface IAboutProps {
  show: boolean;
  onHide: () => void;
}

interface IWelcomeProps {
  show: boolean;
  onHide: () => void;
}
interface IImageProps {
  description: string;
  image: string;
  show: boolean;
  tag1: string;
  onHide: () => void;
}
interface IFeature {
  properties: {
    imageUrl: string;
    description: string;
    tag1: string;
  }
}



declare module '*.jpg' {
  const value: any;
  export = value;
}
/* declare module 'mapbox-gl' {
  interface MapboxOptions {
    accessToken: string;
  }
} */
