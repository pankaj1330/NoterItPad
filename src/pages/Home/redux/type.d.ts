export interface NotesType {
    id : string;
    title : string;
    description : string;
    createdAt : Date;
}

export interface NotesApiResponseType {
    message: string,
    data: {
        notes: NotesType[]
    },
    statusCode: number,
}

export interface commonApiResponse {
    message : string;
    statusCode: number
}