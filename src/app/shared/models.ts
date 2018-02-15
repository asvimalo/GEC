export interface IArticle {
    id: number;
    title: string;
    subitle?: string;
    description?: string;
    imageUrl?: string;
    content?: string;
    dateCreated?: Date;
    dateModified?: Date;
    isArquived?: boolean;
    comments?: Comment[];
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

export class Blog implements IArticle {

    id: number;
    title: string;
    subitle: string;
    description: string;
    imageUrl: string;
    content: string;
    dateCreated: Date;
    dateModified: Date;
    isArquived: boolean;
    comments: Comment[];
    blogger: User;

}
export class News implements IArticle {
    id: number;
    title: string;
    subitle: string;
    description: string;
    imageUrl: string;
    content: string;
    dateCreated: Date;
    dateModified: Date;
    isArquived: boolean;
    comments: Comment[];
    creator: User;

}
export class Project {
    id: number;
    name: string;
    dateStarted: Date;
    dateFinished: Date;
    volunteers: User[];
}
