import { ListItemButton, List, Box, Typography } from "@mui/material";
import Link from "../src/components/Link";
import Badge from "../src/components/Badge";
import { useTheme } from "@emotion/react";
import { menu } from "../src/constants";

export default function Index() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src="/computer.png" height="auto" width="185px" />
      {/* Badges */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "400px",
        }}
      >
        <Badge text={"WEB3 BUILDER 👷"} />
        <Badge text={"FULLSTACK DEV 💻"} />
        <Badge text={"PHILOSPHY LOVER 📚"} />
      </Box>
      <List sx={{ width: "90%" }}>
        {Object.keys(menu).map((key, index) => {
          return (
            <ListItemButton
              key={"menu-item-" + index}
              sx={{
                justifyContent: "left",
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
                lineHeight: "1",
                fontSize: "1.33rem",
                fontWeight: "900",
                textDecoration: "none",
                color: "primary",
                "&:hover": {
                  borderLeft: 3,
                  borderColor: "text.tertiary",
                  backgroundColor: "transparent",
                },
              }}
              component={Link}
              variant="menu"
              href={"/" + key}
              align="center"
            >
              <Typography
                sx={{
                  marginRight: theme.spacing(2),
                  fontSize: "0.80rem",
                  fontWeight: 500,
                }}
              >
                {"#" + menu[key].index + ">"}
              </Typography>
              {menu[key].label}
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}
