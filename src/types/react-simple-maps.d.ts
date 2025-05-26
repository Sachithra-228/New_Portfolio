declare module 'react-simple-maps' {
  import { ReactNode } from 'react';

  export interface GeographyProps {
    geography: any;
    style?: {
      default?: {
        fill?: string;
        outline?: string;
      };
      hover?: {
        fill?: string;
        outline?: string;
      };
      pressed?: {
        fill?: string;
        outline?: string;
      };
    };
  }

  export interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
  }

  export const ComposableMap: React.FC<{
    projectionConfig?: {
      rotate?: [number, number, number];
      scale?: number;
    };
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    children?: ReactNode;
  }>;

  export const Geographies: React.FC<{
    geography: string;
    children: (props: { geographies: any[] }) => ReactNode;
  }>;

  export const Geography: React.FC<GeographyProps>;
  export const Marker: React.FC<MarkerProps>;
} 