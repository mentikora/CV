import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Divider from '@material-ui/core/Divider';

import { data } from './data';
import { SkillBadges, TimeLine } from './views';
import style from './app.module.css';

export const App: React.FunctionComponent = () => {
  const { fullname, position, phone, location, socials, about, skillsBadges, previousJobs, education, courses, awards } = data;
  return (
    <Box component="main" className={style.app} boxShadow={18} borderRadius={16}>
      {window.location.search !== '?button=true' && <Button className={style.download} variant="contained" color="secondary" startIcon={<CloudDownloadIcon />}>
        PDF
      </Button>}

      <Grid container spacing={2}>

        {/* about */}
        <Grid item xs={12}>
          <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography component="h1" variant="h4">
                {fullname}
              </Typography>
              <Typography variant="body2" color='textSecondary'>
                {position}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography>
                <a href={socials.linkedin} target="_blank" rel="noreferrer">
                  <LinkedInIcon />
                </a>
                <a href={socials.github} target="_blank" rel="noreferrer">
                  <GitHubIcon />
                </a>
                <a href={`mailto:${socials.email}`}>
                  <AlternateEmailIcon />
                </a>
              </Typography>
              <Typography variant="body2" color='textSecondary'>
                {location}, {phone}
              </Typography>
            </Box>
          </Box>
          <Typography>
            {about}
          </Typography>
        </Grid>    
        <Grid item xs={12}>
          <Divider />    
        </Grid>

        {/* skills */}
        <Grid item xs={12}>
          <SkillBadges heading={'Skills'} skills={skillsBadges} />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item md={6}>
              <TimeLine heading={'Education'} data={education} />
              <Typography variant="h5">Languages</Typography>
              <Typography>English (intermediate), Ukrainian (native)</Typography>
            </Grid>
            <Grid item md={6}>
              <TimeLine heading={'Courses'} data={courses} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>

        {/* history */}
        <Grid item xs={12}>
          <TimeLine heading={'Employment history'} data={previousJobs} />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <TimeLine heading={'Personal achievements'} data={awards} />
        </Grid>
      </Grid>
    </Box>
  );
}
