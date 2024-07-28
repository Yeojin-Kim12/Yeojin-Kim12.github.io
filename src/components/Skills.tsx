import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Image {
  id: number;
  src: string;
  title: string;
  explanation: string;
}

const images: Image[] = [
  { id: 1, src: "/portfolio/skills/html5.png", title: "HTML5", explanation: "웹접근성과 표준성을 준수하며 시멘틱 태그를 사용해 마크업 구조를 생각하여 설계할 수 있습니다." },
  { id: 2, src: "/portfolio/skills/css3.png", title: "CSS3", explanation: "다양한 레이아웃을 만들고 반응형 웹을 디자인할 수 있습니다." },
  { id: 3, src: "/portfolio/skills/js.png", title: "JavaScript", explanation: "동적인 웹 애플리케이션을 개발할 수 있으며 ES6 문법들도 활용할 수 있습니다." },
  { id: 4, src: "/portfolio/skills/ts.png", title: "TypeScript", explanation: "정적 타입을 사용하여 코드의 안정성과 가독성을 높여 웹 애플리케이션을 효율적으로 개발할 수 있습니다." },
  { id: 5, src: "/portfolio/skills/react.png", title: "React", explanation: "재사용 가능한 컴포넌트를 설계하고 상태 관리를 통해 효율적인 UI를 구현할 수 있습니다." },
  { id: 6, src: "/portfolio/skills/tailwind.png", title: "Tailwind", explanation: "빠르고 일관된 스타일링을 적용하며 커스텀 디자인 시스템을 구축할 수 있습니다." },
  { id: 7, src: "/portfolio/skills/github&git.png", title: "Git & GitHub", explanation: "Git 명령어를 사용할 수 있으며 GitHub를 통해 협업 프로젝트를 관리할 수 있습니다." },
];

const Skills = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div id="Skills" className="mt-20 px-8">
      <h1 className="text-3xl text-center text-primary font-wavvePADO heading-underline">Skills</h1>
      <p className="text-center mt-2 text-sm">아이콘에 마우스를 올려보세요.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 py-10 mx-auto">
        {images.map((image) => (
          <div key={image.id} className="relative flex flex-col items-center">
            <motion.img
              src={image.src}
              alt={`Image ${image.id}`}
              whileHover={{ scale: 1.1 }}
              onHoverStart={() => setHoveredId(image.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="w-24 h-24 object-contain rounded-md"
            />
            <AnimatePresence>
              {hoveredId === image.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-4 w-64 p-4 z-10 bg-white border border-gray-200 shadow-lg max-h-32 whitespace-normal"
                >
                  <h1 className="font-bold">{image.title}</h1>
                  <p className="text-sm">{image.explanation}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
