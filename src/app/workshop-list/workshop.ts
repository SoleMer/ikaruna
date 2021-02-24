export interface Workshop {
    id?: number;
    name: string;
    caption: string;
    contents: string;
    modality: string;
    image?: string;
}

export interface RequestWs {
    ws: number;
    user: number;
}