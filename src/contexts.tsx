import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@/i18n/translations';

// ─── Category ───────────────────────────────────────────────
export type Category = 'fullstack' | 'data' | 'ai';

interface CategoryContextType {
    category: Category;
    setCategory: (category: Category) => void;
    hasDismissedHint: boolean;
    dismissHint: () => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
    const [category, setCategoryState] = useState<Category>(() => {
        const saved = localStorage.getItem('user-category');
        return (saved as Category) || 'fullstack';
    });
    const [hasDismissedHint, setHasDismissedHint] = useState(() => localStorage.getItem('persona-hint-dismissed') === 'true');

    const setCategory = (newCategory: Category) => {
        setCategoryState(newCategory);
        localStorage.setItem('user-category', newCategory);
    };

    const dismissHint = () => {
        setHasDismissedHint(true);
        localStorage.setItem('persona-hint-dismissed', 'true');
    };

    return (
        <CategoryContext.Provider value={{
            category,
            setCategory,
            hasDismissedHint,
            dismissHint
        }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (!context) throw new Error('useCategory must be used within a CategoryProvider');
    return context;
};

// ─── Language & Translation ─────────────────────────────────
export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem('language');
        return (saved as Language) || 'pt';
    });

    const setLanguage = (newLang: Language) => {
        setLanguageState(newLang);
        localStorage.setItem('language', newLang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};

export const useTranslation = () => {
    const { language } = useLanguage();
    return { t: translations[language], language };
};

// ─── Theme ──────────────────────────────────────────────────
type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('theme');
        return (saved as Theme) || 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};
