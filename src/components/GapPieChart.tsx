import { Pie, PieChart, Tooltip, Legend } from "recharts";
import { Paper, Typography, Box } from "@mui/material";

const GapPieChart = () => {
  const data = [
    { name: "Approved", value: 10, fill: "#0F9D58" },
    { name: "Shortlisted", value: 7, fill: "#9d99e9" },
    { name: "Pending", value: 5, fill: "#F4B400" },
    { name: "Rejected", value: 3, fill: "#DB4437" },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload?.length) return null;

    const item = payload[0];

    return (
      <Paper
        elevation={2}
        sx={{
          px: 1.5,
          py: 1,
          borderRadius: 2,
        }}
      >
        <Typography variant="body2" fontWeight={600}>
          {item.name}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {item.value} applications
        </Typography>
      </Paper>
    );
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: 500,
        height: 230,
        borderRadius: 3,
        p: 2,
      }}
    >
      <Typography variant="h6" color="text.primary" sx={{ ml: 4, mb: 1 }}>
        Application Status
      </Typography>

      <Box sx={{ position: "relative" }}>
        <PieChart width={450} height={200}>
          <Pie
            data={data}
            cx={130}
            cy={70}
            innerRadius={55}
            outerRadius={75}
            paddingAngle={4}
            dataKey="value"
          ></Pie>

          <Tooltip content={CustomTooltip} />

          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            formatter={(value) => {
              const item = data.find((d) => d.name === value);
              return (
                <span
                  style={{
                    color: "#152039",
                    fontSize: "14px",
                  }}
                >
                  {value} - {item?.value}
                </span>
              );
            }}
          />
        </PieChart>

        <Box
          sx={{
            position: "absolute",
            left: 122,
            top: 40,
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Total
          </Typography>
          <Typography variant="h5" fontWeight={700} color="primary.main">
            {total}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default GapPieChart;
