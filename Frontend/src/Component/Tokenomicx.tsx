
import tokenBgImage from "../assets/Hero-image-4.png";
import tokenImage from "../assets/Hero-image-4(1).png";

const Tokenomics = () => {
  return (
    <>
      <div
        className="h-[706px] bg-black"
        style={{ backgroundImage: `url(${tokenBgImage})` }}
      >
        <h1 className="text-[#ED0137] text-center text-[44px] py-[60px]">
          TOKENOMICS
        </h1>
        <div className="flex">
          <div className="mt-[34px]">
            <div className="relative w-[244px] h-[70px] bg-[#ED0137] rounded-3xl flex items-center justify-center ml-[168px] mb-[-35px] z-10">
              <p className="text-[18px] text-white font-normal text-center">
                Token Details
              </p>
            </div>
            <div className="relative w-[412px] h-[306px] border-2 border-rose-500 rounded-3xl ml-[90px]">
              <div className="grid grid-cols-2 gap-6 text-white p-10 ml-[59px] mt-8">
                <div>
                  <div className="py-2 text-[20px] font-normal">Name</div>
                  <div className="py-2 text-[20px] font-normal">Symbol</div>
                  <div className="py-2 text-[20px] font-normal">Total Supply</div>
                  <div className="py-2 text-[20px] font-normal">Decimals</div>
                </div>
                <div>
                  <div className="py-2 text-[20px] font-normal text-red-500">Saviour</div>
                  <div className="py-2 text-[20px] font-normal text-red-500">SVR</div>
                  <div className="py-2 text-[20px] font-normal text-red-500">1000 Trillion</div>
                  <div className="py-2 text-[20px] font-normal text-red-500">18</div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={tokenImage}
            alt="tokenImage"
            className="w-[885px] h-[372px] mt-[34px] ml-[75px]"
          />
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
