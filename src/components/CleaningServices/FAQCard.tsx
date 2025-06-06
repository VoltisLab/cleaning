"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQCardProp {
  title: string;
  detail: string;
  isLast?: boolean; // <- optional prop to control border
}

const FAQCard = ({ title, detail, isLast }: FAQCardProp) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full max-w-[1140px] flex justify-between items-start gap-4 py-4 
        ${!isLast ? "border-b" : ""} 
        ${isOpen ? "border-[#4977E5]" : "border-[#838B95]"}
      `}
    >
      <div className="flex flex-col gap-2">
        <p className={`font-bold text-lg transition-colors ${isOpen ? "text-[#4977E5]" : "text-black"}`}>
          {title}
        </p>

        <AnimatePresence>
          {isOpen && (
            <motion.p
              key="faq-content"
              className="text-sm text-[#838B95]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {detail}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        className="mt-1 cursor-pointer z-[1000]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Collapse FAQ" : "Expand FAQ"}
      >
        {isOpen ? <Minus color="#4977E5" /> : <Plus color="#838B95" />}
      </button>
    </div>
  );
};
export default FAQCard;
