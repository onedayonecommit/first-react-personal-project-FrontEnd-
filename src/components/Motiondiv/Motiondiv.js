import React from 'react'
import { motion } from 'framer-motion';

const Motiondiv = () => {
    return (
        <motion.div
            intial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
        </motion.div>
    )
}

export default Motiondiv