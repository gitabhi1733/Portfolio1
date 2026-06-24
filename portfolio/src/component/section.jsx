
import { motion } from "framer-motion";

const Section = ({ icon, children, sectionTitle }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="
        mx-4 md:mx-6 my-6
        p-6 md:p-8
        bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
        rounded-3xl
        border border-slate-700
        shadow-xl
        hover:border-cyan-400
        hover:shadow-cyan-500/20
      "
    >
      <div className="flex items-center gap-4 mb-5">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ duration: 0.3 }}
          className="
            w-12 h-12
            flex items-center justify-center
            rounded-xl
            bg-gradient-to-r from-blue-600 to-cyan-500
            text-white
            shadow-lg
          "
        >
          {icon}
        </motion.div>

        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {sectionTitle}
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8 }}
            className="h-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 mt-2"
          />
        </div>
      </div>

      <div className="text-slate-300 leading-8 text-base">{children}</div>
    </motion.section>
  );
};

export default Section;
