import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../helpers/api";
import Title from "../../components/Title"
import location from "../../assets/icons/location.png"

export default function UnitDetails() {
     const { id } = useParams();
     const [unit, setUnit] = useState(null);
     const [loading, setLoading] = useState(true);

 const getUnitDetails = async () => {
    try {
      const response = await api.get(`/unit/${id}`);
      setUnit(response.data);
          console.log("unit Details:", response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching unit details:");
    } 
  };
  useEffect(() => {
    getUnitDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center py-10">Loading details...</p>;
  }







  return (
    <div className="p-4 sm:p-6 lg:p-9 min-h-screen pt-24">
        <img src={unit.images?.[0]}
        alt={unit.title_en}
        className="w-full rounded-2xl object-cover h-64 sm:h-96 lg:h-140.5"
        />


        <h1 className="text-2xl sm:text-3xl text-[#8E1616] font-bold pt-4">{unit.title_en}</h1>
        <p className="flex flex-wrap items-center gap-1 text-sm sm:text-base text-[#847D7D]"><img src={location} className="w-5 h-5"/>Minusio, Lake Maggiore, Switzerland — ref. LOC1771</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        <div className="gap-5 ">
            <h3 className="text-xl font-bold m-4"> At a glance</h3>
            <p className="text-lg sm:text-xl text-[#847D7D]">Price: {unit.price}</p>
            <p className="text-lg sm:text-xl text-[#847D7D]">Size: {unit.size}</p>
            <p className="text-lg sm:text-xl text-[#847D7D]">Bedrooms: {unit.bedrooms}</p>
            <p className="text-lg sm:text-xl text-[#847D7D]">Bathrooms: {unit.bathrooms}</p>

        </div>
        <div className="gap-3 min-w-0">

        <h3 className="text-xl font-bold p-2">Overview</h3>
        <p className="text-base sm:text-lg text-[#847D7D]">{unit.description_en}</p>
  <div className="flex flex-col sm:flex-row gap-2 mt-6 sm:mt-10">
  <button className="w-full flex-1 h-12 rounded-md bg-[#8E1616] text-white flex items-center justify-center">
    Contact Via WhatsApp
  </button>

  <button className="w-full flex-1 h-12 rounded-md border-2 border-[#8E1616] text-[#8E1616] flex items-center justify-center ">
    Call
  </button>
</div>
        </div>

      </div>
    </div>
  )
}
