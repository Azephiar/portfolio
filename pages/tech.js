import * as React from "react";
import { Container, Typography, Box } from "@mui/material";
import ListItemButtonToggle from "../src/components/ListItemButtonToggle";
import TechSkill from "../src/components/TechSkill";
import { useTheme } from "@emotion/react";
export default function About() {
  const theme = useTheme();
  return (
    <Container sx={{ marginBottom: theme.spacing(6) }}>
      <Typography variant="title">TECH STACK</Typography>
      <ListItemButtonToggle title="FRAMEWORKS">
        <TechSkill value={90}>React</TechSkill>
        <TechSkill value={80}>Material UI</TechSkill>
        <TechSkill value={70}>KoaJS</TechSkill>
        <TechSkill value={50}>ExpressJS</TechSkill>
        <TechSkill value={40}>TailwindCSS</TechSkill>
        <TechSkill value={20}>Substrate</TechSkill>
      </ListItemButtonToggle>
      <ListItemButtonToggle title="LANGUAGES">
        <TechSkill value={90}>Javascript</TechSkill>
        <TechSkill value={70}>Swift</TechSkill>
        <TechSkill value={67}>Solidity</TechSkill>
        <TechSkill value={60}>Python</TechSkill>
        <TechSkill value={25}>Typescript</TechSkill>
        <TechSkill value={10}>!Ink</TechSkill>
        <TechSkill value={10}>Rust</TechSkill>
      </ListItemButtonToggle>
      <ListItemButtonToggle title="P2P NETWORKS">
        <TechSkill value={90}>Ethereum</TechSkill>
        <TechSkill value={80}>IPFS</TechSkill>
        <TechSkill value={70}>Ceramic</TechSkill>
        <TechSkill value={30}>Polkadot</TechSkill>
        <TechSkill value={30}>Kusama</TechSkill>
        <TechSkill value={20}>Fluence</TechSkill>
      </ListItemButtonToggle>
      <ListItemButtonToggle title="DATABASES">
        <TechSkill value={80}>MongoDB</TechSkill>
      </ListItemButtonToggle>
      <ListItemButtonToggle title="TOOLING">
        <TechSkill value={90}>Git</TechSkill>
        <TechSkill value={90}>Hardhat</TechSkill>
        <TechSkill value={70}>Truffle</TechSkill>
        <TechSkill value={70}>Firebase</TechSkill>
        <TechSkill value={40}>Docker</TechSkill>
      </ListItemButtonToggle>
    </Container>
  );
}
