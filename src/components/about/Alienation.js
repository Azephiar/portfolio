import { Typography } from "@mui/material";
import LinkWithIcon from "../LinkWithIcon";
import { useTheme } from "@emotion/react";
const Alienation = () => {
  const theme = useTheme();
  return (
    <>
      <Typography sx={{ marginBottom: theme.spacing(2) }}>
        A fashion-brand I helped bootstrapping. My work here was more creative-oriented. I worked on the actual clothes design, custom functionalities
        for the e-commerce (Shopify), marketing strategies and business planning.
      </Typography>
      <Typography sx={{ marginBottom: theme.spacing(2) }}>
        We were able to get the company from 0$ to 1.000.000$ in total revenue in 3 years.
      </Typography>
      <LinkWithIcon href="https://www.alienation.shop">Website</LinkWithIcon>
    </>
  );
};

export default Alienation;
