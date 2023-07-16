import React, {useState, useEffect} from 'react';
import { Container, Typography, Grid, Paper, Grow } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import resumeData from '../AllData';

const WorkExperiencePage = () => {
    
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    // Set showCards to true after the page is loaded
    setShowCards(true);
  }, []);

  return (
      <div className = "WorkEx">
      <Container maxWidth="lg" style={{ color: '#373F51'}}>
        <Typography variant="h4" align="center" gutterBottom>
          Work Experience
        </Typography>
        <Grid container spacing={12 }>
          <Grid item xs={12} md={12}>
          <Grow in={showCards} timeout={2000}>
            <Paper elevation={3} className="work-card" sx={{padding:'1rem', backgroundColor:'#373F51', color:'#D9D9D9',}}>
              <WorkIcon fontSize="large" style={{ color: '#D9D9D9' }} />
              <Typography variant="h6" gutterBottom style={{ color: '#D9D9D9', fontWeight:'bold' }}>
              Deloitte Touche Tohmatsu Ltd.(USI)
              </Typography>
              <Typography variant="subtitle1" sx = {{fontWeight:'bold'}}>
                Analyst - III
              </Typography>
              <Typography variant="subtitle1" sx = {{textAlign:'justify'}}>
                {resumeData.aboutWork}
              </Typography>
              <Typography variant="subtitle2" sx = {{marginTop: "1rem", fontWeight:'bold'}}>
                August 2020 - July 2022
              </Typography>
            </Paper>
            </Grow>
          </Grid>
        </Grid>
        <br/>
        <br/>
      </Container>
      
      </div>  
      
    );
  };
  
  export default WorkExperiencePage;
  
