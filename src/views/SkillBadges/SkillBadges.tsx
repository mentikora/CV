import React from 'react';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import style from './badge.module.css';

type Props = {
  skills: Array<string>;
  heading: string;
};
export const SkillBadges: React.FunctionComponent<Props> = ({
  skills,
  heading,
}) => (
  <Box>
    <Typography variant="h5">
      {heading}
    </Typography>
    <Box display="flex" flexWrap="wrap" mt={1}>
      {
        skills.map(skill =>
        <Chip
          className={style.badge}
          key={skill}
          label={skill}
          color="primary"
          variant="outlined"
        />)
      }
    </Box>
  </Box>
);
