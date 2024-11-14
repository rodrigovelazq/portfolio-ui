import { useContext } from 'react';
import ProjectSingle from './ProjectSingle';
import { projectsData } from '../../data/projects';

const ProjectsGrid = () => {

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Projects portfolio
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{projectsData.map((project) => (
							<ProjectSingle
								id={project.id}
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
					  ))}
			</div>
		</section>
	);
};

export default ProjectsGrid;
