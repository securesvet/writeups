import { useEffect, useRef, useState } from "react";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isHeaderLitUp, setIsHeaderLitUp] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = globalThis.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setPrevScrollY(currentScrollY);
    };

    addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out backdrop-blur-md rounded-2xl z-50 ${
        isHeaderVisible ? "opacity-100" : "-translate-y-full opacity-0"
      }`}
      onMouseEnter={() => setIsHeaderLitUp(true)}
      onMouseLeave={() => setIsHeaderLitUp(false)}
      ref={headerRef}
    >
      <header
        className={`relative flex items-center justify-center w-[90vw] h-16 px-6 text-white transition-all duration-500 ease-out
          ${
            isHeaderLitUp
              ? "shadow-[0px_5px_30px_rgba(255,255,255,0.1)]"
              : "shadow-md"
          }
        `}
      >
        <ul className="flex gap-8 justify-between items-center px-2 text-md font-medium">
          <li>
            <a href="/writeups" className="hover:underline">
              Writeups
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="/resume" className="hover:underline">
              Resume
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
