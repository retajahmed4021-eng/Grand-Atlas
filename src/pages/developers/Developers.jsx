import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import developerimage from "../../assets/images/developerimage.png";
import api from "../../helpers/api";
import { useNavigate } from "react-router-dom";

export default function Developers() {


  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const getDevelopers = async () => {
    try {
      const response = await api.get("/developer");
      setDevelopers(response.data);
      console.log(response.data);
      console.log(developers);
    } catch (error) {
      console.log("Error fetching developers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDevelopers();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-bold">Loading...</p>
      </div>
    );
  }

  return(  
    <div> <Hero
              bg={developerimage}
              title={`Defining the Future
                 Skyline.`}
              desc={`Great developments require more than just capital; they require a narrative. We provide the elite marketing and
                 specialized brokerage services needed to position your landmark projects in front of the world's most discerning buyers.`}
             
              btn={false}
            />
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-5">

        {developers.map((developer) => (
          <div
            key={developer.id}
            className="border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >

           
            <img
              src={developer.images?.[0]}
              alt={developer.name_en}
              className="w-full h-56 object-cover"
            />

           
            <div className="p-4">

              <h2 className="font-bold text-lg">
                {developer.name_en}
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                {developer.description_en}
              </p>

              <button
                onClick={() => navigate(`/developers/${developer.id}`)}
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
