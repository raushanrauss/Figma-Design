
import cardImg1 from "../assets/savior_card_1.png";
import cardImg2 from "../assets/savior_card_2.png";
import cardImg3 from "../assets/savior_card_3.png";
import cardImg4 from "../assets/savior_card_4.png";
import roadmapBgImage from "../assets/Hero-image-5.png";

const Roadmap = () => {
  return (
    <>
      <div
        className="h-[716px] bg-cover opacity-100 bg-black"
        style={{ backgroundImage: `url(${roadmapBgImage})` }}
      >
        <h1 className="text-[44px] font-normal text-[#ED0137] text-center pt-6 py-[64px]">
          ROAD MAP
        </h1>
        <div className="w-[1160px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 ml-[215px] mt-[90px]">
          <div
            className="w-[238px] h-[349px] bg-cover flex flex-col justify-end p-4"
            style={{ backgroundImage: `url(${cardImg1})` }}
          >
            <div className="p-2 rounded">
              <h1 className="text-white text-[22px]">Phase 1</h1>
              <p className="text-[#AEB1B8]">
                Technical Readiness <br /> and Smart Contract <br /> Audit
              </p>
            </div>
          </div>
          <div
            className="w-[238px] h-[349px] bg-cover flex flex-col justify-end p-4"
            style={{ backgroundImage: `url(${cardImg2})` }}
          >
            <div className="p-2 rounded">
              <h1 className="text-white text-[22px]">Phase 2</h1>
              <p className="text-[#AEB1B8]">
                Increase Liquidity <br /> and Trading Volume
              </p>
            </div>
          </div>
          <div
            className="w-[238px] h-[349px] bg-cover flex flex-col justify-end p-4"
            style={{ backgroundImage: `url(${cardImg3})` }}
          >
            <div className="p-2 rounded">
              <h1 className="text-white text-[22px]">Phase 3</h1>
              <p className="text-[#AEB1B8]">
                Community Building <br /> and Marketing
              </p>
            </div>
          </div>
          <div
            className="w-[238px] h-[349px] bg-cover flex flex-col justify-end p-4"
            style={{ backgroundImage: `url(${cardImg4})` }}
          >
            <div className="p-2 rounded">
              <h1 className="text-white text-[22px]">Phase 4</h1>
              <p className="text-[#AEB1B8]">
                Ecosystem Expansion <br /> and Partnerships
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
