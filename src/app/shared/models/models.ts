

export interface IArticle {
    id: number;
    title: string;
    subtitle?: string;
    description?: string;
    imageUrl?: string;
    content?: string;
    dateCreated?: any;
    dateModified?: any;
    isArquived?: boolean;
    comments?: Comment[];
    category?: string;
    publisher?: User;
}

export class Comment {
    id: number;
    text: string;
    dateCreated: Date;
    user: User;
}

export class User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    isAdmin: boolean;
    isSuperAdmin: boolean;
    imageUrl?: string;
}

export class Project {
    id: number;
    name: string;
    dateStarted: Date;
    dateFinished: Date;
    volunteers: User[];
}
export class Event {
    id: number;
    name: string;
    dateStarted: any;
    dateFinished: any;
    created?: User[];
    sponsort?: string;
    type: string;
    description: string;
}
export class Blog implements IArticle {
    category: string;

    id: number;
    title: string;
    subitle: string;
    description: string;
    imageUrl: string;
    content: string;
    dateCreated: any;
    dateModified: any;
    isArquived: boolean;
    comments: Comment[];
    blogger: User;

}
export class News implements IArticle {
    category: string;
    id: number;
    title: string;
    subitle: string;
    description: string;
    imageUrl: string;
    content: string;
    dateCreated: any;
    dateModified: any;
    isArquived: boolean;
    comments: Comment[];
    creator: User;

}
