import { Container, Typography } from "@mui/material";
import ListItemButtonToggle from "../src/components/ListItemButtonToggle";
import { useTheme } from "@emotion/react";
const Service = () => {
  const theme = useTheme();
  return (
    <Container sx={{ marginBottom: theme.spacing(6) }}>
      <Typography variant="title">WHAT CAN I DO</Typography>

      <ListItemButtonToggle title="FRONTEND">
        Responsive websites that interfaces with REST APIs, GraphQL, EVM blockchains or substrate blockchains. I can create the UI/UX using Material
        UI components, a CSS framework like tailwindCSS or from scratch.
      </ListItemButtonToggle>

      <ListItemButtonToggle title="BACKEND">
        REST API endpoints or a graphQL endpoint using MERN/MKRN (MongoDB, ExpressJS/KoaJS, React, Node) as a stack.
      </ListItemButtonToggle>

      <ListItemButtonToggle title="SMART CONTRACTS">
        For EVM-based blockchains using solidity or substrate-based blockchains using !Ink.
      </ListItemButtonToggle>

      <ListItemButtonToggle title="MOBILE">On iOS using Swift.</ListItemButtonToggle>
    </Container>
  );
};

export default Service;
