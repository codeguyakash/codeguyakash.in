import './style.css';

const index = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-list">
          <div className="social-items social">
            <a
              href="https://github.com/codeguyakash"
              target="_blank"
              rel="noreferrer">
              GITHUB
            </a>
          </div>
          <div className="social-items social">
            <a
              href="https://www.linkedin.com/in/codeguyakash/"
              target="_blank"
              rel="noreferrer">
              LINKEDIN
            </a>
          </div>
          <div className="social-items social">
            <a
              href="https://twitter.com/codeguyakash"
              target="_blank"
              rel="noreferrer">
              TWITTER
            </a>
          </div>
          <div className="social-items social">
            <a href="mailto:codeguyakash@gmail.com">GMAIL</a>
          </div>
        </div>
        <div id="copyright">
          copyright@2024-25 | Made with &#x2665; by codeguyakash
        </div>
      </div>
      <a href="#home" id="top">
        TOP
      </a>
      <div className="sign-div">
        <p className="signature-text">codeguyakash</p>
      </div>
    </footer>
  );
};

export default index;
