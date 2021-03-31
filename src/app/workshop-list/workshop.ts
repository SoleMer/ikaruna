export interface Workshop {
    id?: number;
    name: string;
    caption: string;
    contents: string;
    modality: string;
    image?: string;
    token?: string;
    delete?: boolean;
}

export interface RequestWs {
    ws: number;
    user: number;
}