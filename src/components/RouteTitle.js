import { useRouter } from "next/router";
import { menu } from "../constants";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
const RouteTitle = (sx = []) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <Box sx={{ marginBottom: theme.spacing(3) }}>
      <Typography variant="title">{menu[router.asPath.substring(1)].label}</Typography>
    </Box>
  );
};

export default RouteTitle;
