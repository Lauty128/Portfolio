//------- Dependencies
import { create } from 'zustand';

interface pagesStoreInterface{
    is_inicio: boolean

    change_is_inicio: (actualState:boolean)=> void
}

export const usePagesStore = create<pagesStoreInterface>((set) => ({
    is_inicio: (window.location.pathname === '/'),

    change_is_inicio : async(actualState:boolean)=>{
        set(()=>({
            is_inicio: actualState
        }))
    }
}))