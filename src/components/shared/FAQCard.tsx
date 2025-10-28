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
      className={`w-full flex justify-between items-start gap-4 py-4 cursor-pointer transition-all duration-200 hover:bg-gray-50 px-2 -mx-2 rounded-lg
        ${!isLast ? "border-b" : ""} 
        ${isOpen ? "border-[#4977E5]" : "border-[#838B95]"}
      `}
      onClick={() => setIsOpen(!isOpen)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsOpen(!isOpen);
        }
      }}
      aria-label={isOpen ? "Collapse FAQ" : "Expand FAQ"}
      aria-expanded={isOpen}
    >
      <div className="flex flex-col gap-2 flex-1">
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

      <div className="mt-1 flex-shrink-0">
        {isOpen ? <Minus color="#4977E5" /> : <Plus color="#838B95" />}
      </div>
    </div>
  );
};

export default FAQCard;