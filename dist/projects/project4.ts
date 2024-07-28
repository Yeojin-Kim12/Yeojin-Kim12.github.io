export const project4 = {
  title: "EMS",
  intro: "Employee Management System (EMS)",
  description:
    "EMS를 통해서 직원은 본인의 급여 내역을 확인할 수 있고, 정정 신청 페이지에서 급여에 누락된 부분을 신청할 수 있습니다. 캘린더에서 여러 일정을 색으로 구분해서 표시하고, 해당 일정을 수정, 삭제할 수 있습니다.",

  previewUrl: "https://github.com/user-attachments/assets/e65c5d8c-d348-4888-82d7-e489075b5497",
  date: "2024년 5월 27일 ~ 6월 9일",
  team: "4인",
  type: "TEAM",
  badges: [
    { text: "Team", color: "#2ED0AF" },
    { text: "Toy", color: "#C7D8FF" },
  ],
  point: ["로그인과 회원가입", "프로필 페이지", "개인별 일정 캘린더", "급여 내역 페이지", "급여 정정 신청 및 내역, 관리 페이지"],
  stack: ["React", "Styled-Components", "TypeScript", "Vite", "Firebase"],
  contribution: [
    {
      title: "Header 구현",
      detail: ["react-router-dom을 이용하여 각 페이지로 이동할 수 있는 네비게이션 헤더를 구현하였습니다."],
    },
    {
      title: "캘린더 페이지 구현",
      detail: [
        "Firebase의 사용자 이메일로 상위 컬렉션을 생성하고 하위 컬렉션에 캘린더를 생성해 사용자 맞춤형 캘린더를 제공합니다.",
        "날짜를 클릭할 시 일정을 저장할 수 있는 모달 창이 뜹니다.",
        "제목, 시작/종료 날짜, 색상을 지정할 수 있습니다.",
        "일정의 CRUD 기능을 구현 하였습니다.",
        "달력의 이전/다음 달로 이동이 가능합니다.",
        "캘린더 라이브러리를 사용하지 않고 구성하였습니다.",
      ],
    },
  ],
  githubUrl: "https://github.com/Yeojin-Kim12/EmployeeManagement",
  deployUrl: "https://toy2-group3.netlify.app/login",
  detailImg: [
    "https://github.com/Yeojin-Kim12/EmployeeManagement/raw/main/public/img/%EB%A1%9C%EA%B7%B8%EC%9D%B8.png",
    "https://github.com/Yeojin-Kim12/EmployeeManagement/raw/main/public/img/%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85.png",
    "https://github.com/Yeojin-Kim12/EmployeeManagement/raw/main/public/img/%EC%9D%B8%EC%82%AC%EC%A0%95%EB%B3%B4.png",
    "https://github.com/Yeojin-Kim12/EmployeeManagement/raw/main/public/img/%EA%B8%89%EC%97%AC%EB%82%B4%EC%97%AD.png",
    "https://github.com/Yeojin-Kim12/EmployeeManagement/raw/main/public/img/%EC%A0%95%EC%A0%95%EC%8B%A0%EC%B2%AD.png",
    "https://github.com/Yeojin-Kim12/EmployeeManagement/raw/main/public/img/%EC%A0%95%EC%A0%95%EB%82%B4%EC%97%AD.png",
    "https://github.com/Yeojin-Kim12/EmployeeManagement/raw/main/public/img/%EC%A0%95%EC%A0%95%EA%B4%80%EB%A6%AC.png",
    "https://github.com/Yeojin-Kim12/EmployeeManagement/raw/main/public/img/%EC%BA%98%EB%A6%B0%EB%8D%94.png",
    "https://github.com/Yeojin-Kim12/EmployeeManagement/raw/main/public/img/%EC%BA%98%EB%A6%B0%EB%8D%94%EB%AA%A8%EB%8B%AC.png",
  ],
};
