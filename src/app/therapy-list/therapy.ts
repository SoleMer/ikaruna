export interface Therapy {
    id?: number;
    name: string;
    description: string;
    therapist_id: number;
    therapist_name?: string;
    //la terapeuta deberia estar asociada a un usuario admin
}