import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import "../../public/styles/About.css"

function About() {
  return (

    <motion.div
      className="about"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        About Top Design
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        At Top Design, creativity meets technical expertise.
We specialize in graphic design, printing, branding, and uniforms.
Our team also delivers metallic structures and lightning protection.
For over 8 years, we’ve completed 120+ successful projects.
With 98% client satisfaction, trust is at the heart of our work.
We serve businesses, schools, individuals, and construction projects.
Our designs make schools professional, businesses more visible, and buildings safe yet stylish.
Guided by innovation, sustainability, honesty, quality, and reliability.
We stand out through versatility and a commitment to excellence.
Rooted in Rwanda, we embrace innovation while growing into new markets.
      </motion.p>
    </motion.div>
  );
}

export default About;