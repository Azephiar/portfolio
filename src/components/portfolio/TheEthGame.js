import { Link, Typography } from "@mui/material";
import LinkWithIcon from "../LinkWithIcon";
import { useTheme } from "@emotion/react";
import { Launch } from "@mui/icons-material";
const TheEthGame = () => {
  return (
    <>
      <Typography sx={{ marginBottom: "9px" }}>
        An Ethereum based game played on a 6x6 grid which I deployed in 2018 to
        learn solidity.
      </Typography>
      <Typography sx={{ marginBottom: "9px" }}>
        The game was born with the idea of using what are now known as NTTs
        (Non-transferable tokens) as a trophy for the game winner.
      </Typography>
      <LinkWithIcon href="https://github.com/Azephiar/theethgame">
        Github
      </LinkWithIcon>
    </>
  );
};

export default TheEthGame;
