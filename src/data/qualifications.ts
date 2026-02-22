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

// ─── All awards (shared pool) ───────────────────────────────
const fundacaoEstudar: Award = {
    title: 'Fundação Estudar',
    subtitle: 'Melhor Projeto do Brasil',
    description: 'Projeto Conecta Cidadão reconhecido pela inovação em tecnologia e análise de dados públicos.',
};

const nasaSpaceApps: Award = {
    title: 'NASA Space Apps Challenge',
    subtitle: '2º Lugar Nacional',
    description: 'Solução de ML para análise de dados espaciais e visualização de missões.',
};

const hackathonDev: Award = {
    title: 'Hackathon Dev Challenge',
    subtitle: '1º Lugar',
    description: 'Desenvolvimento de aplicação full-stack em 48 horas com React e Node.js.',
};

const dataScienceSummit: Award = {
    title: 'Data Science Summit',
    subtitle: 'Melhor Dashboard',
    description: 'Dashboard de BI premiado por insights estratégicos e visualizações impactantes.',
};

const aiHackathon: Award = {
    title: 'Automation Hackathon',
    subtitle: 'Melhor Projeto de Automação',
    description: 'Script de automação com 95% de eficiência na otimização de processos de coleta de dados.',
};

// ─── All certifications (shared pool) ───────────────────────
const certFullStack = { title: 'Full-Stack Development', org: 'Meta', desc: 'React, Node.js, databases e APIs RESTful.' };
const certAWSSolutions = { title: 'AWS Solutions Architect', org: 'Amazon', desc: 'Arquitetura cloud, serverless e microserviços.' };
const certTypeScript = { title: 'TypeScript Mastery', org: 'Udemy', desc: 'TypeScript avançado para aplicações enterprise.' };
const certReact = { title: 'React Advanced Patterns', org: 'Frontend Masters', desc: 'Hooks, context, performance e testes.' };
const certNode = { title: 'Node.js Backend', org: 'Rocketseat', desc: 'APIs, autenticação, uploads e deploy.' };
const certPostgreSQL = { title: 'PostgreSQL Expert', org: 'PostgreSQL', desc: 'Modelagem, otimização e administração.' };
const certGoogleData = { title: 'Google Data Analytics', org: 'Google', desc: 'Análise de dados, SQL, visualização e storytelling.' };
const certAWSData = { title: 'AWS Data Engineer', org: 'Amazon', desc: 'Pipelines de dados, ETL e processamento em larga escala.' };
const certPowerBI = { title: 'Power BI Specialist', org: 'Microsoft', desc: 'Dashboards, DAX e modelagem para BI.' };
const certSQL = { title: 'SQL & Database Design', org: 'Stanford Online', desc: 'Modelagem relacional e otimização de queries.' };
const certSpark = { title: 'Apache Spark', org: 'Databricks', desc: 'Processamento distribuído e big data.' };
const certDataPython = { title: 'Data Engineering with Python', org: 'DataCamp', desc: 'ETL, pipelines e automação de dados.' };
const certDeepLearning = { title: 'Advanced Python Automation', org: 'Udemy', desc: 'Automação com Python, web scraping e integração de APIs.' };
const certML = { title: 'Scripting & Automation', org: 'Coursera', desc: 'Automação de tarefas, scripting em Python e Bash.' };
const certPythonDS = { title: 'Python for Automation', org: 'IBM', desc: 'Python para automação de processos e scripting.' };
const certTensorFlow = { title: 'Selenium WebDriver', org: 'Udemy', desc: 'Automação de testes e web scraping com Selenium.' };
const certNLP = { title: 'GitHub Actions & CI/CD', org: 'GitHub', desc: 'Automação de workflows e deploy contínuo.' };
const certMLOps = { title: 'DevOps & Automation', org: 'Google Cloud', desc: 'Infraestrutura automatizada e deploy contínuo.' };

// ─── All volunteer items (shared pool) ──────────────────────
const volMentor: VolunteerItem = {
    title: 'Mentor de Desenvolvimento',
    subtitle: 'Comunidade Dev Local',
    description: 'Mentoria para desenvolvedores iniciantes em programação web e boas práticas.',
};

const volReactWorkshops: VolunteerItem = {
    title: 'Workshops de React',
    subtitle: 'Universidade',
    description: 'Ministrei workshops sobre React e desenvolvimento moderno para estudantes.',
};

const volDataForGood: VolunteerItem = {
    title: 'Data for Good',
    subtitle: 'Projetos Sociais',
    description: 'Análise de dados voluntária para ONGs e iniciativas de impacto social.',
};

const volMonitorData: VolunteerItem = {
    title: 'Monitor de Análise de Dados',
    subtitle: 'Universidade',
    description: 'Auxílio a estudantes em estatística, SQL e ferramentas de análise.',
};

const volAISocial: VolunteerItem = {
    title: 'Automação para o Bem Social',
    subtitle: 'Projetos Comunitários',
    description: 'Desenvolvimento de soluções automatizadas para resolver problemas sociais.',
};

const volMLWorkshop: VolunteerItem = {
    title: 'Workshop de Automação',
    subtitle: 'Eventos Acadêmicos',
    description: 'Palestras e hands-on sobre automação com Python e scripting para iniciantes.',
};

// ─── Ordered by relevance per category ──────────────────────
export const qualificationsByCategory: QualificationsByCategory = {
    fullstack: {
        awards: [fundacaoEstudar, hackathonDev, nasaSpaceApps, dataScienceSummit, aiHackathon],
        certifications: [
            certFullStack, certReact, certNode, certTypeScript, certAWSSolutions, certPostgreSQL,
            certSQL, certGoogleData, certPowerBI, certAWSData, certDataPython, certSpark,
            certPythonDS, certML, certDeepLearning, certTensorFlow, certNLP, certMLOps,
        ],
        volunteer: [volMentor, volReactWorkshops, volDataForGood, volMonitorData, volAISocial, volMLWorkshop],
    },
    data: {
        awards: [fundacaoEstudar, dataScienceSummit, nasaSpaceApps, hackathonDev, aiHackathon],
        certifications: [
            certGoogleData, certAWSData, certPowerBI, certSQL, certSpark, certDataPython,
            certPostgreSQL, certFullStack, certPythonDS, certAWSSolutions, certML, certDeepLearning,
            certReact, certNode, certTypeScript, certTensorFlow, certNLP, certMLOps,
        ],
        volunteer: [volDataForGood, volMonitorData, volMentor, volReactWorkshops, volAISocial, volMLWorkshop],
    },
    ai: {
        awards: [nasaSpaceApps, aiHackathon, fundacaoEstudar, dataScienceSummit, hackathonDev],
        certifications: [
            certDeepLearning, certML, certTensorFlow, certNLP, certMLOps, certPythonDS,
            certSpark, certGoogleData, certAWSData, certDataPython, certPowerBI, certSQL,
            certAWSSolutions, certFullStack, certReact, certNode, certTypeScript, certPostgreSQL,
        ],
        volunteer: [volAISocial, volMLWorkshop, volDataForGood, volMonitorData, volMentor, volReactWorkshops],
    },
};
