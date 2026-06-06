import { Avatar, Grid, Paper, Typography } from "@mui/material";

interface DashboardWidgetProps {
  text?: string;
  icon?: React.ReactNode;
  count?: number;
}

const DahsboardWidget = ({ text, icon, count }: DashboardWidgetProps) => {
  return (
    <Grid container spacing={2}>
      <Grid >
      <Paper
  elevation={3}
  sx={{
    p: 2,
    height: "100px",
    width: "250px",
    borderRadius: "20px",
  }}
>
  <Grid
    container
    alignItems="center"
    wrap="nowrap"
    sx={{ height: "100%" }}
  >
    <Avatar
      sx={{
        bgcolor: "primary.main",
        width: 36,
        height: 36,
      }}
    >
      {icon}
    </Avatar>


    <Grid container direction="column"sx={{ mt: 1 }}>    
    <Typography
      variant="subtitle1"
      color="text.secondary"
      sx={{ ml: 2 }}
    >
      {count}
    </Typography>

    <Typography
      variant="subtitle1"
      color="text.secondary"
      sx={{ ml: 2 }}
    >
      {text}
    </Typography>
    </Grid>
  </Grid>
</Paper>
      </Grid>
    </Grid>
  );
};

export default DahsboardWidget;
