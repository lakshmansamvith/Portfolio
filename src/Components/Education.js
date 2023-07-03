import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';
import resumeData from '../AllData';

const EducationPage = () => {
    return (
      <section id = "Resume">
      <div  className = "Education">
      <Container maxWidth="lg" style={{ color: '#48ACF0' }} sx={{ paddingTop: '1rem' }} >
      <Typography variant="h4" align="center" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={3}  >
        <Grid item xs={12} md={6} >
          <Paper elevation={3} className="education-card" sx={{ padding: '1rem', backgroundColor: '#48ACF0', color: '#D9D9D9', height: '100%' }}>
            <SchoolIcon fontSize="large" style={{ color: '#D9D9D9' }} />
            <Typography variant="h6" gutterBottom style={{ color: '#D9D9D9' }} sx = {{fontWeight:'bold'}}>
            {resumeData.pennStateLocation}
            </Typography>
            <Typography variant="subtitle1" sx = {{fontWeight:'bold'}}>
            {resumeData.pennStateStatus}
            </Typography>
            <Typography variant="subtitle1" sx = {{marginTop:'1rem'}}>
            {resumeData.pennState}
            </Typography>
            <Typography variant="body1" style={{ color: '#D9D9D9', fontWeight:'bold', marginTop:'1rem' }}>
              2022 November
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="education-card" sx={{ padding: '1rem', backgroundColor: '#48ACF0', color: '#D9D9D9', height: '100%'}}>
            <SchoolIcon fontSize="large" style={{ color: '#D9D9D9' }} />
            <Typography variant="h6" gutterBottom style={{ color: '#D9D9D9', fontWeight:'bold' }}>
            GITAM, Visakhapatnam, Andhra Pradesh
            </Typography>
            <Typography variant="subtitle1"  sx = {{fontWeight:'bold'}}>
            Bachelors of Technology in Computer Science
            </Typography>
            <Typography variant="subtitle1" sx = {{marginTop:'1rem'}}>
            {resumeData.gitam}
            </Typography>
            <Typography variant="body1" style={{ color: '#D9D9D9', marginTop:'1rem', fontWeight:'bold' }}>
             Completed,2020 June
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <br/>
      <br/>
    </Container>
      </div>
      </section>
      
    );
  };
  
  export default EducationPage;
  
