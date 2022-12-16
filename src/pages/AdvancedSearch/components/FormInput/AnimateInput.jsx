import { motion, AnimatePresence } from 'framer-motion';
const AnimateInput = ({ input, dropDownOption, showInput }) => {
  return (
    <>
      {dropDownOption}
      <AnimatePresence>
        {showInput && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {input}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default AnimateInput;
