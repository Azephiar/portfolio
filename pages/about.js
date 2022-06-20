import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ListItemButtonToggle from "../src/components/ListItemButtonToggle";
import Alienation from "../src/components/about/Alienation";
import Melodeal from "../src/components/about/Melodeal";
import { useTheme } from "@emotion/react";
export default function About() {
  const theme = useTheme();
  return (
    <Container sx={{ marginBottom: theme.spacing(6) }}>
      <Typography variant="title">ABOUT ME</Typography>
      <Typography sx={{ marginBottom: theme.spacing(2) }}>Hi I'm Ezekiel, in art "Azephiar".</Typography>
      <Typography>
        I'm a self-thought full stack web3 developer who likes to work with React and EVMs. Currently pivoting towards Substrate and !Ink smart
        contracts.
      </Typography>
      <Typography sx={{ marginTop: theme.spacing(2) }}>Before moving to web3 I worked on 2 small startups: Melodeal and Alienation.</Typography>
      <ListItemButtonToggle title="ALIENATION // 2019-2022">
        <Alienation />
      </ListItemButtonToggle>
      <ListItemButtonToggle title="MELODEAL // 2015-2018">
        <Melodeal />
      </ListItemButtonToggle>
    </Container>
  );
}
