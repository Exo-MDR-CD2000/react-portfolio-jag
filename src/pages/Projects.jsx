import ProjectCards from "../components/ProjectCards";


function Projects() {
  return (
    <section className="portfolio-cards-container" id="portfolio">
      <section className="portfolio-h2">
        <h2>Portfolio</h2>
      </section>
      <section className="portfolio-p">
        <p>Here are some of my projects. Most are placeholder boxes until further notice.</p>
      </section>
      <section className="portfolio-cards">
        <ProjectCards
          title="HTML Symantecs"
          imageUrl="./assets/images/html-symantecs-mockup.png"
          description="Refactored code using HTML semantecs"
          projectUrl="https://github.com/Exo-MDR-CD2000/week-1-challenge-HTML-symantecs"
        />
        {/* Add more ProjectCard components here */}
      </section>
    </section>
  );
}

export default Projects;