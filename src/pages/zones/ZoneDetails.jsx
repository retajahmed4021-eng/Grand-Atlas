import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../helpers/api";
import Title from "../../components/Title";
import zonedetails1 from "../../assets/images/zonedetails1.png";

export default function ZoneDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [zone, setZone] = useState(null);
  const [loading, setLoading] = useState(true);

  const getZoneDetails = async () => {
    try {
      const response = await api.get(`/zone/${id}`);

      setZone(response.data);

    } catch (error) {
      console.log("Error fetching zone details:");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getZoneDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center py-10">Loading details...</p>;
  }

  return (
    <div className="px-9 rounded-2xl min-h-screen pt-24">

  
      <div className="flex flex-col items-center justify-center gap-1">
        <h2 className="text-3xl font-semibold text-center mt-10 mb-1">
          {zone.name_en}
        </h2>

        <div className="h-1 w-25 rounded-full bg-[#8E1616] mb-12"></div>
      </div>

      
      <img
        src={zone.images?.[0]}
        alt={zone.name_en}
        className="h-131 object-cover w-full rounded-3xl"
      />

     
      <p className="text-gray-500 text-center mt-6">
        {zone.description_en}
      </p>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-5">

        {zone.projects?.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >

           
            <img
              src={project.images?.[0]}
              alt={project.name_en}
              className="w-full h-56 object-cover"
            />

           
            <div className="p-4">

              <h2 className="font-bold text-lg">
                {project.name_en}
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                {project.description_en}
              </p>

              <button
                onClick={() => navigate(`/projects/${project.id}`)}
                className="w-full text-[#8E1616] transition duration-300 hover:bg-[#8E1616] hover:text-white border border-[#8E1616] rounded-xl py-2 mt-6"
              >
                View Details
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
