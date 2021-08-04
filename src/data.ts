export type IPreviousJob = {
  name: string;
  from: Date;
  to: Date;
  text?: string;
  projects?: Array<{
    overview: string;
    responsibilities: string;
    stack: string;
  }>
};
type IEducation = {
  name: string;
  from: Date;
  to: Date;
  text?: string;
}
type IContact = {
  name: string;
  link: string;
  text?: string;
}
type ICertification = {
  name: string;
}
type IAward = {
  name: string;
  from: Date;
  to: Date;
  text: string;
}
interface IData {
  fullname: string;
  position: string;
  phone: string;
  location: string;
  socials: any,
  about: string;
  skillsBadges: Array<string>;
  previousJobs: Array<IPreviousJob>;
  courses: Array<IEducation>;
  education: Array<IEducation>;
  contacts?: Array<IContact>;
  certifications?: Array<ICertification>;
  awards: Array<IAward>;
}

export const data: IData = {
  fullname: 'Roman Horobets',
  position: 'Front end Developer',
  phone: '+380939309082',
  location: 'Lviv, Ukraine',
  awards: [
    {
      name: 'Mentoring',
      from: new Date(2018, 2, 1),
      to: new Date(),
      text: 'Helping people to learn and improve their skills with HTML&CSS.'
    },
    {
      name: 'DEV Challenge 1101, KYIV',
      from: new Date(2018, 9, 1),
      to: new Date(2018, 9, 1),
      text: 'Participated in the final part of dev challenge in the HTML/CSS category.',
    },
    {
      name: 'Passion',
      from: new Date(2017, 8, 1),
      to: new Date(),
      text: 'Founder of championship in FIFA for PS4 at Rolique.'
    },
    {
      name: 'CV',
      from: new Date(),
      to: new Date(),
      text: 'Creating this CV by my own just because I can and love front end :3'
    },
  ],
  courses: [
    {
      name: 'MongoDB Basics',
      from: new Date(2019, 7, 1),
      to: new Date(2019, 7, 1),
    },
    {
      name: 'Cursor Education',
      from: new Date(2016, 5, 1),
      to: new Date(2016, 6, 1),
    },
  ],
  education: [
    {
      name: 'Lviv Technical and Economic College of Lviv Polytechnic National University',
      from: new Date(2006, 5, 1),
      to: new Date(2010, 6, 1),
    },
  ],
  socials: {
    facebook: 'https://www.facebook.com/mentikora/',
    linkedin: 'https://www.linkedin.com/in/roman-horobets-b9290366/',
    github: 'https://github.com/mentikora',
    email: 'mentikorasan@gmail.com',
  },
  about: `Passioned and responsible engineer, with a get-it-done, on-time and high-quality product spirit. I have experience in defining requirements, designing, implementing and delivering complex front-end and web applications using variety of technics and technologies. For the last years I’ve got solid expertise in React.`,
  skillsBadges: ['html', 'css', 'sass / less', 'BEM / Atomic / CSS modules', 'javascript', 'react', 'react native', 'typescript', 'jest', 'bootstrap / Material UI / Bulma', 'Adaptive & Responsive design', 'Git / Gitflow'],
  previousJobs: [
    {
      name: 'Rolique',
      from: new Date(2017, 6, 1),
      to: new Date(),
      text: 'Developed sites of varying complexity with different technologies. During all this time I have participated in more than 20 projects.',
      projects: [
        {
          overview: 'Werksters - marketplace for the cleaning market.',
          responsibilities: `Re-building old project with new technologies. This included public pages as well as the admin's dashboard. PR reviews, mentoring. Discussing with backend team about REST.`,
          stack: 'React, Redux, Material-UI, PHP',
        },
        {
          overview: 'Fazemodels - service that allows agencies to market their models.',
          responsibilities: `Project architecture: MVP. Much attention was paid to the interface and ease of use. Communication directly with the client, BA and design team about app's UX and features.`,
          stack: 'React, Redux, Material-UI, NodeJS',
        },
        {
          overview: 'Schleuniger - leading solutions supplier to the wire processing and testing industry.',
          responsibilities: `Creating and implementing custom theme, perfect pixel, implementing front end logic with jQuery (pain)`,
          stack: 'HTML, SCSS, jQuery, Drupal8',
        },
        {
          overview: `App for company's recruiters`,
          responsibilities: `Project architecture: MVP. Building UI and communication with Salesforce API and Twilio.`,
          stack: 'React Native, Salesforce, Twilio API',
        },
      ]
    },
    {
      name: 'TicketsUA',
      from: new Date(2016, 5, 1),
      to: new Date(2017, 6, 1),
      projects: [
        {
          overview: `Internal monitoring project for TVs`,
          responsibilities: `Creating UI of a monitoring system for TVs, features discussion.`,
          stack: 'React, SCSS, Ruby on Rails',
        }
      ]
    },
    {
      name: 'Ki-technology',
      from: new Date(2013, 11, 1),
      to: new Date(2016, 5, 1),
      projects: [
        {
          overview: `Adster -  product related to advertising and banners`,
          responsibilities: `Builded custom UI and logic for front end part. Communication, discussion of new product features and development in general.`,
          stack: 'React, SCSS, Ruby on Rails',
        },
      ]
    },
    {
      name: 'Welldo agency',
      from: new Date(2011, 3, 1),
      to: new Date(2013, 11, 1),
      text: 'Support and development of sites of varying complexity, partly SEO and google adwords. During all this time I have participated in more than 30 projects most of which were from Ukrainian customers such as Subaru Lviv, Ford Ukraine, Era Parts.',
    },
  ],
};
