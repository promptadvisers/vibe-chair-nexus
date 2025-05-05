
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => (
  <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg border border-gray-800/50 hover:border-chair-primary/30 transition-all duration-300">
    <div className="w-12 h-12 bg-chair-primary/10 rounded-full flex items-center justify-center mb-4 text-chair-primary">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm text-center">{description}</p>
  </div>
);

interface ChairSpecProps {
  name: string;
  value: string | number;
}

const ChairSpec: React.FC<ChairSpecProps> = ({ name, value }) => (
  <div className="flex justify-between py-2 border-b border-gray-800/50 last:border-0">
    <span className="text-gray-400">{name}</span>
    <span className="text-white font-medium">{value}</span>
  </div>
);

interface ChairProductProps {
  name: string;
  imageSrc: string;
  price: number;
  description: string;
  features: { title: string; description: string; icon: React.ReactNode }[];
  specs: { name: string; value: string | number }[];
  isReversed?: boolean;
  className?: string;
}

const ChairProduct: React.FC<ChairProductProps> = ({
  name,
  imageSrc,
  price,
  description,
  features,
  specs,
  isReversed = false,
  className,
}) => {
  return (
    <section className={cn("py-16 lg:py-24", className)}>
      <div className="container mx-auto px-4">
        <div className={cn(
          "flex flex-col gap-12 items-center",
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
        )}>
          {/* Chair Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-chair-primary/20 to-transparent rounded-2xl blur-3xl opacity-30"></div>
              <img 
                src={imageSrc} 
                alt={name} 
                className="relative z-10 w-full h-auto object-contain rounded-lg mx-auto" 
              />
            </div>
          </motion.div>

          {/* Chair Info */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="flex flex-col h-full">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{name}</h2>
              <p className="text-2xl text-chair-primary font-semibold mb-4">${price.toLocaleString()}</p>
              <p className="text-gray-300 mb-6">{description}</p>
              
              {/* Specs */}
              <div className="bg-gray-900/30 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Specifications</h3>
                <div className="space-y-1">
                  {specs.map((spec, index) => (
                    <ChairSpec key={index} name={spec.name} value={spec.value} />
                  ))}
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <motion.button 
                  className="bg-chair-primary text-chair-dark font-semibold py-3 px-6 rounded-md"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Add to Cart
                </motion.button>
                <motion.button 
                  className="border border-gray-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-800/50 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Learn More
                </motion.button>
              </div>
              
              {/* IoT Features */}
              <h3 className="text-lg font-semibold text-white mb-3">Smart Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-chair-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-chair-primary text-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChairProduct;
