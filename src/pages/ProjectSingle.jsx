import { useParams } from 'react-router-dom';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';

const ProjectSingle = () => {
	const { id } = useParams();
	const projectId = parseInt(id, 10);
	const project = projectsData.find((proj) => proj.id === projectId);

	if (!project) {
		return <div>Project not found</div>;
	} else {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.6,
					delay: 0.15,
				}}
				className="container mx-auto mt-5 sm:mt-10"
			>
				<ProjectHeader
					projectHeader={project.ProjectHeader}
				/>
				<ProjectGallery
					projectImages={project.ProjectImages}
				/>
				<ProjectInfo
					projectInfo={project.ProjectInfo}
				/>
			</motion.div>
		);
	};
}
export default ProjectSingle;
