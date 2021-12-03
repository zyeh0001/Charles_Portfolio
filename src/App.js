import './App.css';
import { Container, Grid } from '@material-ui/core';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Portfolio from './Pages/Portfolio/Portfolio';
import Resume from './Pages/Resume/Resume';
import Profile from './Component/Profile/Porfile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Container className='top_60'>
      <Grid container spacing={7}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={3}
          md={4}
          //profile part
        >
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: 'red' }}>
          <Header />
          <Router>
            <Switch>
              <Route exact path='/'>
                <Resume />
              </Route>
              <Route path='/portfolio'>
                <Portfolio />
              </Route>
            </Switch>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
