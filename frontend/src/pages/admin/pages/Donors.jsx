import React from "react";
import StateCard from "../../../components/StateCard";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useGetDonorsAllQuery, useUpdateProfileMutation } from "../../../api";
import { Spinner } from "@material-tailwind/react";
import { getBloodGroupRepresentation } from "../../../constants";
import { Switch } from "@mui/material";

const Donors = () => {
  const { data, isLoading } = useGetDonorsAllQuery();
  const [update, response] = useUpdateProfileMutation();

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "blood_group",
      headerName: "Group",
      width: 50,
      renderCell: (cellValues) => {
        return getBloodGroupRepresentation(cellValues.formattedValue);
      },
    },
    { field: "mobile_number", headerName: "Phone Number", width: 150 },
    { field: "city", headerName: "City", width: 150 },
    { field: "createdAt", headerName: "Join Date", width: 160 },
    {
      field: "is_active",
      // headerName: "Active Status",
      headerName: `${response?.isLoading ? "Loading" : "Active Status"}`,
      width: 150,
      renderCell: (cellValues) => {
        return (
          <Switch
            checked={cellValues.row.is_active}
            onChange={(event) => {
              handleActive(event, cellValues.row._id);
            }}
          />
        );
      },
    },
  ];
  function handleActive(e, id) {
    update({
      data: { is_active: e.target.checked },
      id,
    });
  }
  return (
    <div className="px-3 py-1">
      <div className="flex gap-2 ml-3">
        <StateCard title="Donors" number={data && data?.data.length}>
          <img src="/icons/donors.png" alt="icon" className="w-9 h-9 object-cover" />
        </StateCard>
        <StateCard title="Donations" number={data && data?.donations_count}>
          <img src="/icons/donations.png" alt="icon" className="w-9 h-9 object-cover" />
        </StateCard>
      </div>
      {isLoading ? (
        <div className="center h-screen w-[70vw]">
          <Spinner color="red" />
        </div>
      ) : (
        <div>
          <DataGrid
            sx={{ width: "75vw", background: "white", height: "80vh", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)", marginLeft: "10px", "& .MuiDataGrid-toolbarContainer": { marginTop: "15px", marginLeft: "20px" } }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            rows={data?.data || []}
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

export default Donors;
