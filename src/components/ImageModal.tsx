import React from "react";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | undefined;
}

const handleModalClick = (e: React.MouseEvent) => {
  e.stopPropagation();
};

const ImageModal = ({ isOpen, onClose, imageUrl }: ImageModalProps) => {
  if (!isOpen) return null;

  return (
    <article className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <motion.div
        className="bg-white p-4 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={handleModalClick}
      >
        <div className="flex justify-end ">
          <button onClick={onClose} className="text-white text-2xl absolute top-7 right-6 w-8 h-8 flex items-center justify-center bg-neutral-700 hover:bg-neutral-600 rounded-full">
            <IoCloseOutline size={28} />
          </button>
        </div>
        <img src={imageUrl} alt="Expanded" className="w-full h-auto rounded" />
      </motion.div>
    </article>
  );
};

export default ImageModal;
