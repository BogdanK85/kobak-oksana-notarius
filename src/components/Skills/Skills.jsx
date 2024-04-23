import { motion } from 'framer-motion';
import { Container, SectionTitle } from 'styles/GlobalStyles';
import { SkillsWrapper } from './Skills.styled';
import { skillsList } from '../../skillsList';
import { SkillImage, SkillTitle } from 'components/Skills/Skills.styled';
const container = {
  hidden: { opacity: 0, y: 300 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
  transition: 0.5,
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
const Skills = () => {
  return (
    <Container $skills>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>Skills</SectionTitle>
      </motion.div>
      <motion.section variants={container} initial="hidden" animate="visible">
        <SkillsWrapper>
          {skillsList.map(skill => (
            <motion.div key={skill.id} variants={item}>
              <SkillImage src={skill.img} alt={skill.title} />
              <SkillTitle>{skill.title}</SkillTitle>
            </motion.div>
          ))}
        </SkillsWrapper>
      </motion.section>
    </Container>
  );
};

export default Skills;
