import { Box } from "@mui/material";
import Awaked from "../src/components/portfolio/Awaked";
import TheEthGame from "../src/components/portfolio/TheEthGame";
import CryptoLeaders from "../src/components/portfolio/CryptoLeaders";
import ListItemButtonToggle from "../src/components/ListItemButtonToggle";
import { useTheme } from "@emotion/react";
import RouteTitle from "../src/components/RouteTitle";
const projects = [
  {
    name: "AWAKED",
    content: <Awaked />,
  },
  {
    name: "THE ETH GAME",
    content: <TheEthGame />,
  },
  {
    name: "CRYPTOLEADERS",
    content: <CryptoLeaders />,
  },
];

export default function Portfolio() {
  const theme = useTheme();

  return (
    <Box sx={{ marginBottom: theme.spacing(6) }}>
      <RouteTitle />
      {projects.map((project, index) => {
        return (
          <ListItemButtonToggle title={project.name} key={"project-" + index}>
            {project.content}
          </ListItemButtonToggle>
        );
      })}
    </Box>
  );
}
