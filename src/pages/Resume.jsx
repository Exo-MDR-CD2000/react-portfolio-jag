export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-h1">
        <h1>Resume</h1>
      </div>
      <div className="resume-p">
        <p>
          You can download my resume by clicking the link below. If you have any
          questions or would like to get in contact with me, feel free to use
          the external links below or the ones on my resume. The contact tab is
          a work in progress.
        </p>
        <div className="resume-link-container">
          <a href="src/assets/Resume_Guillen - Web-Dev-Rev.pdf" download className="resume-link">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}


// https://projects.wojtekmaj.pl/react-pdf/