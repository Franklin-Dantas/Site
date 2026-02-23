import { Github, Linkedin, Instagram, Youtube, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/contexts';
import { motion } from 'framer-motion';
import profilePhoto from '@/image/profile-photo.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
};

const photoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 }
  },
};

const socialVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  },
};

const Hero = () => {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-2" variants={itemVariants}>
              <p className="text-muted-foreground text-sm md:text-base font-medium tracking-wider uppercase">
                {t.hero.role}
              </p>
              <h1 className="bg-gradient-to-r from-purple via-cyan to-blue bg-clip-text text-transparent animate-gradient">
                Franklin Dantas
              </h1>
            </motion.div>

            <motion.p
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              <span className="text-purple font-semibold block mb-2">{t.hero.tagline}</span>
              {t.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-3 pt-2"
              variants={itemVariants}
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="rounded-full px-6 bg-gradient-to-r from-purple to-cyan hover:from-purple/90 hover:to-cyan/90 text-white border-0 shadow-lg glow-purple transition-all duration-300 hover:scale-105"
              >
                {t.hero.viewProjects}
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6 glass-card border-purple/30 hover:border-purple/50 hover:bg-purple/10 transition-all duration-300 hover:scale-105"
              >
                <a href="mailto:jfranklin.a.d@gmail.com">
                  <FileText className="mr-2 h-4 w-4" />
                  {t.hero.resume}
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 pt-4"
              variants={containerVariants}
            >
              <motion.a
                href="https://github.com/Franklin-Dantas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple transition-all duration-300 p-2 rounded-full hover:bg-purple/10"
                aria-label="GitHub"
                variants={socialVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/franklin.a.d/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-pink-500 transition-all duration-300 p-2 rounded-full hover:bg-pink-500/10"
                aria-label="Instagram"
                variants={socialVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-6 w-6" />
              </motion.a>

              <motion.a
                href="https://www.youtube.com/@Franklin-Dantas-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-red-500 transition-all duration-300 p-2 rounded-full hover:bg-red-500/10"
                aria-label="YouTube"
                variants={socialVariants}
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube className="h-6 w-6" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/franklin-dantas1998/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyan transition-all duration-300 p-2 rounded-full hover:bg-cyan/10"
                aria-label="LinkedIn"
                variants={socialVariants}
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Photo */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={photoVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--purple)), hsl(var(--cyan)), hsl(var(--blue)))',
                  padding: '4px',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden relative z-10 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profilePhoto}
                  alt="Franklin Dantas"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Enhanced decorative elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 bg-purple/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-cyan/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 -right-12 w-24 h-24 bg-blue/30 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2],
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
