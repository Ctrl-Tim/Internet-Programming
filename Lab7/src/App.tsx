import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const pages = ['Меню', 'Доставка', 'Адреса', 'Контакты', 'Обратная связь'];
const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" style={{ background: '#222324' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src="images/logo.png" alt="logo" width={100} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 3,
            pb: 0,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="red"
              gutterBottom
            >
              Меню
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 3}} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={2}>

            <Grid item key={0} xs={3} sm={3} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image="images/card1.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 2 }}>
                    <Typography gutterBottom variant="h4">
                      Акции
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Ассортимент</Button>
                  </CardActions>
                </Card>
            </Grid>

            <Grid item key={1} xs={3} sm={3} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image="images/card2.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4">
                      Суши
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Ассортимент</Button>
                  </CardActions>
                </Card>
            </Grid>

            <Grid item key={2} xs={3} sm={3} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image="images/card3.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4">
                      Роллы
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Ассортимент</Button>
                  </CardActions>
                </Card>
            </Grid>

            <Grid item key={3} xs={3} sm={3} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image="images/card4.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4">
                      Сеты
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Ассортимент</Button>
                  </CardActions>
                </Card>
            </Grid>

            <Grid item key={4} xs={3} sm={3} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image="images/card5.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4">
                      Супы
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Ассортимент</Button>
                  </CardActions>
                </Card>
            </Grid>

            <Grid item key={5} xs={3} sm={3} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image="images/card6.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4">
                      Закуски
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Ассортимент</Button>
                  </CardActions>
                </Card>
            </Grid>

            <Grid item key={6} xs={3} sm={3} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image="images/card7.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4">
                      Соусы
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Ассортимент</Button>
                  </CardActions>
                </Card>
            </Grid>

            <Grid item key={7} xs={3} sm={3} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image="images/card8.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4">
                      Напитки
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Ассортимент</Button>
                  </CardActions>
                </Card>
            </Grid>

            </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: '#161717', p: 1}} component="footer">
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src="images/logo.png" alt="logo" width={100} />
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider> 
  );
}