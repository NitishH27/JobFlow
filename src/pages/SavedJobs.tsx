import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
  type ColDef,
  type ICellRendererParams,
} from "ag-grid-community";
import { SearchOutlined } from "@mui/icons-material";
import { Box, Chip, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import Layout from "../components/Layout";

ModuleRegistry.registerModules([AllCommunityModule]);

type WorkMode = "Remote" | "On-site" | "Hybrid";

interface SavedJob {
  jobName: string;
  companyName: string;
  description: string;
  experience: string;
  salary: string;
  location: string;
  workMode: WorkMode;
}

const savedJobs: SavedJob[] = [
  {
    jobName: "Senior Frontend Developer",
    companyName: "Acme Technologies",
    description: "Build accessible, performant web experiences with React and TypeScript.",
    experience: "3–5 years",
    salary: "₹14–18 LPA",
    location: "Bengaluru, India",
    workMode: "Hybrid",
  },
  {
    jobName: "Product Designer",
    companyName: "Northstar Labs",
    description: "Own end-to-end product design for a fast-growing B2B platform.",
    experience: "2–4 years",
    salary: "₹12–16 LPA",
    location: "Mumbai, India",
    workMode: "On-site",
  },
  {
    jobName: "React Developer",
    companyName: "Pixel Works",
    description: "Collaborate with product and engineering teams to ship polished user interfaces.",
    experience: "1–3 years",
    salary: "₹8–12 LPA",
    location: "India",
    workMode: "Remote",
  },
  {
    jobName: "Full Stack Engineer",
    companyName: "Orbit Systems",
    description: "Develop scalable web services and customer-facing applications using modern JavaScript.",
    experience: "3–6 years",
    salary: "₹16–22 LPA",
    location: "Pune, India",
    workMode: "Hybrid",
  },
];

const workModeStyles: Record<WorkMode, { backgroundColor: string; color: string }> = {
  Remote: { backgroundColor: "#dcfce7", color: "#15803d" },
  "On-site": { backgroundColor: "#e2e8f0", color: "#475569" },
  Hybrid: { backgroundColor: "#e0f2fe", color: "#0369a1" },
};

const WorkModeCell = ({ value }: ICellRendererParams<SavedJob, WorkMode>) => {
  const workMode = value ?? "On-site";

  return <Chip label={workMode} size="small" sx={{ fontWeight: 600, ...workModeStyles[workMode] }} />;
};

const SavedJobs = () => {
  const [searchText, setSearchText] = useState("");
  const columnDefs = useMemo<ColDef<SavedJob>[]>(
    () => [
      { field: "jobName", headerName: "Job Name", flex: 1.3, minWidth: 190 },
      { field: "companyName", headerName: "Company", flex: 1.1, minWidth: 160 },
      { field: "description", headerName: "Description", flex: 2, minWidth: 260, tooltipField: "description" },
      { field: "experience", headerName: "Experience", flex: 1, minWidth: 135 },
      { field: "salary", headerName: "Salary Offered", flex: 1, minWidth: 145 },
      { field: "location", headerName: "Company Location", flex: 1.2, minWidth: 180 },
      { field: "workMode", headerName: "Work Mode", flex: 1, minWidth: 140, cellRenderer: WorkModeCell },
    ],
    [],
  );

  return (
    <Layout title="Saved Jobs" description="Keep opportunities you want to revisit in one place.">
      <Box sx={{ width: "100%", p: { xs: 2, sm: 4 } }}>
        <TextField
          placeholder="Search saved jobs"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          sx={{ width: { xs: "100%", sm: 340 }, mb: 3 }}
          slotProps={{ input: { startAdornment: <InputAdornment position="start"><SearchOutlined /></InputAdornment> } }}
        />

        <Paper sx={{ overflow: "hidden", p: 1 }}>
          <Box sx={{ height: 460, width: "100%" }}>
            <AgGridReact<SavedJob>
              theme={themeQuartz}
              rowData={savedJobs}
              suppressDragLeaveHidesColumns
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
          Saved jobs use placeholder data until they are connected to your account.
        </Typography>
      </Box>
    </Layout>
  );
};

export default SavedJobs;
