import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import MiniDrawer from '../Components/MiniVariantDrawer';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Copyright from '../src/Copyright';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: {
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const classes = useStyles();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <ThemeProvider theme={theme}>

          <MiniDrawer />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Head>
              <title>My page</title>
              <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
            <Copyright />
          </main>
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
}
