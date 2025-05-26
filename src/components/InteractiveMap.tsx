import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const locations = [
  { name: "Sri Lanka", coordinates: [80.7718, 7.8731] as [number, number] },
  { name: "United States", coordinates: [-95.7129, 37.0902] as [number, number] },
  { name: "United Kingdom", coordinates: [-3.4360, 55.3781] as [number, number] },
  { name: "Australia", coordinates: [133.7751, -25.2744] as [number, number] },
  { name: "Canada", coordinates: [-106.3468, 56.1304] as [number, number] },
  { name: "Germany", coordinates: [10.4515, 51.1657] as [number, number] },
  { name: "France", coordinates: [2.2137, 46.2276] as [number, number] },
  { name: "Japan", coordinates: [138.2529, 36.2048] as [number, number] },
  { name: "India", coordinates: [78.9629, 20.5937] as [number, number] },
  { name: "Brazil", coordinates: [-51.9253, -14.2350] as [number, number] }
];

const InteractiveMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[400px] bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <ComposableMap
        projectionConfig={{
          scale: 100
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#EAEAEC",
                    outline: "none"
                  },
                  hover: {
                    fill: "#F5F4F6",
                    outline: "none"
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none"
                  }
                }}
              />
            ))
          }
        </Geographies>
        {locations.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={4} fill="#F53" />
            <text
              textAnchor="middle"
              y={-10}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "10px" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </motion.div>
  );
};

export default InteractiveMap; 