export type ProjectDataType = {
  title: string;
  intro: string;
  description: string;
  previewUrl: string;
  date: string;
  team: string;
  type: string;
  badges: { text: string; color: string }[];
  point: string[];
  stack: string[];
  contribution: { title: string; detail: string[] }[];
  githubUrl: string;
  deployUrl: string;
  detailImg: string[];
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    previewUrl: string;
    badges: { text: string; color: string }[];
    date: string;
    team: string;
    point: string[];
    stack: string[];
    contribution: { title: string; detail: string[] }[];
    githubUrl: string;
    deployUrl: string;
    detailImg: string[];
  } | null;
};
