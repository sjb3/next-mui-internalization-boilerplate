import React from 'react';
import NextLink from 'next/link';
import Head from 'next/dist/next-server/lib/head';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import { useRouter } from 'next/dist/client/router';
import useTranslation from 'next-translate/useTranslation';

export default function Layout({ children }) {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Head>
        <title>Justin Byun</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Justin Byun</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div></div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Open Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {router.locales.map((locale) => (
                <MenuItem key={locale} onClick={handleClose}>
                  <NextLink href={router.asPath} locale={locale}>
                    <Link>{locale}</Link>
                  </NextLink>
                </MenuItem>
              ))}
            </Menu>
            <NextLink href="/cart" passHref>
              <Link>{t('common:cart')}</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>{t('common:login')}</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved 2021</Typography>
      </footer>
    </div>
  );
}
