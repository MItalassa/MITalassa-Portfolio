import Project from './Project';
import projects from '../data/project.json';

function ProjectGallery() {
    return (
        <div>This is list of my projects
        <div>
            { projects.map((project) => {
                return <Project key={project.id} title={project.title} description={project.description} />
            })}
            
        </div>
        </div>
    )
}

export default ProjectGallery;