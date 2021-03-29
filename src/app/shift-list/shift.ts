export interface Shift {
    id?:number;
    therapy: number;
    name?: string;
    date: number;
    time?: number;
    patient: number;
    patient_name?: string;
    status: number; 
    token?: string;
}