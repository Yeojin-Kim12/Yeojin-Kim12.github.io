const About = () => {
  return (
    <div id="About" className="flex gap-9 mt-12 justify-around px-8">
      <div className="w-[600px] h-[400px] overflow-hidden rounded-xl">
        <img src="/portfolio/profile.jpg" about="profile" width="600" height="300" className="mt-[-10%]" />
      </div>
      <div className="flex flex-col justify-center w-2/4">
        <h1 className="font-wavvePADO text-3xl mb-5 text-primary">About Me</h1>
        <div className="text-xl">
          <p className="mb-2">안녕하세요! 프론트엔드 개발자를 꿈꾸는 김여진입니다.</p>

          <p>저는 포기하지 않고 책임감을 가지고</p>
          <p>사용자 경험을 향상시키는 웹 애플리케이션을 개발하는 데 큰 보람을 느끼며,</p>
          <p className="mb-2">항상 높은 사용자 경험을 제공하고자 합니다.</p>
          <p>새로운 기술을 배우고 적용하는 것을 좋아하며,</p>
          <p> 끊임없이 성장하는 개발자가 되려 노력하고 있습니다.</p>

          <p className="mb-2">협업과 커뮤니케이션을 중요하게 생각하고, 팀원들과의 협업을 통해 더 나은 결과물을 만들어내고 싶습니다.</p>
          <p>프론트엔드 개발자로서 계속해서 성장하고, 가치 있는 기여를 할 수 있도록 노력하겠습니다.</p>
          <p>잘 부탁드립니다!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
