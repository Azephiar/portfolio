import { Typography, Box } from "@mui/material";
import ListItemButtonToggle from "../src/components/ListItemButtonToggle";
import Alienation from "../src/components/about/Alienation";
import Melodeal from "../src/components/about/Melodeal";
import { useTheme } from "@emotion/react";
import RouteTitle from "../src/components/RouteTitle";
export default function About() {
  const theme = useTheme();

  return (
    <Box sx={{ marginBottom: theme.spacing(6) }}>
      <RouteTitle />
      <Typography>
        Hi I'm Ezekiel, also known as Azephiar. I'm a self-thought full stack web3 developer who likes to work with React and EVMs. Currently pivoting
        towards Substrate and !Ink smart contracts.
      </Typography>
      <Typography sx={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}>
        Before moving to web3 I worked on 2 small startups: Melodeal and Alienation.
      </Typography>
      <ListItemButtonToggle title="ALIENATION // 2019-2022">
        <Alienation />
      </ListItemButtonToggle>
      <ListItemButtonToggle title="MELODEAL // 2015-2018">
        <Melodeal />
      </ListItemButtonToggle>
    </Box>
  );
}
