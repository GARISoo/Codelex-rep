import { useEffect, useState } from 'react';
import LocationProps, { getAllLocations } from '../../Data/LocationsData/locations';

const Locations = () => {
  const [locations, setLocations] = useState<LocationProps[]>();

  const request = async () => {
    setLocations(await getAllLocations());
  };

  useEffect(() => {
    request();
  }, []);

  const a = 0;
  return (
    <div className="locations">
      <h1 className="body__h1">All Known Locations and Data</h1>

      <div className="location__desc">
        <span className="location__text name">Name of Location</span>
        <span className="location__text type">Type</span>
        <span className="location__text dimension">Dimension</span>
        <span className="location__text residents">Found species</span>
      </div>

      {locations && locations.map((el) => (
        <div
          key={el.id}
          className="location"
        >
          <div className="location__text name">{el.name}</div>
          <div className="location__text type">{el.type}</div>
          <div className="location__text dimension">{el.dimension}</div>
          <div className="location__text residents">{el.residents.length}</div>
        </div>
      ))}
    </div>
  );
};

export default Locations;
