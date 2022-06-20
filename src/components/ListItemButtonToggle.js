import { ListItemButton } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";
import { useTheme } from "@emotion/react";
const ListItemButtonToggle = ({ children, title, sx = [] }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton
        sx={[
          {
            justifyContent: "space-between",
            fontWeight: "900",
            textDecoration: "none",
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(3),
            color: "text.primary",
            paddingLeft: 0,
            paddingRight: 0,
            borderBottom: open ? 1 : 0,
            borderColor: "background.tertiary",
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        variant="menu"
        align="center"
        onClick={() => toggleOpen()}
      >
        {title}
        <KeyboardArrowDown
          sx={{
            transform: open ? "rotate(-180deg)" : "rotate(0)",
            transition: "0.2s",
          }}
        />
      </ListItemButton>
      {open && children}
    </>
  );
};

export default ListItemButtonToggle;
