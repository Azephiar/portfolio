import { Link, Typography } from "@mui/material";
import LinkWithIcon from "../LinkWithIcon";
import { useTheme } from "@emotion/react";
import { Launch } from "@mui/icons-material";
const Awaked = () => {
  return (
    <>
      <Typography sx={{ marginBottom: "9px" }}>
        A social network for NFTs that uses{" "}
        <LinkWithIcon href="https://ceramic.network/">
          Ceramic Network
        </LinkWithIcon>{" "}
        streams and{" "}
        <LinkWithIcon href="https://www.w3.org/TR/did-core/">
          W3C DIDs
        </LinkWithIcon>{" "}
        to build an off-chain IPFS-based decentralized social graph for NFTs.
      </Typography>
      <Typography sx={{ marginBottom: "9px" }}>
        {" "}
        Awaked uses the{" "}
        <LinkWithIcon href="https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-94/CIP-94.md">
          NFT DID
        </LinkWithIcon>{" "}
        specification, allowing the owner of a particular NFT to create and
        update content that belogs to the NFT itself. If the NFT gets sold the
        rights to the NFT-associated content are also transferred.
      </Typography>
      <LinkWithIcon href="https://awaked.xyz/" display="block">
        Website
      </LinkWithIcon>
      <LinkWithIcon href="https://github.com/Azephiar/awaked">
        Github
      </LinkWithIcon>
    </>
  );
};

export default Awaked;
