import { nanoid } from 'nanoid';
import vlasnist from '../src/assets/projects/vlasnist.png';
import svidotcsva from '../src/assets/projects/svidotcsva.png';
import dovirenist from '../src/assets/projects/dovirenist.png';
import zakordon from '../src/assets/projects/zakordon.png';
import neruhomist from '../src/assets/projects/neruhomist.png';
import fop from '../src/assets/projects/fop.png';
import zapovit from '../src/assets/projects/zapovit.png';
import spadok from '../src/assets/projects/spadok.png';
import dogovoru from '../src/assets/projects/dogovoru.png';
import kupivlja from '../src/assets/projects/kupivlja.png';
import zavirennja from '../src/assets/projects/zavirennja.png';
import shljub from '../src/assets/projects/shljub.png';

export const projects = [
  {
    id: nanoid(),
    title: 'Реєстрація нерухомості',
    img: neruhomist,
    description: 'App helps you to find diferent images in hd quality',
    repository: 'Individual  project',
    technologies: ['React.js'],
    github: 'https://github.com/BogdanK85/goit-react-hw-04-images/',
    live: 'https://bogdank85.github.io/goit-react-hw-04-images/',
  },
  {
    id: nanoid(),
    title: 'Довіреності',
    img: dovirenist,
    description: 'App helps you choose and rent lux car ',
    repository: 'Individual  project',
    technologies: ['React.js'],
    github: 'https://github.com/BogdanK85/lux-car-rent',
    live: 'https://bogdank85.github.io/lux-car-rent/',
  },
  {
    id: nanoid(),
    title: 'Спадкові справи',
    img: spadok,
    description: 'Customize Your Meal with Ingredient and Video Guides',
    repository: 'Team project',
    technologies: ['HTML, CSS, JavaScript'],
    github:
      'https://github.com/kurshatsov-andrii/leader-code-team-tasty-treats/graphs/contributors',
    live: 'https://kurshatsov-andrii.github.io/leader-code-team-tasty-treats/',
  },
  {
    id: nanoid(),
    title: 'Право власності',
    img: vlasnist,
    description: 'Phonebook app helps you save contacts and manage them',
    repository: 'Individual  project',
    technologies: ['React.js'],
    github: 'https://github.com/BogdanK85/my-phonebook',
    live: 'https://bogdank85.github.io/my-phonebook/',
  },

  {
    id: nanoid(),
    title: 'Виїзд дитини за кордон',
    img: zakordon,
    description: 'App for seacrh movies and info about it',
    repository: 'Individual  project',
    technologies: ['React.js'],
    github: 'https://github.com/BogdanK85/search-movie',
    live: 'https://bogdank85.github.io/search-movie/',
  },
  {
    id: nanoid(),
    title: 'Посвідчення заповітів',
    img: zapovit,
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
    title: 'Договір купівлі-продажу',
    img: kupivlja,
    description: 'Create user, authorisation, connect DB, add avatar, token ',
    repository: 'Individual  project',
    technologies: ['Node.js, MongoDB'],
    github: 'https://github.com/BogdanK85/nodejs-hw2-rest-api/tree/hw06-email',
    live: 'https://github.com/BogdanK85/nodejs-hw2-rest-api/tree/hw06-email',
  },
  {
    id: nanoid(),
    title: 'Видача свідоцтв',
    img: svidotcsva,
    description: 'Site for digital marketing for your business.',
    repository: 'Individual  project',
    technologies: ['HTML, CSS'],
    github: 'https://github.com/BogdanK85/web-studio',
    live: 'https://bogdank85.github.io/web-studio/',
  },

  {
    id: nanoid(),
    title: 'Реєстрація ТзОВ',
    img: fop,
    description: 'The site will help you choose and order a Swiss watch',
    repository: 'Team project',
    technologies: ['HTML, CSS, JavaScript'],
    github: 'https://github.com/RuslanMirasov/TheWatchSpot/graphs/contributors',
    live: 'https://ruslanmirasov.github.io/TheWatchSpot/',
  },
  {
    id: nanoid(),
    title: 'Договори',
    img: dogovoru,
    description: 'Enjoy Your Favorite Food From Anywhere',
    repository: 'Team project',
    technologies: ['HTML, CSS'],
    github:
      'https://github.com/OleksandrShpachuk/foodsta-team-project/graphs/contributors',
    live: 'https://oleksandrshpachuk.github.io/foodsta-team-project/',
  },

  {
    id: nanoid(),
    title: 'Завірення документів',
    img: zavirennja,
    description: 'This app is a showcase of my skills, projects, and education',
    repository: 'Individual  project',
    technologies: [' React.js'],
    github: 'https://github.com/BogdanK85/my-portfolio',
    live: 'https://bogdank85.github.io/my-portfolio/',
  },
  {
    id: nanoid(),
    title: 'Шлюбний договір',
    img: shljub,
    description: 'This app help you to add your notes, find and remove them',
    repository: 'Individual  project',
    technologies: [' React.js'],
    github: 'https://github.com/BogdanK85/notes',
    live: 'https://bogdank85.github.io/notes/',
  },
];

export const data = { projects };
