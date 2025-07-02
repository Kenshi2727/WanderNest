import { create } from 'zustand';

export const useNavStore = create((set, get) => ({
    navList: [
        { route: "/", label: "Home" },
    ],
    setNavList: (nav) => {
        const currentList = get().navList;
        set({ navList: nav });
    },
}));
