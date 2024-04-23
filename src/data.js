import { nanoid } from 'nanoid';
import phonebook from '../src/assets/projects/phonebook.png';
import studio from '../src/assets/projects/studio.jpg';
import rentcar from '../src/assets/projects/rentcar.png';
import moviesSearch from '../src/assets/projects/moviesSearch.png';
import imageSearch from '../src/assets/projects/imageSearch.png';
import watch from '../src/assets/projects/watch.png';
import pulse from '../src/assets/projects/pulse.png';
import tastytreats from '../src/assets/projects/tastytreats.png';
import foodsta from '../src/assets/projects/foodsta.png';
import restapi from '../src/assets/projects/restapi.png';
import portfolio from '../src/assets/projects/posrtolio.png';
import note from '../src/assets/projects/note.png';

export const projects = [
  {
    id: nanoid(),
    title: 'Lux car rent',
    img: rentcar,
    description: 'App helps you choose and rent lux car ',
    repository: 'Individual  project',
    technologies: ['React.js'],
    github: 'https://github.com/BogdanK85/lux-car-rent',
    live: 'https://bogdank85.github.io/lux-car-rent/',
  },
  {
    id: nanoid(),
    title: 'Tasty treats',
    img: tastytreats,
    description: 'Customize Your Meal with Ingredient and Video Guides',
    repository: 'Team project',
    technologies: ['HTML, CSS, JavaScript'],
    github:
      'https://github.com/kurshatsov-andrii/leader-code-team-tasty-treats/graphs/contributors',
    live: 'https://kurshatsov-andrii.github.io/leader-code-team-tasty-treats/',
  },
  {
    id: nanoid(),
    title: 'Phonebook',
    img: phonebook,
    description: 'Phonebook app helps you save contacts and manage them',
    repository: 'Individual  project',
    technologies: ['React.js'],
    github: 'https://github.com/BogdanK85/my-phonebook',
    live: 'https://bogdank85.github.io/my-phonebook/',
  },

  {
    id: nanoid(),
    title: 'Movies search',
    img: moviesSearch,
    description: 'App for seacrh movies and info about it',
    repository: 'Individual  project',
    technologies: ['React.js'],
    github: 'https://github.com/BogdanK85/search-movie',
    live: 'https://bogdank85.github.io/search-movie/',
  },
  {
    id: nanoid(),
    title: 'Power pulse',
    img: pulse,
    description:
      'App for training your body, with diferent exercises and products',
    repository: 'Team project',
    technologies: ['Node.js, React.js, MongoDB'],
    github:
      'https://github.com/kurshatsov-andrii/leader-code-team-power-pulse-back-end/graphs/contributors',
    live: 'https://kurshatsov-andrii.github.io/leader-code-team-power-pulse/',
  },
  {
    id: nanoid(),
    title: 'Rest-API',
    img: restapi,
    description: 'Create user, authorisation, connect DB, add avatar, token ',
    repository: 'Individual  project',
    technologies: ['Node.js, MongoDB'],
    github: 'https://github.com/BogdanK85/nodejs-hw2-rest-api/tree/hw06-email',
    live: 'https://github.com/BogdanK85/nodejs-hw2-rest-api/tree/hw06-email',
  },
  {
    id: nanoid(),
    title: 'Image search',
    img: imageSearch,
    description: 'App helps you to find diferent images in hd quality',
    repository: 'Individual  project',
    technologies: ['React.js'],
    github: 'https://github.com/BogdanK85/goit-react-hw-04-images/',
    live: 'https://bogdank85.github.io/goit-react-hw-04-images/',
  },
  {
    id: nanoid(),
    title: 'Web-Studio',
    img: studio,
    description: 'Site for digital marketing for your business.',
    repository: 'Individual  project',
    technologies: ['HTML, CSS'],
    github: 'https://github.com/BogdanK85/web-studio',
    live: 'https://bogdank85.github.io/web-studio/',
  },

  {
    id: nanoid(),
    title: 'The watch spot',
    img: watch,
    description: 'The site will help you choose and order a Swiss watch',
    repository: 'Team project',
    technologies: ['HTML, CSS, JavaScript'],
    github: 'https://github.com/RuslanMirasov/TheWatchSpot/graphs/contributors',
    live: 'https://ruslanmirasov.github.io/TheWatchSpot/',
  },
  {
    id: nanoid(),
    title: 'FoodSta',
    img: foodsta,
    description: 'Enjoy Your Favorite Food From Anywhere',
    repository: 'Team project',
    technologies: ['HTML, CSS'],
    github:
      'https://github.com/OleksandrShpachuk/foodsta-team-project/graphs/contributors',
    live: 'https://oleksandrshpachuk.github.io/foodsta-team-project/',
  },

  {
    id: nanoid(),
    title: 'My Portfolio',
    img: portfolio,
    description: 'This app is a showcase of my skills, projects, and education',
    repository: 'Individual  project',
    technologies: [' React.js'],
    github: 'https://github.com/BogdanK85/my-portfolio',
    live: 'https://bogdank85.github.io/my-portfolio/',
  },
  {
    id: nanoid(),
    title: 'Notes',
    img: note,
    description: 'This app help you to add your notes, find and remove them',
    repository: 'Individual  project',
    technologies: [' React.js'],
    github: 'https://github.com/BogdanK85/notes',
    live: 'https://bogdank85.github.io/notes/',
  },
];

export const data = { projects };
