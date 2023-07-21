import React from "react";
import StateCard from "../../../components/StateCard";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useGetRequestsAllQuery } from "../../../api";
import { Spinner } from "@material-tailwind/react";
import { getBloodGroupRepresentation } from "../../../constants";

const BloodRequests = () => {
  const { data, isLoading } = useGetRequestsAllQuery();

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "blood_group",
      headerName: "Blood Group",
      width: 150,
      renderCell: (cellValues) => {
        return getBloodGroupRepresentation(cellValues.formattedValue);
      },
    },
    { field: "mobile_number", headerName: "Phone Number", width: 150 },
    { field: "city", headerName: "City", width: 150 },
    { field: "createdAt", headerName: "Request Date", width: 160 },
  ];

  const today = new Date().toISOString().slice(0, 10);
  const todayRequests = data && data?.data.filter((obj) => obj.createdAt.slice(0, 10) === today);

  return (
    <div className="px-3 py-1">
      <div className="flex gap-2 ml-3">
        <StateCard title="Requests" number={data && data?.data.length}>
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

export default BloodRequests;
