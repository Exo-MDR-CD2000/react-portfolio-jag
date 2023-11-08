//implement footer component to render external links

function Footer() {
  return (
    <footer>
      <section className="social-links" id="contact">
        <a href="https://github.com/Exo-MDR-CD2000">
          <img src="src/assets//github-icon.png" alt="Github Icon" />
        </a>
        <a href="https://www.linkedin.com/in/jag1997/">
          <img src="src/assets/linkedin-100px.png" alt="LinkedIn Icon" />
        </a>
      </section>
    </footer>
  );
}

export default Footer;