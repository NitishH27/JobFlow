import { Pie, PieChart } from "recharts";

const GapPieChart = () => {
  const data = [
    { name: "Shortlisted", value: 7 },
    { name: "Rejected", value: 3 },
    { name: "Pending", value: 5 },
    { name: "Approved", value: 10 },
  ];
  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "500px",
        maxHeight: "80vh",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        cornerRadius="50%"
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      />
    </PieChart>
  );
};

export default GapPieChart;
