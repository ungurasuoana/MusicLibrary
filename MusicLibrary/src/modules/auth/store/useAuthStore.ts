import { create } from "zustand";
import { Users } from "../types/users";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "../../../store/zustandStore";
import { MusicListRef } from "../../music-library/types/musicListRef";
import { useEffect } from "react";

export interface UserState {
    users: Users[]
    user: Users | null
    setUser: (user: Users | null) => void
    getUser: (id: string) => void
    updateUser: (user: Users) => void
    updateFavs: (user: Users, fav: MusicListRef) => void
    updatePref: (user: Users, pref: string) => void
}

const dummyData: Users[] = [
    {
        id: '1',
        email: 'o',
        pass: 'a',
        profilePicture: '',
        username: 'Oanana U',
        favGenre: ['Indie', 'Alternative'],
        favSongs: []
    },
    {
        id: '2',
        email: 'haha@yahoo.com',
        pass: 'aaa',
        profilePicture: '',
        username: 'Banana U',
        favGenre: ['Indie', 'Alternative'],
        favSongs: []
    },
    {
        id: '3',
        email: 'baba@yahoo.com',
        pass: 'lll',
        profilePicture: '',
        username: 'Lanana U',
        favGenre: ['Indie', 'Alternative'],
        favSongs: []
    }
]

export const useAuthStore = create(
    persist<UserState>(
        (set, get) => ({
            users: dummyData,
            user: null,
            setUser: (newUser: Users | null) => {
                set((state: UserState) => ({ user: newUser }))
            },
            getUser: (currentId: string) => {
                const response = get().users?.find((item: Users) => item.id === currentId)
                set((state: UserState) => ({ ...state, user: response }))

            },
            updateUser: (newUser: Users) => {
                const index = get().users?.findIndex((item: Users) => item.id === newUser?.id)
                const newUsers = get().users
                newUsers[index] = newUser
                set((state: UserState) => ({ ...state, users: newUsers, user: newUser }))
            },
            updateFavs: (currentUser: Users, currentFav: MusicListRef) => {
                const index = get().users?.findIndex((item: Users) =>
                    item.id === currentUser?.id)

                let userFav = currentUser?.favSongs
                console.log(currentFav.id, currentUser.favSongs)
                const favorite = userFav?.find(item => item.id === currentFav.id)
                if (favorite === undefined) {
                    userFav.push(currentFav)
                } else {
                    userFav = userFav.filter(item => item.id !== currentFav.id)
                }

                const newUser = { ...currentUser, favSongs: userFav }
                const newUsers = get().users
                newUsers[index] = newUser

                set((state: UserState) => ({ ...state, users: newUsers, user: newUser }))
            },
            updatePref: (currentUser: Users, pref: string) => {
                const index = get().users?.findIndex((item: Users) =>
                    item.id === currentUser?.id)

                let userPref = currentUser?.favGenre
                const favorite = userPref?.find((item:string) => item === pref)
                if (favorite === undefined) {
                    userPref.push(pref)
                } else {
                    userPref = userPref.filter((item:string) => item !== pref)
                }

                const newUser = { ...currentUser, favGenre: userPref }
                const newUsers = get().users
                newUsers[index] = newUser

                set((state: UserState) => ({ ...state, users: newUsers, user: newUser }))
            }
        }),
        {
            name: 'auth-storage-5',
            storage: createJSONStorage(() => zustandStorage)
        }
    )
)