import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, GraduationCap, Heart } from 'lucide-react';
import { useCategory } from '@/contexts/CategoryContext';
import { useTranslation } from '@/hooks/useTranslation';
import { motion, AnimatePresence } from 'framer-motion';

const Qualifications = () => {
  const { category } = useCategory();
  const { t } = useTranslation();

  const qualifications = {
    fullstack: {
      awards: [
        {
          title: 'Fundação Estudar',
          subtitle: 'Melhor Projeto Full-Stack',
          description: 'Projeto Conecta Cidadão reconhecido pela arquitetura web robusta e escalável.',
        },
        {
          title: 'Hackathon Dev Challenge',
          subtitle: '1º Lugar',
          description: 'Desenvolvimento de aplicação full-stack em 48 horas com React e Node.js.',
        },
      ],
      certifications: [
        { title: 'Full-Stack Development', org: 'Meta', desc: 'React, Node.js, databases e APIs RESTful.' },
        { title: 'AWS Solutions Architect', org: 'Amazon', desc: 'Arquitetura cloud, serverless e microserviços.' },
        { title: 'TypeScript Mastery', org: 'Udemy', desc: 'TypeScript avançado para aplicações enterprise.' },
        { title: 'React Advanced Patterns', org: 'Frontend Masters', desc: 'Hooks, context, performance e testes.' },
        { title: 'Node.js Backend', org: 'Rocketseat', desc: 'APIs, autenticação, uploads e deploy.' },
        { title: 'PostgreSQL Expert', org: 'PostgreSQL', desc: 'Modelagem, otimização e administração.' },
      ],
      volunteer: [
        {
          title: 'Mentor de Desenvolvimento',
          subtitle: 'Comunidade Dev Local',
          description: 'Mentoria para desenvolvedores iniciantes em programação web e boas práticas.',
        },
        {
          title: 'Workshops de React',
          subtitle: 'Universidade',
          description: 'Ministrei workshops sobre React e desenvolvimento moderno para estudantes.',
        },
      ],
    },
    data: {
      awards: [
        {
          title: 'Fundação Estudar',
          subtitle: 'Melhor Projeto do Brasil',
          description: 'Projeto Conecta Cidadão reconhecido pela inovação em análise de dados públicos.',
        },
        {
          title: 'Data Science Summit',
          subtitle: 'Melhor Dashboard',
          description: 'Dashboard de BI premiado por insights estratégicos e visualizações impactantes.',
        },
      ],
      certifications: [
        { title: 'Google Data Analytics', org: 'Google', desc: 'Análise de dados, SQL, visualização e storytelling.' },
        { title: 'AWS Data Engineer', org: 'Amazon', desc: 'Pipelines de dados, ETL e processamento em larga escala.' },
        { title: 'Power BI Specialist', org: 'Microsoft', desc: 'Dashboards, DAX e modelagem para BI.' },
        { title: 'SQL & Database Design', org: 'Stanford Online', desc: 'Modelagem relacional e otimização de queries.' },
        { title: 'Apache Spark', org: 'Databricks', desc: 'Processamento distribuído e big data.' },
        { title: 'Data Engineering with Python', org: 'DataCamp', desc: 'ETL, pipelines e automação de dados.' },
      ],
      volunteer: [
        {
          title: 'Data for Good',
          subtitle: 'Projetos Sociais',
          description: 'Análise de dados voluntária para ONGs e iniciativas de impacto social.',
        },
        {
          title: 'Monitor de Análise de Dados',
          subtitle: 'Universidade',
          description: 'Auxílio a estudantes em estatística, SQL e ferramentas de análise.',
        },
      ],
    },
    ai: {
      awards: [
        {
          title: 'NASA Space Apps Challenge',
          subtitle: '2º Lugar Nacional',
          description: 'Solução de ML para análise de dados espaciais e visualização de missões.',
        },
        {
          title: 'AI Hackathon',
          subtitle: 'Melhor Modelo Preditivo',
          description: 'Modelo de machine learning com 95% de acurácia em classificação de dados.',
        },
      ],
      certifications: [
        { title: 'Deep Learning Specialization', org: 'DeepLearning.AI', desc: 'Redes neurais, CNNs, RNNs e transformers.' },
        { title: 'Machine Learning', org: 'Stanford Online', desc: 'Algoritmos de ML, regressão, classificação.' },
        { title: 'Python for Data Science', org: 'IBM', desc: 'Python para ciência de dados e ML.' },
        { title: 'TensorFlow Developer', org: 'Google', desc: 'Desenvolvimento de modelos com TensorFlow.' },
        { title: 'NLP with Transformers', org: 'Hugging Face', desc: 'Processamento de linguagem natural moderno.' },
        { title: 'MLOps Fundamentals', org: 'Google Cloud', desc: 'Deploy e monitoramento de modelos em produção.' },
      ],
      volunteer: [
        {
          title: 'AI for Social Good',
          subtitle: 'Projetos Comunitários',
          description: 'Desenvolvimento de soluções de IA para resolver problemas sociais.',
        },
        {
          title: 'Workshop de Machine Learning',
          subtitle: 'Eventos Acadêmicos',
          description: 'Palestras e hands-on sobre introdução ao machine learning para iniciantes.',
        },
      ],
    },
  };

  const data = qualifications[category];

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
            <TabsTrigger
              value="awards"
              className="rounded-full py-2.5 text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple data-[state=active]:to-cyan data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
              <Award className="h-4 w-4 mr-2" />
              {t.qualifications.tabs.awards}
            </TabsTrigger>
            <TabsTrigger
              value="certifications"
              className="rounded-full py-2.5 text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple data-[state=active]:to-cyan data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
              <GraduationCap className="h-4 w-4 mr-2" />
              {t.qualifications.tabs.certifications}
            </TabsTrigger>
            <TabsTrigger
              value="volunteer"
              className="rounded-full py-2.5 text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple data-[state=active]:to-cyan data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
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

export default Qualifications;
