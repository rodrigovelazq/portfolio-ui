import CertificationSingle from './CertificationSingle';
import { certificationsData } from '../../data/certifications';

const CertificationsGrid = () => {

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Certifications
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{certificationsData.map((project) => (
							<CertificationSingle
								id={project.id}
								title={project.title}
								image={project.img}
								key={project.id}
							/>
					  ))}
			</div>
		</section>
	);
};

export default CertificationsGrid;
