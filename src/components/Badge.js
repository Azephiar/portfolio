import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
const Badge = ({ text }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "background.secondary",
        padding: "10px 15px 10px 15px",
        margin: theme.spacing(1),
        borderRadius: 1,
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "0.8rem",
        }}
        align="center"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Badge;
