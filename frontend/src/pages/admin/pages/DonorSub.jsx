import React from "react";
import StateCard from "../../../components/StateCard";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useGetDonationAllQuery } from "../../../api";
import { Spinner } from "@material-tailwind/react";
import { getBloodGroupRepresentation } from "../../../constants";
import { retry } from "@reduxjs/toolkit/dist/query";
import { extractTime } from "../../../utils";

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

  const todayRequests = data && data?.data.filter((obj) => obj.date == today());

  return (
    <div className="px-3 py-1">
      <div className="flex gap-2 ml-3">
        <StateCard title="Donations" number={data && data?.data.length}>
          <img src="/icons/donor-submission.png" alt="icon" className="w-9 h-9 object-cover" />
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
