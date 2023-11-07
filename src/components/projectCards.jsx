function ProjectCards({ title, imageUrl, description, projectUrl }) {
    return (
      <div className="card" role="button">
        <h3>{title}</h3>
        <a href={projectUrl}>
          <img src={imageUrl} alt={title} />
        </a>
        <p>{description}</p>
      </div>
    );
  }
  
  export default ProjectCards;