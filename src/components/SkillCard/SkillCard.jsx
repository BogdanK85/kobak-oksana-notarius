import React from 'react';
import { Skill, SkillImage, SkillTitle } from './SkillCadr.styled';
import { skillsList } from '../../skillsList';
const SkillCard = ({ title, img }) => {
  const skill = skillsList.find(skill => skill.title === title);
  if (!skill) {
    return null;
  }
  return (
    <Skill>
      <SkillImage src={skill.img} alt={title} />
      <SkillTitle>{title}</SkillTitle>
    </Skill>
  );
};

export default SkillCard;
