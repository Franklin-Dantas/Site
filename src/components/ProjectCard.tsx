import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  featuredLabel?: string;
}

const ProjectCard = ({ image, title, description, tags, featured = false, featuredLabel = 'Destaque' }: ProjectCardProps) => {
  return (
    <motion.div
      className={`group glass-card rounded-2xl overflow-hidden border transition-all duration-500 ${featured
        ? 'border-purple/50 shadow-xl glow-purple'
        : 'border-border/50 hover:border-purple/40'
        }`}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Image container with overlay */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-purple/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Featured badge */}
        {featured && (
          <motion.div
            className="absolute top-3 left-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="bg-gradient-to-r from-purple to-cyan text-white border-0 rounded-full text-xs font-medium shadow-lg glow-purple">
              {featuredLabel}
            </Badge>
          </motion.div>
        )}

        {/* Animated corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-purple transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {tags.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              <Badge
                variant="secondary"
                className="text-xs font-normal rounded-full border border-purple/20 hover:border-purple/40 hover:bg-purple/10 transition-all duration-200"
              >
                {tag}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient line on hover */}
      <motion.div
        className="h-1 bg-gradient-to-r from-purple via-cyan to-blue"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
};

export default ProjectCard;
