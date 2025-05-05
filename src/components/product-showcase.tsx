
import React from 'react';
import { motion } from 'framer-motion';
import ChairProduct from './chair-product';

// Mock icons for the chair features
const Icon = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center text-lg">
    {children}
  </div>
);

const products = [
  {
    name: "ErgoSense Pro",
    imageSrc: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 1499,
    description: "Our flagship AI-powered chair with advanced posture correction, body temperature adaptation, and complete IoT integration for the modern smart home.",
    features: [
      { 
        title: "AI Posture Analysis", 
        description: "Real-time posture monitoring with gentle corrections",
        icon: <Icon>📊</Icon>
      },
      { 
        title: "Thermal Adaptation", 
        description: "Adjusts seat temperature based on body heat",
        icon: <Icon>🌡️</Icon>
      },
      { 
        title: "Voice Control", 
        description: "Hands-free adjustment using voice commands",
        icon: <Icon>🎤</Icon>
      },
      { 
        title: "Health Analytics", 
        description: "Tracks sitting habits and provides recommendations",
        icon: <Icon>💓</Icon>
      },
      { 
        title: "Smart Home Integration", 
        description: "Works with all major smart home platforms",
        icon: <Icon>🏠</Icon>
      }
    ],
    specs: [
      { name: "Weight Capacity", value: "350 lbs" },
      { name: "Battery Life", value: "14 days" },
      { name: "Sensors", value: "16 pressure + 4 thermal" },
      { name: "Connectivity", value: "Wi-Fi, Bluetooth 5.0" },
      { name: "Material", value: "Premium Memory Foam" },
    ]
  },
  {
    name: "NexusComfort Elite",
    imageSrc: "https://images.unsplash.com/photo-1561729955-89357c733091?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 1299,
    description: "The perfect balance of comfort and technology, featuring adaptive cushioning, massage functionality, and comprehensive health monitoring.",
    features: [
      { 
        title: "Dynamic Support", 
        description: "Automatically adjusts firmness based on posture",
        icon: <Icon>🛋️</Icon>
      },
      { 
        title: "4D Massage", 
        description: "Multiple massage programs with varying intensities",
        icon: <Icon>👐</Icon>
      },
      { 
        title: "Pressure Mapping", 
        description: "Identifies and relieves pressure points",
        icon: <Icon>🗺️</Icon>
      },
      { 
        title: "Activity Recognition", 
        description: "Detects work, relaxation, and gaming modes",
        icon: <Icon>🎮</Icon>
      },
      { 
        title: "App Control", 
        description: "Full customization through smartphone app",
        icon: <Icon>📱</Icon>
      }
    ],
    specs: [
      { name: "Weight Capacity", value: "300 lbs" },
      { name: "Battery Life", value: "10 days" },
      { name: "Sensors", value: "12 pressure + 2 thermal" },
      { name: "Connectivity", value: "Wi-Fi, Bluetooth 5.0" },
      { name: "Material", value: "Hybrid Foam + Mesh" },
    ]
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <div className="bg-chair-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-chair-primary/5 to-transparent opacity-70 pointer-events-none"></div>
      
      <div className="relative pt-16 pb-8">
        <motion.div 
          className="container mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-chair-primary font-medium text-lg mb-3">OUR COLLECTION</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">AI-Powered Chairs</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our revolutionary smart chairs that combine cutting-edge AI technology with unparalleled comfort, 
            designed to transform how you sit, work, and live.
          </p>
        </motion.div>

        {products.map((product, index) => (
          <ChairProduct
            key={index}
            name={product.name}
            imageSrc={product.imageSrc}
            price={product.price}
            description={product.description}
            features={product.features}
            specs={product.specs}
            isReversed={index % 2 !== 0}
            className="border-b border-gray-800/50 last:border-0"
          />
        ))}

        <motion.div 
          className="container mx-auto text-center py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to upgrade your sitting experience?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join the revolution of smart furniture and experience the perfect blend of technology and comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="#" 
              className="bg-chair-primary text-chair-dark font-semibold py-3 px-8 rounded-md"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Shop All Chairs
            </motion.a>
            <motion.a 
              href="#" 
              className="border border-gray-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-800/50 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Schedule a Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowcase;
