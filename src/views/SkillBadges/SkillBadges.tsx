import React from 'react';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LabelImportantRoundedIcon from '@material-ui/icons/LabelImportantRounded';

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
    <Box display="flex" flexWrap="wrap" gridGap={8} mt={1}>
      {
        skills.map(skill =>
        <Chip
          key={skill}
          label={skill}
          color="primary"
          avatar={
            <Avatar>
              <LabelImportantRoundedIcon color="secondary" />
            </Avatar>
          }
        />)
      }
    </Box>
  </Box>
);
