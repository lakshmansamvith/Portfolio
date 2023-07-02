import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';

const EducationPage = () => {
    return (
        <div className = "Education">
        <Container maxWidth="lg" style={{ color: '#274690' }} >
        <Typography variant="h4" align="center" gutterBottom>
          Education
        </Typography>
        <Grid container spacing={3} >
          <Grid item xs={12} md={6} >
            <Paper elevation={3} className="education-card">
              <SchoolIcon fontSize="large" style={{ color: '#274690' }} />
              <Typography variant="h6" gutterBottom style={{ color: '#274690' }}>
              Pennslyvania State University, Harrisburg, Pennslyvania
              </Typography>
              <Typography variant="subtitle1">
                Masters in Computer Science(Discontinued due to personal constraints)
              </Typography>
              <Typography variant="body1" style={{ color: '#274690' }}>
                2022
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className="education-card">
              <SchoolIcon fontSize="large" style={{ color: '#274690' }} />
              <Typography variant="h6" gutterBottom style={{ color: '#274690' }}>
              GITAM, Visakhapatnam, Andhra Pradesh
              </Typography>
              <Typography variant="subtitle1">
              Bachelors of Technology in Computer Science
              </Typography>
              <Typography variant="body1" style={{ color: '#1D84B5' }}>
               Completed,2020 June
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <br/>
        <br/>
      </Container>
        </div>
      
    );
  };
  
  export default EducationPage;
  
