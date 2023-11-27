import WhyImg from "../../../assets/img/why.png";
const WhyDonate = () => {
  return (
    <div className="px-4 py-16 mx-auto bg-white rounded-lg sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
      <h1 className="text-3xl font-brooklyn font-semibold text-gray-800 text-center mb-2">
        Why to <span className="text-secondary ">Donate ?</span>
      </h1>
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <img src="/icons/donation.png" alt="icon" className="w-5" />
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-1">
              <p className="mb-2 text-lg font-bold font-brooklyn">Saving Lives :</p>
              <p className="text-gray-700 text-[0.9rem]">By donating blood, you directly contribute to providing a vital resource that can make a significant difference in someone's life.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <img src="/icons/cardiogram.png" alt="icon" className="w-5" />
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-1">
              <p className="mb-2 text-lg font-bold font-brooklyn">Health Benefits : </p>
              <p className="text-gray-700 text-[0.9rem]">Regular blood donation can help reduce the risk of cancer, heart attacks, and other health disorders by promoting the production of new red blood cells and regulating iron levels in the body.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <img src="/icons/mental-health.png" alt="icon" className="w-5" />
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-1">
              <p className="mb-2 text-lg font-bold font-brooklyn">Spiritual and Mental Comfort: </p>
              <p className="text-gray-700 text-[0.9rem]">Blood donation can provide spiritual and mental comfort as it offers a profound sense of purpose, fulfillment, and a feeling of making a positive difference in the lives of others. </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <img src="/icons/exercise.png" alt="icon" className="w-5" />
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-1">
              <p className="mb-2 text-lg font-bold font-brooklyn">Enhancing Physical Health:</p>
              <p className="text-gray-700 text-[0.9rem]">Regular blood donation offers remarkable health benefits. It helps maintain the overall well-being of the donor by promoting the production of fresh, healthy blood cells. </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg className="w-6 text-gray-600" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="6,12 10,16 18,8" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-1">
              <p className="mb-2 text-lg font-bold font-brooklyn">Many more ...</p>
              <p className="text-gray-700 text-[0.9rem]" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="inset-0 object-cover object-bottom w-full rounded-[10rem] h-96 lg:absolute lg:h-full" src={WhyImg} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default WhyDonate;
