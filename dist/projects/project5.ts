export const project5 = {
  title: "FAST",
  intro: "FAST 숙박 예약 서비스",
  description: "숙박 예약이 가능한 플랫폼 FAST 입니다. 야놀자나 여기어때 등과 같은 숙박 웹 애플리케이션을 구성하였으며 백엔드와의 첫 협업 작품입니다.",

  previewUrl: "https://velog.velcdn.com/images/duwls1503/post/d130da2b-d982-46bf-8522-2dbf73918a29/image.png",
  date: "2024년 6월 17일 ~ 7월 5일",
  team: "프론트엔드 3인 / 백엔드 5인",
  type: "TEAM",
  badges: [
    { text: "Team", color: "#2ED0AF" },
    { text: "Mini", color: "#6A6E99" },
  ],
  point: ["로그인과 회원가입", "무한 스크롤을 이용한 상품 페이지", "장바구니", "개별 상품 조회 페이지", "결제 및 결과 확인", "주문 내역 확인"],
  stack: ["React", "TailWindCss", "TypeScript", "NEXT.JS", "React-Query", "Zustand", "Axios"],
  contribution: [
    {
      title: "메인 페이지 (전체 상품 조회)",
      detail: [
        "React Query의 무한 스크롤 기능 사용하여 구성하였습니다.",
        "카테고리 별로 선택할 수 있으며 가격대 별로 필터링이 가능합니다.",
        "queryClient를 사용해 SessionStorage에 현재 위치를 저장하여 뒤로가기로 돌아왔을 때 Scroll의 위치를 기억해 보여줍니다.",
        "사용자 경험을 위한 상단 버튼을 구현하였습니다.",
      ],
    },
    {
      title: "장바구니",
      detail: [
        "사용자가 선택한 숙박 상품을 장바구니에 담으면 예약 또는 삭제할 수 있는 기능을 구현했습니다.",
        "상품은 개별 선택 및 전체 선택을 할 수 있습니다.",
        "날짜가 지난 상품 또는 이미 예약된 상품은 예약 불가 상품으로 처리하였습니다.",
        "장바구니의 경우 팀원과 같은 컴포넌트를 재사용했기에 트러블이 많았습니다.",
        "타입이나 Props 등에서 트러블이 많았고 이를 해결하기 위해 커뮤니케이션이 활발했습니다.",
      ],
    },
  ],
  githubUrl: "https://github.com/Yeojin-Kim12/FE_miniProject",
  deployUrl: "https://fe-mini-project-ten.vercel.app",
  detailImg: [
    "https://github.com/kdt8-mini-project-team5/FE_miniProject/assets/97817208/21c05f60-15d0-450e-bc3a-7d825f54c2b7",
    "https://github.com/kdt8-mini-project-team5/FE_miniProject/assets/97817208/7cc0d427-255d-4893-85b6-e97ef259eedf",
    "https://github.com/kdt8-mini-project-team5/FE_miniProject/assets/97817208/aaa4d47a-332a-4de4-9110-c5730513c364",
    "https://github.com/Yeojin-Kim12/my-first-blog/assets/79198245/1c5abd4d-fcd9-452a-b454-996433128a49",
    "https://github.com/Yeojin-Kim12/my-first-blog/assets/79198245/c445d87b-e6e5-4382-8ed4-e521807da94f",
    "https://github.com/kdt8-mini-project-team5/FE_miniProject/assets/97817208/730511bc-bc59-496f-a72a-e1140d6b47e5",
    "https://github.com/kdt8-mini-project-team5/FE_miniProject/assets/97817208/0731894b-01d3-4476-a627-42b1759c54a8",
    "https://github.com/kdt8-mini-project-team5/FE_miniProject/assets/79198245/21c725ac-8c2d-4f7e-b6c8-8bccee9fffce",
    "https://github.com/kdt8-mini-project-team5/FE_miniProject/assets/79198245/fb5e508a-6c90-49ad-894b-81f5846a4202",
    "https://github.com/kdt8-mini-project-team5/FE_miniProject/assets/79198245/12043527-84c2-4d38-8043-5e735af20b11",
    "https://github.com/kdt8-mini-project-team5/FE_miniProject/assets/153588816/74237572-e5ae-4302-a9ab-33b67f794687",
  ],
};
