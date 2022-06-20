import { Box } from "@mui/material";
import ListItemButtonToggle from "../src/components/ListItemButtonToggle";
import TechSkill from "../src/components/TechSkill";
import { useTheme } from "@emotion/react";
import RouteTitle from "../src/components/RouteTitle";
export default function About() {
  const theme = useTheme();
  return (
    <Box sx={{ marginBottom: theme.spacing(6) }}>
      <RouteTitle />
      <ListItemButtonToggle title="FRAMEWORKS">
        <TechSkill value={93}>React</TechSkill>
        <TechSkill value={82}>Material UI</TechSkill>
        <TechSkill value={73}>KoaJS</TechSkill>
        <TechSkill value={67}>ExpressJS</TechSkill>
        <TechSkill value={40}>TailwindCSS</TechSkill>
        <TechSkill value={20}>Substrate</TechSkill>
      </ListItemButtonToggle>
      <ListItemButtonToggle title="LANGUAGES">
        <TechSkill value={95}>Javascript</TechSkill>
        <TechSkill value={70}>Swift</TechSkill>
        <TechSkill value={67}>Solidity</TechSkill>
        <TechSkill value={60}>Python</TechSkill>
        <TechSkill value={25}>Typescript</TechSkill>
        <TechSkill value={10}>!Ink</TechSkill>
        <TechSkill value={10}>Rust</TechSkill>
      </ListItemButtonToggle>
      <ListItemButtonToggle title="P2P NETWORKS">
        <TechSkill value={96}>Ethereum</TechSkill>
        <TechSkill value={77}>IPFS</TechSkill>
        <TechSkill value={67}>Ceramic</TechSkill>
        <TechSkill value={30}>Polkadot</TechSkill>
        <TechSkill value={30}>Kusama</TechSkill>
        <TechSkill value={20}>Fluence</TechSkill>
      </ListItemButtonToggle>
      <ListItemButtonToggle title="DATABASES">
        <TechSkill value={70}>MongoDB</TechSkill>
      </ListItemButtonToggle>
      <ListItemButtonToggle title="TOOLING">
        <TechSkill value={90}>Git</TechSkill>
        <TechSkill value={90}>Hardhat</TechSkill>
        <TechSkill value={70}>Truffle</TechSkill>
        <TechSkill value={70}>Firebase</TechSkill>
        <TechSkill value={40}>Docker</TechSkill>
      </ListItemButtonToggle>
    </Box>
  );
}
