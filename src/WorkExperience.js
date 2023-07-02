import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const WorkExperiencePage = () => {
    return (
      <div className = "WorkEx">
      <Container maxWidth="lg" style={{ color: '#274690' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Work Experience
        </Typography>
        <Grid container spacing={12 }>
          <Grid item xs={12} md={12}>
            <Paper elevation={3} className="work-card">
              <WorkIcon fontSize="large" style={{ color: '#274690' }} />
              <Typography variant="h6" gutterBottom style={{ color: '#274690' }}>
              Deloitte Touche Tohmatsu Ltd.(USI)
              </Typography>
              <Typography variant="subtitle1">
                Analyst - III
              </Typography>
              <Typography variant="subtitle2">
                August 2020 - July 2022
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
  
  export default WorkExperiencePage;
  
