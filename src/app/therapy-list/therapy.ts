export interface Therapy {
    id?: number;
    name: string;
    description: string;
    therapist_id: number;
    //la terapeuta deberia estar asociada a un usuario admin
}