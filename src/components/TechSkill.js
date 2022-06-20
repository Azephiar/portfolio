import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
const TechSkill = ({ value, children }) => {
  let color = value <= 33 ? "beginner" : value <= 66 ? "intermediate" : "expert";
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography>{children}</Typography>
      <LinearProgress
        style={{
          width: "30%",
        }}
        color={color}
        variant="determinate"
        value={value}
      />
    </Box>
  );
};

export default TechSkill;
