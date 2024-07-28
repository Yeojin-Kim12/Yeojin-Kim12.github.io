const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full h-20 flex items-center bg-white px-8">
      <nav className="w-full flex justify-between items-center">
        <div className="text-xl sm:text-3xl font-bagelFatOne text-primary">
          <a href="/portfolio/">yeojin</a>
        </div>
        <ul className="flex gap-5 text-xs sm:text-xl font-wavvePADO text-header">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
