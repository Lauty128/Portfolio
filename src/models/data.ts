export interface articleInterface{
    id:String
    title: string;
    image: string;
    createdAt: string;
    alt: string;
}

export interface articlesOKResponse{
    status: number;
    data: articleInterface[];
    total: number;
}

export interface articlesErrorResponse{
    status: number;
    message: string;
    error: any;
}