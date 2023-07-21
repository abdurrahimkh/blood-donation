import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateProfileMutation, useUpdatePictureMutation } from "../../../api";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { setActiveUser } from "../../../redux/reducers/auth";
import { Spinner } from "@material-tailwind/react";

const DonorProfile = () => {
  const user = useSelector((state) => state.authReducer.activeUser);
  const [profileData, setProfileData] = useState({
    name: user?.name,
    username: user?.username,
    blood_group: user?.blood_group,
    gender: user?.gender,
    age: user?.age,
    email: user?.email,
    mobile_number: user?.mobile_number,
    whatsapp_number: user?.whatsapp_number,
    address: user?.address,
    password: "",
  });

  const [update, response] = useUpdateProfileMutation();
  const [updatePicture, resp] = useUpdatePictureMutation();

  const ImageInputRef = useRef();
  async function handleImageChange(e) {
    const formData = new FormData();
    formData.append("pic", e.target.files[0]);
  }

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };
  console.log(profileData);

  const handleSubmit = (e) => {
    e.preventDefault();
    update({
      data: profileData,
      id: user?._id,
    });
  };

  const updateInState = () => {
    const userCopy = { ...user };
    for (let key in profileData) {
      if (profileData[key] !== undefined) {
        userCopy[key] = profileData[key];
      }
    }
    return userCopy;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (response?.data) {
      toast.success(response?.data?.message);
      const updatedValue = updateInState();
      dispatch(setActiveUser(updatedValue));
    }
  }, [response]);

  useEffect(() => {
    if (resp?.data) {
      dispatch(setActiveUser({ ...user, image: resp.data.upload_picture }));
    }
  }, [resp]);

  async function handleImageChange(e) {
    const formData = new FormData();
    formData.append("pic", e.target.files[0]);
    updatePicture(formData).then((res) => update({ id: user?._id, data: { image: res.data.upload_picture } }));
  }
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-40">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-4 pl-28">
          <div className=" flex flex-col gap-10 justify-center items-center">
            <div className="relative flex flex-col w-72 mr-24 ">
              <img className="w-48 h-48 rounded-full object-cover border-[4px] border-secondary" src={`${import.meta.env.VITE_BACKEND_IMGURL}/${user.image}`} />
              <button className="absolute left-10  px-2 py-1 rounded-lg bottom-0 text-white border bg-primary " onClick={() => ImageInputRef.current.click()}>
                <div className="center gap-3">
                  <p>Change</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </div>
              </button>
              <input type="file" className="hidden" ref={ImageInputRef} accept="image/*" onChange={handleImageChange} />
            </div>
          </div>
          <div className="rounded-lg bg-white border lg:col-span-3 lg:px-6 lg:pb-5">
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="flex gap-5">
                <div className="w-6/12">
                  <label htmlFor="name" className="block text-xs ml-2 md:ml-0 font-semibold text-gray-600 uppercase">
                    Full Name
                  </label>
                  <input id="name" type="text" name="name" value={profileData.name} className="block w-full p-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} />
                </div>
                <div className="w-6/12">
                  <label htmlFor="username" className="block text-xs ml-2 md:ml-0 font-semibold text-gray-600 uppercase">
                    Username
                  </label>
                  <input id="username" type="text" name="username" value={profileData.username} className="block w-full p-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-6/12">
                  <label htmlFor="age" className="mt-2 block text-xs ml-2 md:ml-0 font-semibold text-gray-600 uppercase">
                    Age
                  </label>
                  <input id="age" type="number" name="age" value={profileData.age} className="block w-full p-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} />
                </div>
                <div className="w-6/12">
                  <label htmlFor="blood_group" className="mt-2 block text-xs ml-2 md:ml-0 font-semibold text-gray-600 uppercase">
                    Blood Group
                  </label>
                  <select defaultValue={profileData.blood_group} name="blood_group" className="block w-full p-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange}>
                    <option value="a-p">A+</option>
                    <option value="a-n">A-</option>
                    <option value="b-p">B+</option>
                    <option value="b-n">B-</option>
                    <option value="ab-p">AB+</option>
                    <option value="ab-n">AB-</option>
                    <option value="o-p">O+</option>
                    <option value="o-n">O-</option>
                  </select>
                </div>
              </div>
              <div className="w-12/12">
                <label htmlFor="email" className="block mt-2 ml-2 md:ml-0 text-xs font-semibold text-gray-600 uppercase">
                  E-mail
                </label>
                <input id="email" type="email" name="email" value={profileData.email} className="block w-full p-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} />
              </div>
              <label htmlFor="phone" className="block mt-2 ml-2 md:ml-0 text-xs font-semibold text-gray-600 uppercase">
                Phone <span className="font-normal text-[0.60rem]">(without 0)</span>
              </label>
              <input id="phone" type="tel" name="mobile_number" value={profileData.mobile_number} placeholder="Enter Your Phone Number" className="block w-full p-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} />
              <label htmlFor="whatsapp" className="block mt-2 ml-2 md:ml-0 text-xs font-semibold text-gray-600 uppercase">
                Whatsapp <span className="font-normal text-[0.60rem]">(without 0)</span>
              </label>
              <input
                id="whatsapp"
                type="tel"
                name="whatsapp_number"
                value={profileData.whatsapp_number}
                placeholder="Enter Your Whatsapp Number"
                className="block w-full p-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                onChange={handleChange}
              />
              <label htmlFor="address" className="block mt-2 ml-2 md:ml-0 text-xs font-semibold text-gray-600 uppercase">
                Address
              </label>
              <input id="address" type="text" name="address" value={profileData.address} placeholder="Enter Your Address" className="block w-full p-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} />
              <label htmlFor="password" className="block mt-2 ml-2 md:ml-0 text-xs font-semibold text-gray-600 uppercase">
                Password
              </label>
              <input id="password" type="password" name="password" value={profileData.password} placeholder="Enter New Password" className="block w-full p-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} />
              {response?.isLoading ? (
                <div className="center w-full py-2 mt-6 font-medium tracking-widest text-white uppercase rounded-md bg-secondary  disabled:bg-gray-200 focus:outline-none hover:shadow-lg">
                  <Spinner color="red" />
                </div>
              ) : (
                <button type="submit" className="w-full py-2 mt-6 font-medium tracking-widest text-white uppercase rounded-md bg-secondary  disabled:bg-gray-200 focus:outline-none hover:shadow-lg">
                  Save changes
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorProfile;
