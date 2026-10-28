import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero";
import unitimage from "../../assets/images/unitimage.png";
import api from "../../helpers/api";

export default function Units() {
  const navigate = useNavigate();

  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const getAllUnits = async () => {
    try {
      const response = await api.get("/unit");

      console.log("Units:", response.data);

      setUnits(response.data);
    } catch (error) {
      console.log("Error fetching units:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUnits();
  }, []);

  const filteredUnits = units.filter((unit) => {
    return (
      unit.title_en.toLowerCase().includes(search.toLowerCase()) &&
      (price === "" || unit.price <= price) &&
      (bedrooms === "" || unit.bedrooms === bedrooms)
    )
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-bold">Loading...</p>
      </div>
    )
  }

  return (
    <>
      <Hero
        bg={unitimage}
        title={`Where Visionary Design
        Meets Daily Life`}
        desc={`Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views
        with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world`}
        btn={false}
      />

     <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

  <div className="flex flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap justify-center items-stretch sm:items-center gap-4 mt-10">

    <input
      type="text"
      placeholder="Search Property"
      className="border border-[#8E1616] px-5 py-3 rounded-xl w-full sm:w-70"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <input
      type="number"
      placeholder="Price Range"
      className="border border-[#8E1616] px-5 py-3 rounded-xl w-full sm:w-70"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />

    <select
      className="border border-[#8E1616] px-5 py-3 rounded-xl w-full sm:w-70"
      value={bedrooms}
      onChange={(e) => setBedrooms(e.target.value)}
    >
      <option value="">All Bedrooms</option>
      <option value="1">1 Bedroom</option>
      <option value="2">2 Bedrooms</option>
      <option value="4">4 Bedrooms</option>
      <option value="12">12 Bedrooms</option>
    </select>

    <button
      onClick={() => {
        setSearch("");
        setPrice("");
        setBedrooms("");
      }}
      className="text-white bg-[#8E1616] px-5 py-3 rounded-xl w-full sm:w-70"
    >
      Reset
    </button>

  </div>

</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 sm:px-8 lg:px-20">
  {filteredUnits.length > 0 ? (
    filteredUnits.map((unit) => (
      <div 
        className="border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
        key={unit.id}
      >
        <img 
          src={unit.images[0]} 
          alt={unit.title_en} 
          className="w-full h-56 object-cover"
        />

        <div className="p-4">
          <h2 className="font-bold text-lg">{unit.title_en}</h2>

          <p className="text-gray-500 mt-2 text-sm">
            {unit.description_en}
          </p>

          <div className="flex justify-between mt-4 text-sm gap-2">
            <span>${unit.price}</span>
            <span>{unit.bedrooms} Bedrooms</span>
          </div>

          <button 
            onClick={() => navigate(`/units/${unit.id}`)}
            className="w-full sm:w-auto text-[#8E1616] transition duration-300 hover:bg-[#8E1616] hover:text-[white] border border-[#8E1616] rounded-xl px-4 sm:px-10 lg:px-35 py-2 text-center items-center mt-6 lg:mt-10"
          >
            View Details
          </button>
        </div>
      </div>
    ))
  ) : 
  <p>No Units Found</p>}
</div>
    </>
  );
}