import { Badge } from '@/components/ui/badge';
import { useCategory } from '@/contexts';
import { useTranslation } from '@/contexts';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const { category } = useCategory();
  const { t } = useTranslation();

  const skills = t.skills[category];
  const aboutContent = t.about[category];

  const renderText = (text: string) => {
    return text
      .replace(/<highlight>(.*?)<\/highlight>/g, '<span class="text-foreground font-medium">$1</span>')
      .replace(/<award>(.*?)<\/award>/g, '<span class="text-highlight font-medium">$1</span>');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
  };

  return (
    <section id="sobre" className="section-padding relative">
      <div className="container-custom">
        <div className="max-w-3xl">
          <motion.h2
            className="mb-6 bg-gradient-to-r from-purple via-cyan to-blue bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t.about.title}
          </motion.h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              className="glass-card p-6 md:p-8 rounded-2xl space-y-4 text-muted-foreground leading-relaxed shadow-xl border-purple/20"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.p
                variants={itemVariants}
                dangerouslySetInnerHTML={{ __html: renderText(aboutContent.p1) }}
              />
              <motion.p
                variants={itemVariants}
                dangerouslySetInnerHTML={{ __html: renderText(aboutContent.p2) }}
              />
              <motion.p
                variants={itemVariants}
                dangerouslySetInnerHTML={{ __html: renderText(aboutContent.p3) }}
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`skills-${category}`}
              className="flex flex-wrap gap-2 mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={skillVariants}
                  custom={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-3 py-1.5 text-sm font-normal rounded-full glass-card border-purple/20 hover:border-purple/40 hover:shadow-lg hover:glow-purple transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default About;
