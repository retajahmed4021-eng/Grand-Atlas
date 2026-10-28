import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../helpers/api";


export default function ZoneProjects() {
   const { id } = useParams();
     const [project, setproject] = useState(null);
         const [loading, setLoading] = useState(true);
const getZoneProjects = async () => {
    try {
      const response = await api.get(`/projects/${id}`);
      setproject(response.data);
          console.log("project Details:", response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching project details:");
    } 
  };
  useEffect(() => {
    getZoneProjects();
  }, [id]);

  if (loading) {
    return <p className="text-center py-10">Loading details...</p>;
  }

    
  return (
 <div className="p-9 min-h-screen pt-24">
        <img src={project.images?.[0]}
        alt={project.title_en}
        className="w-full rounded-2xl object-cover h-140.5"
        />
        
      
        <h1 className="text-3xl text-[#8E1616] font-bold pt-4">{project.name_en}</h1>
    
       
        <div className="grid grid-cols-2">
        
        <div className="gap-3">
           
    
        <p className="text-lg text-[#847D7D] pt-2">{project.description_en}</p>
 
        </div>

      </div>
    </div>
  )
}
