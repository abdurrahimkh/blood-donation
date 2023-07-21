import React from "react";
import StateCard from "../../../components/StateCard";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useGetDonationAllQuery } from "../../../api";
import { Spinner } from "@material-tailwind/react";
import { getBloodGroupRepresentation } from "../../../constants";
import { retry } from "@reduxjs/toolkit/dist/query";

const DonorSub = () => {
  const { data, isLoading } = useGetDonationAllQuery();

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "blood_group",
      headerName: "Group",
      width: 60,
      renderCell: (cellValues) => {
        return getBloodGroupRepresentation(cellValues.formattedValue);
      },
    },
    { field: "mobile_number", headerName: "Phone Number", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "date", headerName: "Submission Date", width: 160 },
    {
      field: "time",
      headerName: "Submission Time",
      width: 160,
      renderCell: (cellValues) => {
        return extractTime(cellValues.formattedValue);
      },
    },
  ];

  function today() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayOfWeek = dayNames[today.getDay()];
    const month = monthNames[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();
    const time = "00:00:00";
    const timeZoneOffset = "GMT+0500";
    const formattedDate = `${dayOfWeek} ${month} ${day} ${year} ${time} ${timeZoneOffset}`;
    return formattedDate;
  }

  function extractTime(dateString) {
    const dateObject = new Date(dateString);
    const hours = String(dateObject.getHours()).padStart(2, "0");
    const minutes = String(dateObject.getMinutes()).padStart(2, "0");
    const seconds = String(dateObject.getSeconds()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime;
  }

  const todayRequests = data && data?.data.filter((obj) => obj.date == today());

  console.log(data?.data);

  return (
    <div className="px-3 py-1">
      <div className="flex gap-2 ml-3">
        <StateCard title="Donations" number={data && data?.data.length}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
        </StateCard>
      </div>
      {isLoading ? (
        <div className="center h-screen w-[70vw]">
          <Spinner color="red" />
        </div>
      ) : (
        <div>
          <h1 className="ml-4 p-2 rounded-md mb-2 text-white text-xl font-medium bg-blue-400">Today Requests</h1>
          <DataGrid
            sx={{ width: "75vw", background: "white", height: "48vh", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)", marginLeft: "10px", "& .MuiDataGrid-toolbarContainer": { marginTop: "15px", marginLeft: "20px" } }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            rows={todayRequests}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowId={(row) => row._id}
            pagination
            autoPageSize
          />
          <h1 className="ml-4 mt-10 p-2 rounded-md mb-2 text-white text-xl font-medium bg-green-400">All Requests</h1>

          <DataGrid
            sx={{ width: "75vw", background: "white", height: "80vh", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)", marginLeft: "10px", "& .MuiDataGrid-toolbarContainer": { marginTop: "15px", marginLeft: "20px" } }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            rows={data?.data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowId={(row) => row._id}
            pagination
            autoPageSize
          />
        </div>
      )}
    </div>
  );
};

export default DonorSub;
