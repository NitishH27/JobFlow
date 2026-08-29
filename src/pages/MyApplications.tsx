
import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
  type ColDef,
  type ICellRendererParams,
} from "ag-grid-community";
import { AddOutlined, SearchOutlined } from "@mui/icons-material";
import { Box, Button, Chip, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import Layout from "../components/Layout";

ModuleRegistry.registerModules([AllCommunityModule]);

type ApplicationStatus = "In Progress" | "Rejected" | "Completed" | "Closed";

interface JobApplication {
  jobTitle: string;
  companyName: string;
  appliedDate: string;
  status: ApplicationStatus;
  lastDateToVerify: string;
}

const applications: JobApplication[] = [
  { jobTitle: "Frontend Developer", companyName: "Acme Technologies", appliedDate: "20 Aug 2026", status: "In Progress", lastDateToVerify: "04 Sep 2026" },
  { jobTitle: "Product Designer", companyName: "Northstar Labs", appliedDate: "17 Aug 2026", status: "Completed", lastDateToVerify: "31 Aug 2026" },
  { jobTitle: "Software Engineer", companyName: "Orbit Systems", appliedDate: "12 Aug 2026", status: "Rejected", lastDateToVerify: "26 Aug 2026" },
  { jobTitle: "React Developer", companyName: "BrightPath", appliedDate: "08 Aug 2026", status: "Closed", lastDateToVerify: "22 Aug 2026" },
  { jobTitle: "UI Engineer", companyName: "Pixel Works", appliedDate: "04 Aug 2026", status: "In Progress", lastDateToVerify: "01 Sep 2026" },
];

const statusChipStyles: Record<ApplicationStatus, { backgroundColor: string; color: string }> = {
  "In Progress": { backgroundColor: "#fef3c7", color: "#92400e" },
  Rejected: { backgroundColor: "#fee2e2", color: "#b91c1c" },
  Completed: { backgroundColor: "#dcfce7", color: "#15803d" },
  Closed: { backgroundColor: "#e2e8f0", color: "#475569" },
};

const StatusCell = ({ value }: ICellRendererParams<JobApplication, ApplicationStatus>) => {
  const status = value ?? "Closed";

  return <Chip label={status} size="small" sx={{ fontWeight: 600, ...statusChipStyles[status] }} />;
};

const MyApplications = () => {
  const [searchText, setSearchText] = useState("");
  const columnDefs = useMemo<ColDef<JobApplication>[]>(
    () => [
      { field: "jobTitle", headerName: "Job Title", flex: 1.3, minWidth: 180 },
      { field: "companyName", headerName: "Company Name", flex: 1.2, minWidth: 170 },
      { field: "appliedDate", headerName: "Applied Date", flex: 1, minWidth: 145 },
      { field: "status", headerName: "Status", flex: 1, minWidth: 150, cellRenderer: StatusCell },
      { field: "lastDateToVerify", headerName: "Last Day to Verify", flex: 1.15, minWidth: 170 },
    ],
    [],
  );

  return (
    <Layout title="My Applications" description="Track every job application in one place.">
      <Box sx={{ width: "100%", p: { xs: 2, sm: 4 } }}>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "space-between", flexWrap: "wrap", mb: 3 }}>
          <TextField
            placeholder="Search applications"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            sx={{ width: { xs: "100%", sm: 340 } }}
            slotProps={{ input: { startAdornment: <InputAdornment position="start"><SearchOutlined /></InputAdornment> } }}
          />
          <Button variant="contained" startIcon={<AddOutlined />}>New Application</Button>
        </Box>

        <Paper sx={{ overflow: "hidden", p: 1 }}>
          <Box sx={{ height: 460, width: "100%" }}>
            <AgGridReact<JobApplication>
              theme={themeQuartz}
              suppressDragLeaveHidesColumns
              rowData={applications}
              columnDefs={columnDefs}
              quickFilterText={searchText}
              pagination
              paginationPageSize={10}
              paginationPageSizeSelector={[10, 25, 50]}
              defaultColDef={{ sortable: true, filter: true, resizable: true }}
              animateRows
            />
          </Box>
        </Paper>
        <Typography variant="body2" sx={{ mt: 1.5 }}>
          Last day to verify helps you follow up before an application closes.
        </Typography>
      </Box>
    </Layout>
  );
};

export default MyApplications;
