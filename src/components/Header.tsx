import { useState, useEffect } from 'react';
import { Sun, Moon, Terminal, Database, Zap } from 'lucide-react';
import { useTheme, useCategory, useLanguage, type Category, type Language } from '@/contexts';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import globeGif from '@/image/globe-spinning.gif';
import escudoImg from '@/image/ShieldLogo.svg';
import PersonaHint from '@/components/PersonaSelector';

const categories: { id: Category; icon: React.ReactNode; label: string }[] = [
  { id: 'fullstack', icon: <Terminal className="h-6 w-6" />, label: 'Full-Stack' },
  { id: 'data', icon: <Database className="h-6 w-6" />, label: 'Dados' },
  { id: 'ai', icon: <Zap className="h-6 w-6" />, label: 'Automação' },
];

const languages: { id: Language; label: string; flag: string }[] = [
  { id: 'pt', label: 'Português', flag: '🇧🇷' },
  { id: 'en', label: 'English', flag: '🇺🇸' },
  { id: 'es', label: 'Español', flag: '🇪🇸' },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { category, setCategory } = useCategory();
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'glass-card shadow-lg border-b border-border/50'
        : 'bg-transparent'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group relative flex items-center justify-center p-1.5 rounded-xl transition-all duration-500 hover:scale-110 active:scale-95 overflow-hidden"
            aria-label="Home"
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple/20 via-cyan/20 to-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Animated Border/Ring */}
            <div className="absolute inset-0 border border-white/10 group-hover:border-purple/50 rounded-xl transition-colors duration-500" />

            <div className="relative h-10 w-10 md:h-12 md:w-12 flex items-center justify-center">
              <img
                src={escudoImg}
                alt="Franklin D. Logo"
                className="h-full w-full object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </button>

          {/* Category Icons */}
          <div className="flex items-center relative">
            <div className="flex items-center glass-card rounded-full p-1 gap-0.5 shadow-md">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`p-3 rounded-full transition-all duration-300 ${category === cat.id
                    ? 'bg-gradient-to-br from-purple to-cyan text-white shadow-lg glow-purple scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:scale-105'
                    }`}
                  title={cat.label}
                >
                  {cat.icon}
                </button>
              ))}
            </div>
            <PersonaHint />
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full transition-all duration-300 text-muted-foreground hover:text-purple hover:bg-muted/50 hover:scale-110 hover:rotate-12"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="p-3 rounded-full transition-all duration-300 hover:bg-muted/50 overflow-hidden hover:scale-110"
                  aria-label="Selecionar idioma"
                >
                  <img
                    src={globeGif}
                    alt="Globo girando"
                    className="h-12 w-12 object-cover rounded-full"
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass-card border border-border/50 shadow-xl">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.id}
                    onClick={() => setLanguage(lang.id)}
                    className={`cursor-pointer transition-all duration-200 ${language === lang.id ? 'bg-purple/20 text-purple' : 'hover:bg-muted/50'
                      }`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
