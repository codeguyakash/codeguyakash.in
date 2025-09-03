const Footer = () => {
  const currentYear = new Date()?.getFullYear();
  return (
    <footer className="w-full">
      <div className="w-full text-center">
        <div id="copyright">
          copyright@{currentYear}-{currentYear + 1} | Made with &#x2665; by
          codeguyakash
        </div>
      </div>
      <div className="w-full text-center mb-10">
        <a href="#home" id="top">
          TOP
        </a>
      </div>
    </footer>
  );
};

export default Footer;
