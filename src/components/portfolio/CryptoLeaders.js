import { Link, Typography } from "@mui/material";
import LinkWithIcon from "../LinkWithIcon";
import { useTheme } from "@emotion/react";
import { Launch } from "@mui/icons-material";
const CryptoLeaders = () => {
  return (
    <>
      <Typography sx={{ marginBottom: "9px" }}>
        An early NFT collection I deployed in 2018 to learn about NFTs ins and
        outs. At the time NFTs where not a thing yet and the ERC721 standard had
        just passed the draft stage.
      </Typography>
      <Typography sx={{ marginBottom: "9px" }}>
        The collection was about important historic figures in the past.
      </Typography>
      <LinkWithIcon href="https://github.com/Azephiar/cryptoleaders">
        Github
      </LinkWithIcon>
    </>
  );
};

export default CryptoLeaders;
