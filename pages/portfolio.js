import { Container, Typography, Box } from "@mui/material";
import Awaked from "../src/components/portfolio/awaked";
import TheEthGame from "../src/components/portfolio/TheEthGame";
import CryptoLeaders from "../src/components/portfolio/CryptoLeaders";
import ListItemButtonToggle from "../src/components/ListItemButtonToggle";
import { useTheme } from "@emotion/react";
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
    <Container sx={{ marginBottom: theme.spacing(6) }}>
      <Typography variant="title">PORTFOLIO</Typography>
      {projects.map((project, index) => {
        return (
          <ListItemButtonToggle title={project.name} key={"project-" + index}>
            {project.content}
          </ListItemButtonToggle>
        );
      })}
    </Container>
  );
}
