import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import { socialLinks } from '@/data/social';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-purple/20 glass-card relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple/5 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold mb-1 bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">
              Franklin Dantas
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.footer.role}
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`p-3 rounded-full glass-card border border-purple/20 ${link.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                aria-label={link.label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <link.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-6 border-t border-purple/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs text-muted-foreground">
            {t.footer.madeWith}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {t.footer.copyright} © {currentYear} Franklin Dantas
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
