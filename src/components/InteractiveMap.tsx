import { motion } from 'framer-motion';
// @ts-ignore
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

// Placeholder data - replace with your actual locations
const locations = [
  { name: 'Remote Team Location A', coordinates: [-74.0060, 40.7128] as [number, number], description: 'Worked with team in 20XX' },
  { name: 'Workshop City B', coordinates: [2.3522, 48.8566] as [number, number], description: 'Conducted workshop on YYYY' },
  { name: 'Event Location C', coordinates: [139.6917, 35.6895] as [number, number], description: 'Attended event in ZZZZ' },
];

interface GeographyProps {
  rsmKey: string;
  properties: any;
}

interface MarkerProps {
  coordinates: [number, number];
}

const InteractiveMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.3 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🌍 Interactive World Map</h2>
      <div className="flex justify-center">
        <ComposableMap
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 140
          }}
          width={800}
          height={400}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: GeographyProps[] }) =>
              geographies.map((geo: GeographyProps) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: '#DED8C1',
                      outline: 'none'
                    },
                    hover: {
                      fill: '#F53E4F',
                      outline: 'none'
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none'
                    }
                  }}
                />
              ))
            }
          </Geographies>
          {locations.map(({ name, coordinates, description }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle
                r={8}
                fill="#F53"
                stroke="#fff"
                strokeWidth={2}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={`${name} - ${description}`}
              />
            </Marker>
          ))}
        </ComposableMap>
        <Tooltip id="my-tooltip" />
      </div>
    </motion.div>
  );
};

export default InteractiveMap; 