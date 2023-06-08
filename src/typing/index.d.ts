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
  title: string;
  image: string;
  show: boolean;
  text: string;
  onHide: () => void;
}
interface IFeature {
  properties: {
    imageUrl: string;
    title: string;
    text: string;
  }
}



declare module '*.jpg' {
  const value: any;
  export = value;
}
 declare module '!!mapbox-gl' {const content: string;
  export default content;
  }

