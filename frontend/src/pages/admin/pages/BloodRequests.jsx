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
          <img src="/icons/donation-request.png" alt="icon" className="w-9 h-9 object-cover" />
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
