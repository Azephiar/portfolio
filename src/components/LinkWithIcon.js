import { Link, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Launch } from "@mui/icons-material";
import { fontWeight } from "@mui/system";
const LinkWithIcon = ({ href, children, display, fontSize, fontWeight }) => {
  return (
    <Link
      href={href}
      display={display}
      fontSize={fontSize ? fontSize : 15}
      fontWeight={fontWeight}
      target="_blank"
    >
      {children}
      <Launch
        sx={{
          marginLeft: "2px",
          fontSize: "inherit",
          fontWeight: "inherit",
        }}
      />
    </Link>
  );
};

export default LinkWithIcon;
