import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { ModalProps } from "../types/type";
import ImageModal from "./ImageModal";
import { FaGithub, FaLink } from "react-icons/fa";

const Modal = ({ isOpen, onClose, project }: ModalProps) => {
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const handleImageClick = (imageUrl: string, e: React.MouseEvent) => {
    setSelectedImage(imageUrl);
    setImageModalOpen(true);
    e.stopPropagation();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <article className="fixed inset-0 bg-black bg-opacity-50 pt-20 flex items-center justify-center z-50" onClick={onClose}>
        <motion.div
          className="bg-white px-12 lg:px-40 md:px-32 sm:px-16 py-14 rounded-lg shadow-lg w-11/12 sm:w-10/12 md:w-10/12 h-full overflow-y-auto scrollbar-hide relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={handleModalClick}
        >
          <div className="flex justify-end mb-2">
            <button onClick={onClose} className="right text-neutral-500 hover:text-text text-2xl">
              <IoCloseOutline size={30} />
            </button>
          </div>
          <img src={project.previewUrl} alt={project.title} className="w-full h-80 object-cover rounded mb-4" />
          <h1 className="text-4xl font-bold mb-2 text-center">{project.title}</h1>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex text-sm gap-1">
              <h1 className="font-bold mb-2">📅 </h1>
              <p>{project.date}</p>
            </div>
            <div className="flex text-sm gap-1">
              <h1 className="font-bold mb-2">👥 </h1>
              <p>{project.team}</p>
            </div>
          </div>
          <p className="mt-4 mb-12 text-center">{project.description}</p>
          <div className="flex justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900">
                <FaGithub size={20} />
                <p className="ml-2">GitHub</p>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900">
                <FaLink size={20} />
                <p className="ml-2">배포 링크</p>
              </a>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-8 mt-12">
            <div>
              <h1 className="text-2xl font-bold mb-3">📌 주요 기능</h1>
              <ul>
                {project.point.map((point, index) => (
                  <li key={index} className="list-disc ml-4 mb-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-3">🔨 사용 기술</h1>
              <ul>
                {project.stack.map((tech, index) => (
                  <li key={index} className="list-disc ml-4 mb-1">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-3">✨ 작업 기여도</h1>
              {project.contribution.map((contribution, index) => (
                <div key={index} className="mb-6">
                  <div className="bg-gray-200 px-4 py-2 mb-2">
                    <h2 className="text-lg font-bold">{contribution.title}</h2>
                  </div>
                  <ul>
                    {contribution.detail.map((detail, detailIndex) => (
                      <li key={detailIndex} className="list-disc ml-7 mb-1">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-2xl font-bold">💻 구현 화면</h1>
              <p className="text-sm mb-3 text-gray-400">이미지를 누르면 크게 볼 수 있습니다.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {project.detailImg.map((img, index) => (
                  <img key={index} src={img} alt={`Detail ${index + 1}`} className="w-full h-64 object-contain rounded border" onClick={(e) => handleImageClick(img, e)} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </article>
      {isImageModalOpen && selectedImage !== null && <ImageModal isOpen={isImageModalOpen} onClose={() => setImageModalOpen(false)} imageUrl={selectedImage} />}
    </>
  );
};

export default Modal;
