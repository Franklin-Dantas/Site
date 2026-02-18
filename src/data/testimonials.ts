export interface Testimonial {
    quote: string;
    name: string;
    position: string;
}

export const testimonials: Testimonial[] = [
    {
        quote: 'Franklin demonstrou habilidades excepcionais em análise de dados e desenvolvimento durante o projeto Conecta Cidadão. Sua capacidade de traduzir requisitos complexos em soluções elegantes é impressionante.',
        name: 'Maria Silva',
        position: 'Product Manager, Fundação Estudar',
    },
    {
        quote: 'Trabalhar com Franklin no Hackathon da NASA foi uma experiência incrível. Sua expertise em processar e visualizar grandes volumes de dados foi fundamental para o sucesso do projeto.',
        name: 'Carlos Mendes',
        position: 'Data Scientist, NASA Space Apps',
    },
    {
        quote: 'Franklin não é apenas um desenvolvedor talentoso, mas também um mentor dedicado. Sua paixão por ensinar e compartilhar conhecimento transforma projetos e pessoas ao seu redor.',
        name: 'Ana Rodrigues',
        position: 'Tech Lead, Startup de Tecnologia',
    },
    {
        quote: 'A combinação de habilidades técnicas em full-stack e conhecimento profundo em dados faz de Franklin um profissional diferenciado. Seus dashboards de BI transformaram nossa tomada de decisão.',
        name: 'João Santos',
        position: 'CTO, Empresa de Analytics',
    },
];
