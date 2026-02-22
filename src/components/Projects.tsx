import ProjectCard from './ProjectCard';
import { useCategory, useTranslation } from '@/contexts';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsByCategory } from '@/data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.3 }
  },
};

const Projects = () => {
  const { category } = useCategory();
  const { t } = useTranslation();

  const projects = projectsByCategory[category];

  return (
    <section id="projetos" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={`title-${category}`}
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {t.projects.titles[category]}
            </motion.h2>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${category}`}
              className="text-muted-foreground max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {t.projects.descriptions[category]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {projects.map((project) => (
              <motion.div key={`${category}-${project.title}`} variants={itemVariants}>
                <ProjectCard {...project} featuredLabel={t.projects.featured} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
