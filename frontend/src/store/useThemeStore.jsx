import { create } from 'zustand';

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("theme") || "cupcake", // Default theme
    setTheme: (newTheme) => {
        set({ theme: newTheme });
        localStorage.setItem("theme", newTheme);
    },
}));