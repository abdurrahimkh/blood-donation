import React from "react";
import { useSelector } from "react-redux";
import { useGetDonationByUserQuery } from "../api/index";
import { getBloodGroupRepresentation } from "../constants";
import { extractTime } from "../utils";
import { Spinner } from "@material-tailwind/react";

const DonationHistory = () => {
  const user = useSelector((state) => state.authReducer.activeUser);
  const { data, response } = useGetDonationByUserQuery(user._id);

  return (
    <div className="mx-10 my-5 h-[50vh] flex flex-col md:flex-row gap-3  bg-white border rounded-lg">
      <div className="w-12/12 md:w-3/12 text-lg font-medium px-3 border-r text-center">
        <p className="font-brooklyn font-black mb-3 mt-2 bg-blue-100 rounded-lg py-1">Donation History</p>
        <div className="overflow-y-scroll space-y-4 h-[20vh] md:h-[40vh] ">
          {user.donation_history.length < 1 ? (
            <div className="text-center mt-20">No Donation</div>
          ) : (
            user?.donation_history.map((record) => {
              const [datePart, timePart] = record.split("T");

              return (
                <div className="center gap-4" key={record}>
                  <img src="/icons/history.png" alt="icon" className="w-6" />
                  <p className="text-[0.9rem]">{datePart}</p>
                  <p className="text-[0.9rem]">{timePart.slice(0, -8)}</p>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="w-12/12  md:w-9/12 text-lg font-medium px-3 text-center">
        <p className="font-brooklyn font-black mb-5 mt-2 bg-blue-100 rounded-lg py-1">Donation Submissions</p>
        {response?.isLoading ? (
          <div className="center">
            <Spinner color="red" />
          </div>
        ) : (
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Group</th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone Number</th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Submission Date</th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Submission Time</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((record) => (
                    <tr key={record._id}>
                      <td class="py-3 border-b border-gray-200 bg-white text-sm">{record.name}</td>
                      <td class="py-3 border-b border-gray-200 bg-white text-sm">{getBloodGroupRepresentation(record.blood_group)}</td>
                      <td class="py-3 border-b border-gray-200 bg-white text-sm">{record.mobile_number}</td>
                      <td class="py-3 border-b border-gray-200 bg-white text-sm">{record.date}</td>
                      <td class="py-3 border-b border-gray-200 bg-white text-sm">{extractTime(record.time)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationHistory;
