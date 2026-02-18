import { Quote } from 'lucide-react';
import { useTranslation } from '@/contexts';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { testimonials } from '@/data/testimonials';

const Recommendations = () => {
  const { t } = useTranslation();

  return (
    <section id="recomendacoes" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 bg-gradient-to-r from-purple via-cyan to-blue bg-clip-text text-transparent">
            {t.recommendations.title}
          </h2>
          <p className="text-muted-foreground max-w-xl">
            {t.recommendations.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <motion.div
                    className="h-full p-6 rounded-2xl glass-card border border-purple/20 hover:border-purple/40 hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="inline-block p-3 rounded-full bg-purple/10"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Quote className="h-6 w-6 text-purple" />
                    </motion.div>

                    <p className="text-muted-foreground leading-relaxed my-6">
                      "{testimonial.quote}"
                    </p>

                    <div className="pt-4 border-t border-purple/20">
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-cyan">
                        {testimonial.position}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0 rounded-full glass-card border-purple/20 hover:border-purple/40 hover:bg-purple/10 transition-all" />
              <CarouselNext className="static translate-y-0 rounded-full glass-card border-purple/20 hover:border-purple/40 hover:bg-purple/10 transition-all" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Recommendations;
