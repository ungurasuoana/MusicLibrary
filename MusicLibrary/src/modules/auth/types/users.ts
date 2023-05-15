import { MusicListRef } from "../../music-library/types/musicListRef";

export interface Users {
    id: string,
    email: string | undefined,
    pass: string | undefined,
    profilePicture: string | undefined,
    username: string | undefined,
    favGenre: string[],
    favSongs: MusicListRef[]
}