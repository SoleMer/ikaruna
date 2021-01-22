export interface Therapy {
    name: string;
    description: string;
    therapist: string;
    id?: number;
    //la terapeuta deberia estar asociada a un usuario admin
}