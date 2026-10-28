import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import zoneimage from "../../assets/images/zoneimage.png";
import api from "../../helpers/api";

export default function Zones() {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);


    const getZones = async () => {
      try {
        const response = await api.get("/zone");
        setZones(response.data);
        setLoading(false)
      } catch (error) {
        console.log("Error fetching zones:");
      } 
    }
  useEffect(() => {
    getZones();
  }, []);

  return (
    <>
      <Hero
        bg={zoneimage}
        title={`Destinations Defined by
        Distinction`}
        desc={`From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic.`}
        btn={false}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {loading ? (
          <p className="text-center py-10">Loading zones...</p>
        ) : zones.length === 0 ? (
          <p className="text-center py-10">No zones found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {zones.map((zone) => (
              <Link
                to={`/zones/${zone.id}`}
                key={zone.id}
                className="block overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={zone.images}
                  alt={zone.name_en}
                  className="w-full h-44 object-cover"
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
