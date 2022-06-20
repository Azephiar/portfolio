import { Box, Typography } from "@mui/material";
import ListItemButtonToggle from "../src/components/ListItemButtonToggle";
import { useTheme } from "@emotion/react";
import RouteTitle from "../src/components/RouteTitle";

const Service = () => {
  const theme = useTheme();

  return (
    <Box sx={{ marginBottom: theme.spacing(6) }}>
      <RouteTitle />
      <ListItemButtonToggle title="FRONTEND">
        <Typography>
          Responsive websites that interfaces with REST APIs, GraphQL, EVM blockchains or substrate blockchains. I can create the UI/UX using Material
          UI components, a CSS framework like tailwindCSS or from scratch.
        </Typography>
      </ListItemButtonToggle>

      <ListItemButtonToggle title="BACKEND">
        <Typography>REST API endpoints or a graphQL endpoint using MERN/MKRN (MongoDB, ExpressJS/KoaJS, React, Node) as a stack.</Typography>
      </ListItemButtonToggle>

      <ListItemButtonToggle title="SMART CONTRACTS">
        <Typography>For EVM-based blockchains using solidity or substrate-based blockchains using !Ink.</Typography>
      </ListItemButtonToggle>

      <ListItemButtonToggle title="MOBILE">
        <Typography>On iOS using Swift.</Typography>
      </ListItemButtonToggle>
    </Box>
  );
};

export default Service;
