const students = [
  {
    id: 1,
    image: 'https://avatars0.githubusercontent.com/u/74842096?v=4',
    firstName: 'Tad',
    lastName: 'Sekeres',
    isDead: false,
  },
  {
    id: 2,
    image: 'https://avatars2.githubusercontent.com/u/76710923?v=4',
    firstName: 'Nathan',
    lastName: 'Keith',
    isDead: false,
  },
  {
    id: 3,
    image: 'https://avatars2.githubusercontent.com/u/76188832?v=4',
    firstName: 'Katy',
    lastName: 'Fry',
    isDead: false,
  },
  {
    id: 4,
    image: 'https://avatars2.githubusercontent.com/u/76138733?v=4',
    firstName: 'Casey',
    lastName: 'Walker',
    isDead: false,
  },
  {
    id: 5,
    image: 'https://avatars3.githubusercontent.com/u/76716670?v=4',
    firstName: 'HoneyRae',
    lastName: 'Swan',
    isDead: false,
  },
  {
    id: 6,
    image: 'https://avatars3.githubusercontent.com/u/51683901?v=4',
    firstName: 'John',
    lastName: 'Maple',
    isDead: false,
  },
  {
    id: 7,
    image: 'https://avatars3.githubusercontent.com/u/76187279?v=4',
    firstName: 'Gabby',
    lastName: 'Tobermann',
    isDead: false,
  },
  {
    id: 8,
    image: 'https://avatars2.githubusercontent.com/u/23327097?v=4',
    firstName: 'Lindsey',
    lastName: 'Satterfield',
    isDead: false,
  },
  {
    id: 9,
    image: 'https://avatars0.githubusercontent.com/u/76851756?v=4',
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: false,
  },
  {
    id: 10,
    image: 'https://avatars0.githubusercontent.com/u/76854545?v=4',
    firstName: 'Rob',
    lastName: 'Cole',
    isDead: false,
  },
  {
    id: 11,
    image: 'https://avatars0.githubusercontent.com/u/76926244?v=4',
    firstName: 'Ben',
    lastName: 'Jarret',
    isDead: false,
  },
  {
    id: 12,
    image: 'https://avatars2.githubusercontent.com/u/68720317?v=4',
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: false,
  },
  {
    id: 13,
    image: 'https://avatars2.githubusercontent.com/u/76795299?v=4',
    firstName: 'Chris',
    lastName: 'Meffley',
    isDead: false,
  },
  {
    id: 14,
    image: 'https://avatars0.githubusercontent.com/u/68397076?v=4',
    firstName: 'Dani',
    lastName: 'Crosby',
    isDead: false,
  },
  {
    id: 15,
    image: 'https://avatars3.githubusercontent.com/u/58958998?v=4',
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: false,
  },
  {
    id: 16,
    image: 'https://avatars3.githubusercontent.com/u/16343050?v=4',
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: false,
  },
  {
    id: 17,
    image: 'https://avatars3.githubusercontent.com/u/67122062?v=4',
    firstName: 'Holly',
    lastName: 'Parsons',
    isDead: false,
  },
  {
    id: 18,
    image: 'https://avatars2.githubusercontent.com/u/20494604?v=4',
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false,
  },
  {
    id: 19,
    image: 'https://avatars1.githubusercontent.com/u/76793747?v=4',
    firstName: 'Jim',
    lastName: 'Conner',
    isDead: false,
  },
  {
    id: 20,
    image: 'https://avatars3.githubusercontent.com/u/45837967?v=4',
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: false,
  },
  {
    id: 21,
    image: 'https://avatars2.githubusercontent.com/u/76821980?v=4',
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: false,
  },
  {
    id: 22,
    image: 'https://avatars0.githubusercontent.com/u/76921222?v=4',
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    isDead: false,
  },
  {
    id: 23,
    image: 'https://avatars3.githubusercontent.com/u/25774314?v=4',
    firstName: 'Sara',
    lastName: 'Schoonover',
    isDead: false,
  },
  {
    id: 24,
    image: 'https://avatars2.githubusercontent.com/u/76828201?v=4',
    firstName: 'Sean',
    lastName: 'Rossettie',
    isDead: false,
  },
];

// const getLiveStudents = () => students.filter((student) => !student.isDead);
const livingStudents = () => {
  const swimming = students.filter((student) => student.isDead === false);
  return swimming;
};

const dearlyBeloved = () => {
  const soSad = students.filter((student) => student.isDead === true);
  return soSad;
};

const followTheLight = () => {
  const currentLiveStudents = livingStudents();
  const randomStudent = currentLiveStudents[Math.floor(Math.random() * currentLiveStudents.length)];
  const index = students.indexOf(randomStudent);
  students[index].isDead = true;
  return [livingStudents(), dearlyBeloved()];
};

export {
  students,
  livingStudents,
  dearlyBeloved,
  followTheLight,
};
