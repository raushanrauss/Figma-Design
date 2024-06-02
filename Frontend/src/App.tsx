// src/App.js


import Faq from "./Component/Faq";
import Footer from "./Component/Footer";
import Roadmap from "./Component/RoadMap";
import Tokenomics from "./Component/Tokenomicx";
import Navbar from "./Navbar/Navbar";
import './index.css'
const App = () => {
  return (
    <>
    <div className="bg-custom h-80 ">
      <div   >
        <Navbar />
        
      </div>
    </div>
    {/* <Card2 /> */}
    {/* <TokenInfoCard /> */}
    <Tokenomics />
    <Roadmap />
    <Faq />
    <Footer/>
    </>
  );
};

export default App;
