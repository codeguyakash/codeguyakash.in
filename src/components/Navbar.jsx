import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [data, setData] = useState(null);

  const resumeLink =
    'https://docs.google.com/document/d/1r-8pxSkfPca_PQvwkNbncUaiIBQB_xtV8F6SHK8jfNs/view';
  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  function fetchUserData() {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    fetchUserData();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="w-full mt-6 md:mt-10">
      <nav className="flex items-center justify-between px-6 md:px-20 py-4 border border-[#dfdfdf] rounded-lg bg-white ">
        {/* Logo */}
        <a
          href={resumeLink}
          target="_blank"
          rel="noreferrer"
          className="text-2xl md:text-3xl font-extrabold text-[#0f0d0e] hover:text-gray-700 transition-colors duration-300">
          CODEGUYAKASH
        </a>

        {/* Hamburger Button */}
        <button
          onClick={toggleNavVisibility}
          className="md:hidden text-3xl text-[#3f3d3e] focus:outline-none">
          ☰
        </button>

        {/* Nav Items */}
        <div
          className={`${
            isNavVisible ? 'block' : 'hidden'
          } absolute top-[70px] left-0 w-full bg-[#0f0d0e] md:bg-transparent md:static md:block transition-all duration-300`}>
          <ul className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 p-6 md:p-0">
            {[
              { name: 'HOME', href: '#hero-section' },
              { name: 'SKILLS', href: '#skill-section' },
              { name: 'PROJECTS', href: '#project-section' },
              { name: 'ABOUT', href: '#about-section' },
              { name: 'BLOG', href: 'https://blog.codeguyakash.in' },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-lg font-medium text-white md:text-[#3f3d3e] hover:text-[#959595] transition-colors duration-300">
                  {item.name}
                </a>
              </li>
            ))}

            <li>
              <a
                id="resume-btn"
                href={resumeLink}
                rel="noreferrer"
                className="block text-center text-white md:text-black border border-white md:border-black hover:bg-black hover:text-white py-2 px-6 rounded-md transition duration-300">
                RESUME
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
