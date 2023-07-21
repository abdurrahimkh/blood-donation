import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useGetDonorsAllQuery } from "../../../api";
import { getBloodGroupRepresentation } from "../../../constants";
import StateCard from "../../../components/StateCard";
import { Spinner } from "@material-tailwind/react";

export default function BloodGroups() {
  const [value, setValue] = React.useState(0);
  const { data, isLoading } = useGetDonorsAllQuery();

  function groupByBloodGroup(data) {
    const groupedData = {};
    data.forEach((item) => {
      const bloodGroup = item.blood_group;
      if (groupedData[bloodGroup]) {
        groupedData[bloodGroup].push(item);
      } else {
        groupedData[bloodGroup] = [item];
      }
    });
    return groupedData;
  }

  const groupedByBloodGroup = data && groupByBloodGroup(data?.data);

  const BP = (data?.data && groupedByBloodGroup["b-p"]) || [];
  const BN = (data?.data && groupedByBloodGroup["b-n"]) || [];
  const AN = (data?.data && groupedByBloodGroup["a-n"]) || [];
  const AP = (data?.data && groupedByBloodGroup["a-p"]) || [];
  const ON = (data?.data && groupedByBloodGroup["o-n"]) || [];
  const OP = (data?.data && groupedByBloodGroup["o-p"]) || [];
  const ABP = (data?.data && groupedByBloodGroup["ab-p"]) || [];
  const ABN = (data?.data && groupedByBloodGroup["ab-n"]) || [];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    { field: "createdAt", headerName: "Join Date", width: 150 },
  ];

  //DataGrid Configuration
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  //DataGrid Configuration
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function getBloodGroupCount(data) {
    const bloodGroupCount = {};
    data.forEach((item) => {
      const bloodGroup = item.blood_group;
      if (!bloodGroupCount[bloodGroup]) {
        bloodGroupCount[bloodGroup] = 1;
      } else {
        bloodGroupCount[bloodGroup]++;
      }
    });
    return bloodGroupCount;
  }

  const bloodGroupCount = data?.data && getBloodGroupCount(data?.data);

  const bloodGroupCountArray =
    data?.data &&
    Object.entries(bloodGroupCount).map(([bloodGroup, count]) => ({
      bloodGroup,
      count,
    }));

  return (
    <div style={{ height: 400, width: "100%", marginTop: 20 }}>
      <div className="flex gap-2 ml-3">
        {bloodGroupCountArray?.map((group) => (
          <StateCard title={getBloodGroupRepresentation(group.bloodGroup)} w="7.3rem" number={group.count}>
            <img src="/icons/about-blood.png" alt="icon" className="w-8" />
          </StateCard>
        ))}
      </div>

      <Box sx={{ borderBottom: 1, borderColor: "divider", marginLeft: "20px" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="A+" {...a11yProps(0)} />
          <Tab label="A-" {...a11yProps(1)} />
          <Tab label="B+" {...a11yProps(2)} />
          <Tab label="B-" {...a11yProps(3)} />
          <Tab label="AB+" {...a11yProps(4)} />
          <Tab label="AB-" {...a11yProps(5)} />
          <Tab label="O+" {...a11yProps(6)} />
          <Tab label="O-" {...a11yProps(7)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ height: "53vh" }}>
          {isLoading ? (
            <div className="center">
              <Spinner color="red" />
            </div>
          ) : (
            <DataGrid
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
              getRowId={(row) => row._id}
              rows={AP}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          )}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ height: "53vh" }}>
          {isLoading ? (
            <div className="center">
              <Spinner color="red" />
            </div>
          ) : (
            <DataGrid
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
              getRowId={(row) => row._id}
              rows={AN}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          )}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ height: "53vh" }}>
          {isLoading ? (
            <div className="center">
              <Spinner color="red" />
            </div>
          ) : (
            <DataGrid
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
              getRowId={(row) => row._id}
              rows={BP}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          )}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box sx={{ height: "53vh" }}>
          {isLoading ? (
            <div className="center">
              <Spinner color="red" />
            </div>
          ) : (
            <DataGrid
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
              getRowId={(row) => row._id}
              rows={BN}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          )}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box sx={{ height: "53vh" }}>
          {isLoading ? (
            <div className="center">
              <Spinner color="red" />
            </div>
          ) : (
            <DataGrid
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
              getRowId={(row) => row._id}
              rows={ABP}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          )}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box sx={{ height: "53vh" }}>
          {isLoading ? (
            <div className="center">
              <Spinner color="red" />
            </div>
          ) : (
            <DataGrid
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
              getRowId={(row) => row._id}
              rows={ABN}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          )}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Box sx={{ height: "53vh" }}>
          {isLoading ? (
            <div className="center">
              <Spinner color="red" />
            </div>
          ) : (
            <DataGrid
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
              getRowId={(row) => row._id}
              rows={OP}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          )}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Box sx={{ height: "53vh" }}>
          {isLoading ? (
            <div className="center">
              <Spinner color="red" />
            </div>
          ) : (
            <DataGrid
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
              getRowId={(row) => row._id}
              rows={ON}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          )}
        </Box>
      </TabPanel>
    </div>
  );
}
