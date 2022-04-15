import { Photo } from "./photo";

export interface Member {
    id: number;
    username: string;
    photoUrl: string;
    gender: string;
    knownAs: string;
    introduction: string;
    lookingFor: string;
    interests: string;
    country: string;
    city: string;
    age: number;
    created: Date;
    lastActive: Date;
    photos: Photo[];
}

