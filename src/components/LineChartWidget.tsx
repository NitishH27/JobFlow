import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Paper, Typography } from "@mui/material";

const LineChartWidget = () => {
  const data = [
    { month: "Jan", applications: 5, interviews: 1 },
    { month: "Feb", applications: 8, interviews: 2 },
    { month: "Mar", applications: 12, interviews: 10 },
    { month: "Apr", applications: 15, interviews: 8 },
    { month: "May", applications: 18, interviews: 15 },
    { month: "Jun", applications: 25, interviews: 30 },
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        mt: 3,
        borderRadius: 3,
        width: "100%",
        height: 230,
      }}
    >
      <Typography
        variant="h6"
        fontWeight={600}
        color="primary.main"
        sx={{ mb: 2,ml:2 }}
      >
        Application Trends
      </Typography>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="applications"
            stroke="#a7beb3"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />

          <Line
            type="monotone"
            dataKey="interviews"
            stroke="#9d99e9"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default LineChartWidget;