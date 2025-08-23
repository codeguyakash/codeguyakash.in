import { useState } from 'react';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <div className="w-full" id="home">
        <nav className="flex items-center justify-between px-6 md:px-28 border border-[#3f3d3e] relative">
          <div>
            <a
              href="https://docs.google.com/document/d/1r-8pxSkfPca_PQvwkNbncUaiIBQB_xtV8F6SHK8jfNs/edit?tab=t.0"
              target="_blank"
              rel="noreferrer"
              className="text-[35px] font-[Paytone_One] text-[#3f3d3e] hover:text-[#959595] transition-colors duration-300">
              CODEGUYAKASH
            </a>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={toggleNavVisibility}
            className="md:hidden text-2xl text-[#3f3d3e] focus:outline-none">
            ☰
          </button>

          {/* Nav Items */}
          <div
            id="nav-items"
            className={`${
              isNavVisible
                ? 'flex flex-col absolute top-[70px] left-0 w-full bg-[#0f0d0e] border-t border-[#fcba28] z-10'
                : 'hidden'
            } md:flex md:flex-row md:items-center md:static md:w-auto`}>
            <ul className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8 p-4 md:p-0">
              <li>
                <a
                  href="#hero-section"
                  className="text-lg text-[#3f3d3e] hover:text-[#959595] transition-colors duration-300">
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#skill-section"
                  className="text-lg text-[#3f3d3e] hover:text-[#959595] transition-colors duration-300">
                  SKILLS
                </a>
              </li>
              <li>
                <a
                  href="#project-section"
                  className="text-lg text-[#3f3d3e] hover:text-[#959595] transition-colors duration-300">
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  href="#about-section"
                  className="text-lg text-[#3f3d3e] hover:text-[#959595] transition-colors duration-300">
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  id="resume-btn"
                  href="https://docs.google.com/document/d/1r-8pxSkfPca_PQvwkNbncUaiIBQB_xtV8F6SHK8jfNs/edit?tab=t.0"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-[#3f3d3e] rounded-lg text-[#3f3d3e] hover:bg-[#3f3d3e] hover:text-white transition duration-300">
                  DOWNLOAD CV
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
