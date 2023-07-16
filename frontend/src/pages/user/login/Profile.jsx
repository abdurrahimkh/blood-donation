import React, { useRef } from "react";

const DonorProfile = () => {
  const ImageInputRef = useRef();
  async function handleImageChange(e) {
    const formData = new FormData();
    formData.append("pic", e.target.files[0]);
  }

  const profileData = {
    name: "Abdur Rahim",
    email: "abc@gmail.com",
    mobile_number: "0315",
    address: "abc",
  };

  function handleSubmit() {}
  function handleChange() {}
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-36">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-4 ml-0 md:ml-28">
          <div className=" flex flex-col gap-10 justify-center items-center">
            <div className="relative flex flex-col w-72 mr-24 ">
              <img
                className="w-72 h-72 rounded-full object-cover border-[4px] border-secondary"
                src="https://static.vecteezy.com/system/resources/previews/001/223/998/large_2x/young-indian-boy-smiling-to-the-camera-free-photo.jpg"
                //   src={`${import.meta.env.VITE_BACKEND_IMGURL}/${user.image}`}
              />
              <button className=" btn glass absolute top-10 left-12 w-full    " onClick={() => ImageInputRef.current.click()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              </button>
              <input type="file" className="hidden" ref={ImageInputRef} accept="image/*" onChange={handleImageChange} />
            </div>
          </div>

          <div className="rounded-lg bg-white border lg:col-span-3 lg:px-12 lg:pb-5">
            <form onSubmit={handleSubmit} className="mt-6">
              <label htmlFor="name" className="block text-xs ml-2 md:ml-0 font-semibold text-gray-600 uppercase">
                Full Name
              </label>
              <input id="name" type="text" name="name" value={profileData.name} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} />

              <label htmlFor="email" className="block mt-2 ml-2 md:ml-0 text-xs font-semibold text-gray-600 uppercase">
                E-mail
              </label>
              <input id="email" type="email" name="email" value={profileData.email} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} />
              <label htmlFor="phone" className="block mt-2 ml-2 md:ml-0 text-xs font-semibold text-gray-600 uppercase">
                Phone
              </label>
              <input id="phone" type="tel" name="mobile_number" value={profileData.mobile_number} placeholder="Enter Your Phone Number" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} />
              <label htmlFor="address" className="block mt-2 ml-2 md:ml-0 text-xs font-semibold text-gray-600 uppercase">
                Address
              </label>
              <input id="address" type="text" name="address" value={profileData.address} placeholder="Enter Your Address" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} />
              <label htmlFor="password" className="block mt-2 ml-2 md:ml-0 text-xs font-semibold text-gray-600 uppercase">
                Password
              </label>
              <input id="password" type="password" name="password" value={profileData.password} placeholder="Enter New Password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} />
              <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-secondary  disabled:bg-gray-200 focus:outline-none hover:shadow-lg">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorProfile;
