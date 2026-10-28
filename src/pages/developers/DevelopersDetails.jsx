import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../helpers/api";


export default function DevelopersDetails() {
const { id } = useParams();
const [developer, setDeveloper] = useState(null);
  const [loading, setLoading] = useState(true);

  const getDevelopersDetails =async ()=>{
    try{
         const response = await api.get(`/developer/${id}`);
      setDeveloper(response.data)

    }catch (error) {
      console.log("Error fetching developer details:");
    } finally {
      setLoading(false);
    }
  }
useEffect(() => {
    
    getDevelopersDetails();
  }, [id]);

    if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-bold">Loading...</p>
      </div>
    );
  }


  return (
<div className="px-9 rounded-2xl min-h-screen pt-24">

  
      <div className="flex flex-col items-center justify-center gap-1">
        <h2 className="text-3xl font-semibold text-center mt-10 mb-1">
          {developer.name_en}
        </h2>

        <div className="h-1 w-25 rounded-full bg-[#8E1616] mb-12"></div>
      </div>

      
      <img
        src={developer.images?.[0]}
        alt={developer.name_en}
        className="h-131 object-cover w-full rounded-3xl"
      />

     
      <p className="text-gray-500 text-center mt-6">
        {developer.description_en}
      </p>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-5">

        {developer.projects?.map((project) => (
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
  )
}
