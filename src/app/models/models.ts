export interface Event{
    title: string;
    description: string;
    author: Author;
    members: Member[];
}

export interface Author{
    name: string;
    jemail: string;
    token: string;
}

export interface Member{
    name: string;
    email: string;
    tolen: string;
}