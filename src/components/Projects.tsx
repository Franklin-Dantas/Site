import ProjectCard from './ProjectCard';
import { useCategory } from '@/contexts/CategoryContext';
import { useTranslation } from '@/hooks/useTranslation';
import { motion, AnimatePresence } from 'framer-motion';
import conectaImg from '@/assets/project-conecta.jpg';
import nasaImg from '@/assets/project-nasa.jpg';
import analyticsImg from '@/assets/project-analytics.jpg';

const Projects = () => {
  const { category } = useCategory();
  const { t } = useTranslation();

  const allProjects = {
    fullstack: [
      {
        image: conectaImg,
        title: 'Conecta Cidadão',
        description: 'Plataforma web full-stack conectando cidadãos a serviços públicos com React, Node.js e PostgreSQL.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
        featured: true,
      },
      {
        image: analyticsImg,
        title: 'E-commerce Platform',
        description: 'Sistema completo de e-commerce com autenticação, carrinho e pagamentos integrados.',
        tags: ['Next.js', 'Prisma', 'Stripe', 'Tailwind'],
        featured: false,
      },
      {
        image: nasaImg,
        title: 'API RESTful Microservices',
        description: 'Arquitetura de microserviços escalável com Docker, Kubernetes e CI/CD.',
        tags: ['Docker', 'Kubernetes', 'Node.js', 'MongoDB'],
        featured: false,
      },
    ],
    data: [
      {
        image: conectaImg,
        title: 'Conecta Cidadão - Analytics',
        description: 'Plataforma premiada pela Fundação Estudar com análise de dados e insights públicos.',
        tags: ['Python', 'PostgreSQL', 'Data Analytics', 'ETL'],
        featured: true,
      },
      {
        image: analyticsImg,
        title: 'Dashboard BI Empresarial',
        description: 'Sistema de Business Intelligence com ETL automatizado e visualizações interativas.',
        tags: ['Power BI', 'SQL', 'Python', 'Azure'],
        featured: true,
      },
      {
        image: nasaImg,
        title: 'Pipeline de Dados Real-Time',
        description: 'Pipeline de processamento de dados em tempo real com Apache Kafka e Spark.',
        tags: ['Apache Kafka', 'Spark', 'AWS', 'Python'],
        featured: false,
      },
    ],
    ai: [
      {
        image: nasaImg,
        title: 'NASA Space Apps Challenge',
        description: '2º lugar no Hackathon da NASA com ML para visualização de dados espaciais.',
        tags: ['Python', 'Machine Learning', 'TensorFlow', 'APIs'],
        featured: true,
      },
      {
        image: analyticsImg,
        title: 'Modelo de Previsão de Vendas',
        description: 'Sistema de previsão com modelos de séries temporais e redes neurais.',
        tags: ['Python', 'LSTM', 'Prophet', 'Scikit-learn'],
        featured: true,
      },
      {
        image: conectaImg,
        title: 'Chatbot com NLP',
        description: 'Assistente virtual inteligente usando processamento de linguagem natural.',
        tags: ['OpenAI', 'LangChain', 'Python', 'FastAPI'],
        featured: false,
      },
    ],
  };

  const projects = allProjects[category];

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
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
