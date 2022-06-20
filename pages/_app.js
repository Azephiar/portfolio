import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { Toolbar, AppBar, Box, Container, Typography, IconButton } from "@mui/material";
import { Twitter, GitHub, LinkedIn, ArrowBack } from "@mui/icons-material";
import Link from "../src/components/Link";
import { useRouter } from "next/router";
import { menu } from "../src/constants";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  let path = router.pathname;
  let sanitizedPath = path.substring(1);
  console.log("path", path.substring(0));
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          sx={{
            minHeight: "calc(100vh - 7px)",
            width: path == "/" || !menu.hasOwnProperty(sanitizedPath) ? { xs: "90%", md: "600px" } : menu[sanitizedPath].width,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: theme.spacing(2),
            transition: "width 0.1s",
          }}
        >
          <Box>
            <Typography align="right" fontWeight={400} fontSize={12}>
              AZEPHIAR.ETH@GMAIL.COM
            </Typography>
          </Box>

          <Box
            sx={{
              height: "1px",
              backgroundColor: "background.tertiary",
            }}
          />

          <AppBar position="static">
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: "0 !important",
                paddingLeft: "0 !important",
                alignItems: "flex-start",
                paddingTop: theme.spacing(1),
              }}
            >
              <Box>
                {path != "/" && (
                  <IconButton component={Link} href="/">
                    <ArrowBack sx={{ fontSize: 30, color: "text.tertiary" }} />
                  </IconButton>
                )}
              </Box>
              <Box sx={{ justifyContent: "end" }}>
                <IconButton href="https://github.com/Azephiar" target="_blank">
                  <GitHub
                    sx={{
                      fontSize: 30,
                      marginRight: theme.spacing(1),
                      color: "text.tertiary",
                    }}
                  />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/ezechiele-tosadori-6883b615a/" target="_blank">
                  <LinkedIn
                    sx={{
                      fontSize: 30,
                      marginRight: theme.spacing(1),
                      color: "text.tertiary",
                    }}
                  />
                </IconButton>
                <IconButton href="https://twitter.com/Azephiar" target="_blank">
                  <Twitter
                    sx={{
                      fontSize: 30,
                      color: "text.tertiary",
                    }}
                  />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};