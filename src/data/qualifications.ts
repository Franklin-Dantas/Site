import type { Category } from '@/contexts';

interface Award {
    title: string;
    subtitle: string;
    description: string;
}

interface Certification {
    title: string;
    org: string;
    desc: string;
}

interface VolunteerItem {
    title: string;
    subtitle: string;
    description: string;
}

interface QualificationData {
    awards: Award[];
    certifications: Certification[];
    volunteer: VolunteerItem[];
}

type QualificationsByCategory = Record<Category, QualificationData>;

export const qualificationsByCategory: QualificationsByCategory = {
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
