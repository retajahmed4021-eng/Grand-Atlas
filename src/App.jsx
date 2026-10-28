import { Route, Routes } from "react-router-dom";
import Zones from "./pages/zones/Zones";
import Units from "./pages/units/Units";
import Home from "./pages/home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import Developers from "./pages/developers/Developers";
import Layout from "./components/Layout/Layout";
import ZoneDetails from "./pages/zones/ZoneDetails";
import UnitDetails from "./pages/units/UnitDetails";
import ZoneProjects from "./pages/zones/ZoneProjects";
import DevelopersDetails from "./pages/developers/DevelopersDetails";
import Register from "./pages/register/Register.jsx";


function App() {
  return (<>
  
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/zones" element={<Zones />} />
        <Route path="/zones/:id"element={<ZoneDetails/>}/>
        <Route path="/projects/:id" element={<ZoneProjects />} />
        <Route path="/units" element={<Units />} />
        <Route path="/units/:id"element={<UnitDetails/>}/>
        <Route path="/developer" element={<Developers/>}/>
        <Route path="/developers/:id"element={<DevelopersDetails/>}/>
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
