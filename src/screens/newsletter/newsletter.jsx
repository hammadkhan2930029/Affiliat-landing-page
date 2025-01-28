import React from 'react'
import './newsletter.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { motion } from "framer-motion";
export const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="four">
                <h1 className='heading4'>Sign up for our newsletter to get access</h1>
                <span className='text4'>Tell people more about what you do. Use this space to describe your products or services. Highlight their benefits so they feel compelled to click.</span>
                <div>
                    <div className="flex justify-center items-center min-h-screen">
                        <motion.div
                            animate={{ y: [0, 20, 0] }}  // Y-axis animation cycle
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 16L6 10H18L12 16Z"
                                    fill="black"
                                />
                            </svg>
                        </motion.div>
                    </div>
                </div>
                <div className="inputfield">
                    <input type="text" className="input" placeholder='Name' />
                    <input type="text" className="input" placeholder='Email' />
                    <button className='btn4'>Sign up</button>
                </div>
            </div>
        </div>
    )
}
