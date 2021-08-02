export type IPreviousJob = {
  name: string;
  from: Date;
  to: Date;
  text?: string;
};
type IEducation = {
  name: string;
  from: Date;
  to: Date;
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
      name: 'DEV Challenge 1101, KYIV',
      from:  new Date('10-01-2018'),
      to:  new Date('10-01-2018'),
      text: 'Participated in the final part of dev challenge in the html/css category',
    },
    {
      name: 'Passion',
      from:  new Date('09-01-2017'),
      to:  new Date(),
      text: 'Founder of championships in FIFA for PS4 at Rolique'
    },
    {
      name: 'Mentoring',
      from:  new Date('03-01-2018'),
      to:  new Date(),
      text: 'Helping people to learn and improve their skills with HTML&CSS'
    },
  ],
  courses: [
    {
      name: 'MongoDB Basics',
      from:  new Date('08-01-2019'),
      to:  new Date('08-01-2019'),
    },
  ],
  education: [
    {
      name: 'Lviv Technical and Economic College of the Lviv Polytechnic National University',
      from:  new Date('06-01-2006'),
      to:  new Date('07-01-2010'),
    },
    {
      name: 'Cursor Education',
      from:  new Date('06-01-2016'),
      to:  new Date('07-01-2016'),
    },
  ],
  socials: {
    facebook: 'https://www.facebook.com/mentikora/',
    linkedin: 'https://www.linkedin.com/in/roman-horobets-b9290366/',
    github: 'https://github.com/mentikora',
    email: 'mentikorasan@gmail.com',
  },
  about: 'Passioned and responsible engineer, with a get-it-done, on-time and high-quality product spirit. I have experience defining requirements, designing, implementing and delivering complex front-end and web applications using variety technics and technologies.',
  skillsBadges: ['html', 'css', 'sass / less', 'BEM / Atomic / CSS modules', 'js core', 'react', 'react native', 'typescript', 'jest', 'bootstrap / Material UI / Bulma', 'Adaptive & Responsive design', 'Git / Gitflow'],
  previousJobs: [
    {
      name: 'Welldo agency',
      from: new Date('04-01-2011'),
      to: new Date('12-01-2013'),
      text: 'Support and development of sites of varying complexity, partly SEO and google adwords',
    },
    {
      name: 'Ki-technology',
      from: new Date('12-01-2013'),
      to: new Date('06-01-2016'),
      text: 'Worker on product related to advertising and banners',
    },
    {
      name: 'TicketsUA',
      from: new Date('06-01-2016'),
      to: new Date('07-01-2017'),
      text: 'Develop product from scratch, worked on a monitoring project for TVs, internal projects of the company',
    },
    {
      name: 'Rolique',
      from: new Date('07-01-2017'),
      to: new Date(),
      text: 'Developed sites of varying complexity with different technologies',
    }
  ],
};
