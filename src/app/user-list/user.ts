export interface User {
    id?: number;
    username: string;
    email: string;
    phone:string;
    password:string;
    admin?:number;
}

export interface UserResponse {
    status: string;
    msg: string;
}