import { create } from "zustand";
import { Users } from "../types/users";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "../../../store/zustandStore";

export interface UserState {
    users: Users[]
    user: Users | null
    setUser: (user: Users | null) => void 
    getUser: (id: string) => void
    updateUser: (user: Users) => void
}

const dummyData: Users[] = [
    {
        id: '1',
        email: 'o',
        pass: 'a',
        profilePicture: '',
        username: 'Oanana U',
        favGenre: ['indie', 'alternative'],
    },
    {
        id: '2',
        email: 'haha@yahoo.com',
        pass: 'aaa',
        profilePicture: '',
        username: 'Banana U',
        favGenre: ['indie', 'alternative'],
    },
    {
        id: '3',
        email: 'baba@yahoo.com',
        pass: 'lll',
        profilePicture: '',
        username: 'Lanana U',
        favGenre: ['indie', 'alternative'],
    }
]

export const useAuthStore = create(
    persist<UserState>(
        (set, get) => ({
            users: dummyData,
            user: null,
            setUser: (newUser: Users | null) => {
                set((state:UserState) => ({user: newUser}))
            },
            getUser: (currentId: string) => {
                 const response = get().users?.find((item:Users)=> item.id === currentId)
                 set((state:UserState)=>({...state, user: response}))
                
            },
            updateUser: (newUser: Users) => {
                const index = get().users?.findIndex((item: Users) => item.id === newUser?.id)
                const newUsers = get().users
                newUsers[index] = newUser
                set((state:UserState) => ({...state, user: newUser}))
            }
        }),
        {
            name: 'auth-storage-2',
            storage: createJSONStorage(() => zustandStorage)
        }
    )
)