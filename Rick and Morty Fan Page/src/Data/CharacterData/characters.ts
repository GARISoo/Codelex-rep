type OriginLocationProps = {
    name: string;
    url: string;
}

export type CharacterProps = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginLocationProps;
    location: OriginLocationProps;
    image?: string;
    episode: string[];
    url: string;
    created: string;
}

export default CharacterData;
