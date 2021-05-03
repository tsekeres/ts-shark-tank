const students = [
  {
    id: 1,
    firstName: 'Tad',
    lastName: 'Sekeres',
    isDead: false,
  },
  {
    id: 2,
    firstName: 'Nathan',
    lastName: 'Keith',
    isDead: false,
  },
  {
    id: 3,
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
    firstName: 'HoneyRae',
    lastName: 'Swan',
    isDead: false,
  },
  {
    id: 6,
    firstName: 'John',
    lastName: 'Maple',
    isDead: false
  },
  {
    id: 7,
    firstName: 'Gabby',
    lastName: 'Tobermann',
    isDead: false
  },
  {
    id: 8,
    firstName: 'Lindsey',
    lastName: 'Satterfield',
    isDead: false
  },
  {
    id: 9,
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: false
  },
  {
    id: 10,
    firstName: 'Rob',
    lastName: 'Cole',
    isDead: false
  },
  {
    id: 11,
    firstName: 'Ben',
    lastName: 'Jarret',
    isDead: false
  },
  {
    id: 12,
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: false
  },
  {
    id: 13,
    firstName: 'Chris',
    lastName: 'Meffley',
    isDead: false
  },
  {
    id: 14,
    firstName: 'Dani',
    lastName: 'Crosby',
    isDead: false
  },
  {
    id: 15,
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: false
  },
  {
    id: 16,
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: false
  },
  {
    id: 17,
    firstName: 'Holly',
    lastName: 'Parsons',
    isDead: false
  },
  {
    id: 18,
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false
  },
  {
    id: 19,
    firstName: 'Jim',
    lastName: 'Conner',
    isDead: false
  },
  {
    id: 20,
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: false
  },
  {
    id: 21,
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: false
  },
  {
    id: 22,
    firstName: 'Mitchell',
    lastName: 'Crumbles',
    isDead: false
  },
  {
    id: 23,
    firstName: 'Sara',
    lastName: 'Schoonover',
    isDead: false
  },
  {
    id: 24,
    firstName: 'Sean',
    lastName: 'Rossettie',
    isDead: false
  },
  {
    id: 25,
    firstName: 'Aja',
    lastName: 'Washington',
    isDead: false
  },
  {
    id: 26,
    firstName: 'Theresa',
    lastName: 'Vasquez',
    isDead: false
  },
  {
    id: 27,
    firstName: 'Trinity',
    lastName: 'Christiana',
    isDead: false
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
