export interface Therapy {
    id?: number;
    name: string;
    description: string;
    therapist_id: number;
    username?: string;
    token?: string;
}

export interface Reply {
    status: string;
    msg: string;
    id?:number;
}