import type { ProjectsByCategory } from '@/types';
import conectaImg from '@/image/project-conecta.jpg';
import nasaImg from '@/image/project-nasa.jpg';
import analyticsImg from '@/image/project-analytics.jpg';

export const projectsByCategory: ProjectsByCategory = {
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
