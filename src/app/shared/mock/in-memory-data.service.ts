import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IArticle, Event, Project, User } from './../models/models';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

     const articles: IArticle[] = [
      {
          id: 11,
          title: 'Mr. Nice',
          description: '',
          imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          content: '',
          dateCreated: Date.now(),
          isArquived: false,
          category: 'news'
        },
      {
        id: 12,
        title: 'Narco',
        subtitle: '',
        description: '',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        dateCreated: Date.now(),
        isArquived: false,
        category: 'news'
      },
      {
        id: 13, title: 'Bombasto',
        description: '',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        dateCreated: Date.now(),
        isArquived: false,
        category: 'blog'
      },
      {
        id: 14, title: 'Celeritas',
        description: '',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        dateCreated: Date.now(),
        isArquived: false,
        category: 'news'
      },
      {
        id: 15,
        title: 'Magneta' ,
        description: '',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        dateCreated: Date.now(),
        isArquived: false,
        category: 'blog'
      },
      {
        id: 16, title: 'RubberMan',
        description: '',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        dateCreated: Date.now(),
        isArquived: false,
        category: 'blog'
      },
      {
        id: 17,
        title: 'Dynama',
        description: '',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: ``,
        dateCreated: Date.now(),
        isArquived: false,
        category: 'news'
      },
      {
        id: 18,
        title: 'Dr IQ',
        description: '',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        dateCreated: Date.now(),
        isArquived: false,
        category: 'blog'
      },
      {
        id: 19,
        title: 'Magma' ,
        description: '',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        dateCreated: Date.now(),
        isArquived: false,
        category: 'news'
      },
      {
        id: 20,
        title: 'Tornado',
        description: '',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        dateCreated: Date.now(),
        isArquived: false,
        category: 'blog'
    }];

    const events: Event[] = [
        {
            id: 11,
            name: 'Jazzy Jazz',
            description: '',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            content: '',
            dateStarted: Date.now(),
            type: 'Jazz Concert',
            category: 'concert'
          },
        {
            id: 12,
            name: 'Eco Market Gec',
            description: '',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            content: '',
            dateStarted: Date.now(),
            type: 'Eco Market',
            category: 'market'
        },
        {
            id: 13,
            name: 'Cascais Limpo',
            description: '',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            content: '',
            dateStarted: Date.now(),
            type: 'recycle',
            category: 'volunteer'
        },
        {
            id: 14,
            name: 'Os Reciclas',
            description: '',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            content: '',
            dateStarted: Date.now(),
            type: 'Hip Hop Concert',
            category: 'concert'
        },
        {
            id: 15,
            name: 'Limpa a Praia',
            description: '',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            content: '',
            dateStarted: Date.now(),
            type: 'cleaning',
            category: 'volunteer'
        }];

    const projects: Project[] = [
        {
            id: 15,
            name: 'Cascais Vivo',
            description: '',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            content: '',
            dateStarted: Date.now(),
            type: 'education',
            category: 'volunteer'
          },
        {
            id: 16,
            name: 'Ribeira Maya',
            description: '',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            content: '',
            dateStarted: Date.now(),
            type: 'cleaning',
            category: 'volunteer'
        },
        {
            id: 16,
            name: 'Ribeira das Fontes',
            description: '',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            content: '',
            dateStarted: Date.now(),
            type: 'cleaning',
            category: 'volunteer'
        },
        {
            id: 17,
            name: 'Car-Redux',
            description: '',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            content: '',
            dateStarted: Date.now(),
            type: 'movement',
            category: 'volunteer'
        },
        {
            id: 18,
            name: 'Bosque de Sintra',
            description: '',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            content: '',
            dateStarted: Date.now(),
            type: 'plantar',
            category: 'volunteer'
        },
        {
            id: 19,
            name: 'Serra Da Estrela - Fenix',
            description: '',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            content: '',
            dateStarted: Date.now(),
            type: 'reconstruct nature',
            category: 'volunteer'
    }];
     const users: User[] = [
      {
        id: 1,
        firstname: 'Andrés',
        lastname: 'mtz',
        username: 'asvimalo',
        email: 'as@as.com',
        password: '1234',
        isAdmin: true,
        isSuperAdmin: true,
        imageUrl: ''
    }];
    return { articles, events, projects, users };
  }
}

