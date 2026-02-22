import { Terminal, Database, Zap, Sparkles, X, ChevronUp } from 'lucide-react';
import { useCategory, useTranslation, type Category } from '@/contexts';
import { motion, AnimatePresence } from 'framer-motion';

const PersonaHint = () => {
    const { category, setCategory, hasDismissedHint, dismissHint } = useCategory();
    const { t } = useTranslation();

    const options: { id: Category; icon: any; title: string; color: string }[] = [
        {
            id: 'fullstack',
            icon: Terminal,
            title: 'Full-Stack',
            color: 'from-purple to-blue-600',
        },
        {
            id: 'data',
            icon: Database,
            title: 'Dados',
            color: 'from-cyan-500 to-blue-500',
        },
        {
            id: 'ai',
            icon: Zap,
            title: 'Automação',
            color: 'from-purple-500 to-pink-500',
        },
    ];

    // Se já foi dispensado, não mostra
    if (hasDismissedHint) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200, delay: 1 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[calc(100vw-2rem)] md:w-[450px] z-[60]"
            >
                <div className="glass-card p-6 rounded-3xl border border-purple/30 shadow-2xl overflow-hidden relative">
                    {/* Background glow base */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple/20 blur-[60px] rounded-full pointer-events-none" />

                    <button
                        onClick={dismissHint}
                        className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground"
                    >
                        <X className="h-4 w-4" />
                    </button>

                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple to-cyan flex-shrink-0 flex items-center justify-center text-white shadow-lg glow-purple">
                            <Sparkles className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">
                                {t.selection.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {t.selection.subtitle}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        {options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => {
                                    setCategory(option.id);
                                }}
                                className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all duration-300 ${category === option.id
                                    ? 'bg-purple/10 border-purple/50 text-purple shadow-sm'
                                    : 'border-border/50 hover:border-purple/30 hover:bg-muted/30'
                                    }`}
                            >
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${option.color} flex items-center justify-center text-white shadow-sm`}>
                                    <option.icon className="h-4 w-4" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-wider">{option.title}</span>
                            </button>
                        ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-border/30 flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <ChevronUp className="h-3 w-3 text-purple animate-bounce" />
                            {t.selection.hint}
                        </span>
                        <button
                            onClick={dismissHint}
                            className="font-bold text-purple hover:underline"
                        >
                            {t.selection.dismiss}
                        </button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PersonaHint;
