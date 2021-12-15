import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { useEffect } from "react";

let user_name: string = "Ctrl-Tim";

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

let getData = async () => {
  return await fetch(`https://api.github.com/users/`+user_name+`/repos`)
  .then(res => res.json())
  .then((res: GithubRepo[]) => {
      console.log(res);
      return res;
  })
};

const handleDrawerToggle = () => {
  alert("хочу автомат :(");
};

const theme = createTheme();

export default function App() {
  const [repos, setData] = useState<GithubRepo[]>([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <AppBar>
						<Toolbar>
							<IconButton
								color="inherit"
								aria-label="open drawer"
                onClick={handleDrawerToggle}
							>
								<MenuIcon />
							</IconButton>
							<Typography
								variant="h6"
								color="inherit"
                sx={{flexGrow: 3}}
							>
								Репозитории пользователя {user_name}
							</Typography>

               <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                    <Button
                      key="VK"
                      sx={{ my: 2, color: 'white', display: 'block' }}
                      onClick={event =>  window.location.href='https://vk.com/istyuk'}
                    >
                        <img src="images/icon_vk.png" alt="logo" width={30} />
                     </Button>
                </Box>

                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                    <Button
                      key="Telegram"
                      sx={{ my: 2, color: 'white', display: 'block' }}
                      onClick={event =>  window.location.href='https://t.me/Istyuk'}
                    >
                        <img src="images/icon_tg.png" alt="logo" width={30} />
                     </Button>
                </Box>

                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                    <Button
                      key="Instagram"
                      sx={{ my: 2, color: 'white', display: 'block' }}
                      onClick={event =>  window.location.href='https://www.instagram.com/_istyuk_/'}
                    >
                        <img src="images/icon_inst.png" alt="logo" width={30} />
                     </Button>
                </Box>
						</Toolbar>
				</AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 5,
            pb: 5,
          }}
        >
        </Box>

        <Container sx={{ py: 15 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={5}>
            {repos.map((card) => (
              <Grid item key={card.id} xs={6} sm={6} md={6}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      key="open"
                      onClick={event => window.location.href=card.html_url}
                    >
                      Открыть</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: '#161717', p: 5}} component="footer">
        <Typography
            variant="h6"
            noWrap
            component="div"
            color="gray"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Интернет-программирование: Лабораторная работа №8
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider> 
  );
}