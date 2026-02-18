import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, GraduationCap, Heart } from 'lucide-react';
import { useCategory } from '@/contexts';
import { useTranslation } from '@/contexts';
import { motion, AnimatePresence } from 'framer-motion';
import { qualificationsByCategory } from '@/data/qualifications';

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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 }
  },
};

const tabTriggerClassName = "rounded-full py-2.5 text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple data-[state=active]:to-cyan data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300";

interface QualificationCardProps {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

const QualificationCard = ({ icon, title, subtitle, description }: QualificationCardProps) => {
  return (
    <motion.div
      className="group p-5 rounded-2xl glass-card border border-border/50 hover:border-purple/40 transition-all duration-300 hover:shadow-lg"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-3 mb-3">
        {icon && (
          <motion.div
            className="mt-0.5 p-2 rounded-lg bg-purple/10 group-hover:bg-purple/20 transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {icon}
          </motion.div>
        )}
        <div className="flex-1">
          <h4 className="font-semibold text-foreground group-hover:text-purple transition-colors duration-300">
            {title}
          </h4>
          <p className="text-sm text-cyan">{subtitle}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Bottom accent line */}
      <motion.div
        className="h-0.5 mt-4 bg-gradient-to-r from-purple via-cyan to-blue rounded-full"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
};

const Qualifications = () => {
  const { category } = useCategory();
  const { t } = useTranslation();

  const data = qualificationsByCategory[category];

  return (
    <section id="qualificacoes" className="section-padding relative">
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
              key={`qual-title-${category}`}
              className="mb-4 bg-gradient-to-r from-purple via-cyan to-blue bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {t.qualifications.titles[category]}
            </motion.h2>
          </AnimatePresence>
          <p className="text-muted-foreground max-w-xl">
            {t.qualifications.description}
          </p>
        </motion.div>

        <Tabs defaultValue="awards" className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-3 h-auto p-1 rounded-full glass-card shadow-lg">
            <TabsTrigger value="awards" className={tabTriggerClassName}>
              <Award className="h-4 w-4 mr-2" />
              {t.qualifications.tabs.awards}
            </TabsTrigger>
            <TabsTrigger value="certifications" className={tabTriggerClassName}>
              <GraduationCap className="h-4 w-4 mr-2" />
              {t.qualifications.tabs.certifications}
            </TabsTrigger>
            <TabsTrigger value="volunteer" className={tabTriggerClassName}>
              <Heart className="h-4 w-4 mr-2" />
              {t.qualifications.tabs.volunteer}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="awards" className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`awards-${category}`}
                className="grid md:grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {data.awards.map((award) => (
                  <motion.div key={award.title} variants={itemVariants}>
                    <QualificationCard
                      icon={<Award className="h-5 w-5 text-highlight" />}
                      title={award.title}
                      subtitle={award.subtitle}
                      description={award.description}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          <TabsContent value="certifications" className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`certs-${category}`}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {data.certifications.map((cert) => (
                  <motion.div key={cert.title} variants={itemVariants}>
                    <QualificationCard
                      title={cert.title}
                      subtitle={cert.org}
                      description={cert.desc}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          <TabsContent value="volunteer" className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`volunteer-${category}`}
                className="grid md:grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {data.volunteer.map((vol) => (
                  <motion.div key={vol.title} variants={itemVariants}>
                    <QualificationCard
                      icon={<Heart className="h-5 w-5 text-highlight" />}
                      title={vol.title}
                      subtitle={vol.subtitle}
                      description={vol.description}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Qualifications;
