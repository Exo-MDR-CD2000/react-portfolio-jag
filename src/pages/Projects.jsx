import ProjectCards from "../components/ProjectCards";


function Projects() {
  return (
    <section className="portfolio-cards-container" id="portfolio">
      <section className="portfolio-h2">
        <h2>Projects</h2>
      </section>
      <section className="portfolio-p">
        <p>Here are some of my projects. More to come in the pipeline.</p>
      </section>
      <section className="portfolio-cards">

        <ProjectCards
          title="HTML Semantecs"
          imageUrl="src/assets/html-symantecs-mockup.png"
          description="Refactored code using HTML semantecs"
          projectUrl="https://github.com/Exo-MDR-CD2000/week-1-challenge-HTML-symantecs"
        />
        <ProjectCards
          title="Employee Management CLI"
          imageUrl="src/assets/employee-cli-tool.png"
          description="A CLI tool to manage employees"
          projectUrl="https://github.com/Exo-MDR-CD2000/employee-man-cli"
        />
        <ProjectCards
          title="API Movie Discovery"
          imageUrl="src/assets/Movie-Discovery-site.png"
          description="API usage to display movie data information"
          projectUrl="https://github.com/ameridacas/CamelCase_Lab_Rats-"
        />
        <ProjectCards
          title="Culinary Chronicles"
          imageUrl="src/assets/Culinary-Chronicles.png"
          description="Recipe site following the MVC paradigm"
          projectUrl="https://github.com/GregFJr/Culinary-Chronicles"
        />
        <ProjectCards
          title="MVC Blog"
          imageUrl="src/assets/techblog-wip.png"
          description="A simple blog site following the MVC paradigm."
          projectUrl="https://github.com/Exo-MDR-CD2000/MVC-Blog"
        />
        <ProjectCards
          title="Mongo Social API"
          imageUrl="src/assets/mongo-social-insomnia.png"
          description="Social platform API tool using NoSQL database. Uses Insomnia to test routes."
          projectUrl="https://github.com/Exo-MDR-CD2000/Mongo-Social-API"
        />

      </section>
    </section>
  );
}

export default Projects;

