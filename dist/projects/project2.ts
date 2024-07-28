export const project2 = {
  title: "SM Entertainment",
  intro: "SM Entertainment의 가수들을 관리할 수 있는 관리자 서비스",
  description:
    "직원 관리 서비스를 주제로 SM Entertainment의 가수들을 관리할 수 있는 관리자 서비스를 만들어 봤습니다. CRUD가 가능하고 메인화면인 직원목록 페이지는 Infinity Scroll을 사용하였고 로딩을 위한 Skeleton UI를 구현해봤습니다.",

  previewUrl:
    "https://github-production-user-asset-6210df.s3.amazonaws.com/79198245/316311038-93d688c8-47cd-4267-8cf4-10ba50092f2d.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240728%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240728T084258Z&X-Amz-Expires=300&X-Amz-Signature=8679e15e1e19bc6f09a01bc37f0e51e4ff2b61fa190b918e80a4d2338d7f16ce&X-Amz-SignedHeaders=host&actor_id=79198245&key_id=0&repo_id=770247898",
  date: "2024년 3월 11일 ~ 3월 24일",
  team: "1인",
  type: "SINGLE",
  badges: [
    { text: "Single", color: "#E9E5D0" },
    { text: "Vanilla JS", color: "#F7E025" },
  ],
  point: ["로딩 화면", "Infinity Scroll을 구현하여 계속 콘텐츠가 로드될 수 있음", "LocalStorage를 이용하여 데이터를 저장", "CRUD기능과 이름 검색 기능", "로딩 애니메이션인 Skeleton Screen 구현"],
  stack: ["HTML", "CSS", "JavaScript"],
  contribution: [
    {
      title: "Infinity Scroll 구현",
      detail: [
        "IntersectionObserver를 이용하여 Infinity Scroll을 구현했습니다.",
        "사용자가 스크롤할 때마다 localStorage에서 데이터를 8개씩 가져와 프로필을 로드합니다.",
        "마지막 프로필을 다시 관찰 대상으로 설정하고 데이터가 끝날 때까지 계속 로드합니다.",
      ],
    },
    {
      title: "CRUD와 검색 기능 구현",
      detail: [
        "로컬 스토리지를 활용하여 프로필 데이터를 생성(Create), 읽기(Read), 업데이트(Update), 삭제(Delete) 기능을 구현했습니다.",
        "이름을 기준으로 프로필을 검색할 수 있고 해당 이름과 일치하는 프로필이 화면에 표시됩니다.",
        "입력칸이 비어있을 경우 모든 프로필을 표시합니다.",
      ],
    },
    {
      title: "이미지 저장 및 압축 구현",
      detail: [
        "이미지를 로컬 스토리지에 저장하기 위해 FileReader의 readAsDataURL 메서드를 사용하여 base64 형식으로 인코딩 후 저장시켰습니다.",
        "저장 후 로컬 스토리지의 용량 문제가 발생했고 이를 해결하고자 이미지를 캔버스를 통해 압축하여 저장하는 방식을 선택했습니다.",
        "캔버스에 그린 후 toDataURL 메서드를 사용하여 JPEG 형식으로 압축된 데이터를 저장하는 방식입니다.",
      ],
    },
    {
      title: "Skeleton Screen 구현",
      detail: [
        "데이터를 로드하는 동안 사용자 경험을 위해 Skeleton Screen을 구현했습니다.",
        "Skeleton UI를 보여주어 로딩 중이라는 시각적 피드백을 제공합니다.",
        "linear-gradient를 사용해 움직이는 로딩 효과를 만들었습니다.",
      ],
    },
  ],
  githubUrl: "https://github.com/Yeojin-Kim12/SMEntertainment",
  deployUrl: "https://660015d73840cad18dd9ae33--peaceful-taffy-2eaa0a.netlify.app/",
  detailImg: [
    "https://github.com/user-attachments/assets/d4c997ed-2f52-4db6-b5c3-d4e75ebfb693",
    "https://github.com/user-attachments/assets/dd0e41ce-e08b-47c7-8ebe-aa9b74c2598b",
    "https://github.com/user-attachments/assets/af5d9228-3cbd-4196-904f-788693be48f5",
    "https://github.com/user-attachments/assets/f47ea767-e852-4cb7-a2dc-eed05a1209ce",
    "https://github.com/user-attachments/assets/43d0825b-cf7e-4b94-81af-4ffe8d85d2de",
    "https://github.com/user-attachments/assets/abb0eb33-9498-4493-b52e-39f4e5c34d61",
    "https://github.com/user-attachments/assets/af8b0b10-da4b-44a3-958c-48c2db360429",
    "https://github.com/user-attachments/assets/2c1bb68c-9554-47fb-b43c-ac3c9b2c46fb",
  ],
};
