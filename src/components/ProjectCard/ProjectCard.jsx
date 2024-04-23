import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import {
  Card,
  CardDescription,
  CardImg,
  CardInfo,
  CardLink,
  CardLinkLive,
  CardLinks,
  CardProject,
  CardTechnologies,
  CardTitle,
} from './ProjectCard.styled';

const ProjectCard = ({ project }) => {
  return (
    <Card className="card">
      <CardImg src={project.img} alt={project.title} loading="lazy" />
      <CardInfo>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <CardTechnologies>{project.technologies}</CardTechnologies>
        <CardProject>{project.repository}</CardProject>
        <CardLinks>
          {project.github && (
            <CardLink href={project.github} target="_blank" rel="noreferrer">
              Source <FaGithub />
            </CardLink>
          )}
          <CardLinkLive href={project.live} target="_blank" rel="noreferrer">
            Live <HiOutlineExternalLink />
          </CardLinkLive>
        </CardLinks>
      </CardInfo>
    </Card>
  );
};

export default ProjectCard;
