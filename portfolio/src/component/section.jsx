
// const Section = ({icon,children,sectionTitle}) => {
//   return (
//     <div className="my-5 mx-5">
//       <div className="flex my-3 items-center">
//         {icon}
//         <h1 className="font-bold  text-2xl mx-2">{ sectionTitle}</h1>
//           </div>
//           {children}
//     </div>
//   );
// };
// export default Section;

// const Section = ({ icon, children, sectionTitle }) => {
//   return (
//     <section className="mx-6 my-6 p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl shadow-lg">
//       <div className="flex items-center mb-4">
//         <div className="text-blue-600 text-3xl">{icon}</div>

//         <h2 className="text-2xl font-bold text-slate-800 ml-3">
//           {sectionTitle}
//         </h2>
//       </div>

//       <div className="border-b-2 border-blue-500 w-16 mb-4"></div>

//       <div className="text-slate-700 leading-relaxed">{children}</div>
//     </section>
//   );
// };

// export default Section;
// const Section = ({ icon, children, sectionTitle }) => {
//   return (
//     <section

//       className="
//     mx-4 md:mx-6 my-6
//     p-6 md:p-8
//     bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
//     rounded-3xl
//     border border-slate-700
//     shadow-xl
//     hover:border-cyan-400
//     hover:shadow-cyan-500/20
//     transition-all duration-300
//     hover:-translate-y-1
//   "
//     >
//       <div className="flex items-center gap-4 mb-5">
//         <div
//           className="
//             w-12 h-12
//             flex items-center justify-center
//             rounded-xl
//             bg-gradient-to-r from-blue-600 to-cyan-500
//             text-white
//             shadow-lg
//           "
//         >
//           {icon}
//         </div>

//         <div>
//           {/* <h2 className="text-2xl font-bold text-slate-800">{sectionTitle}</h2> */}
//           <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//             {sectionTitle}
//           </h2>

//           <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 mt-2"></div>
//         </div>
//       </div>

//       <div className="text-slate-600 leading-8 text-base">{children}</div>
//     </section>
//   );
// };

// export default Section;
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
