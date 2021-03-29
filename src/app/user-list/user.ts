export interface User {
    id?: number;
    username: string;
    email: string;
    phone:string;
    password?: string;
    admin?:number;
    token?: string;
}

export interface UserStatus {
    status: string;
    msg: string;
    token: string;
    id_user: number;
    isAdmin: number;
}

export interface UserLogin {
    email: string;
    password:string;
    token: string;
}
