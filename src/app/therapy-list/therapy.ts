export interface Therapy {
    id?: number;
    name: string;
    description: string;
    therapist_id: number;
    username?: string;
    userlogged?: number;
}

export interface Reply {
    status: string;
    msg: string;
    id?:number;
}