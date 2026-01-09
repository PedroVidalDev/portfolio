import * as DiIcons from 'react-icons/di'
import * as IoIcons from 'react-icons/fa6'

import { Icon } from 'components/Icon'
import { SKILLS_LANGUAGES, SKILLS_TOOLS } from './consts'
import {
  SkillItem,
  SkillsItemsContainer,
  SkillsTopicContainer,
  SkillsTopicItems,
  SkillTitle,
} from './styles'

export const Skills = () => {
  return (
    <SkillsItemsContainer>
      <SkillsTopicContainer>
        <SkillTitle>Skills & Tools</SkillTitle>
        <SkillsTopicItems>
          {SKILLS_LANGUAGES.map((skill) => (
            <SkillItem key={skill.name}>
              {skill.iconType === 'CustomIcon' ? (
                <img src={skill.icon} alt={skill.name} />
              ) : (
                <Icon
                  name={
                    skill.icon as keyof typeof DiIcons | keyof typeof IoIcons
                  }
                  color='GRAY_0'
                  size={48}
                />
              )}
            </SkillItem>
          ))}
        </SkillsTopicItems>
      </SkillsTopicContainer>

      <SkillsTopicContainer>
        <SkillTitle>Skills & Tools</SkillTitle>
        <SkillsTopicItems>
          {SKILLS_TOOLS.map((skill) => (
            <SkillItem key={skill.name}>
              {skill.iconType === 'CustomIcon' ? (
                <img src={skill.icon} alt={skill.name} />
              ) : (
                <Icon
                  name={
                    skill.icon as keyof typeof DiIcons | keyof typeof IoIcons
                  }
                  color='GRAY_0'
                  size={48}
                />
              )}
            </SkillItem>
          ))}
        </SkillsTopicItems>
      </SkillsTopicContainer>
    </SkillsItemsContainer>
  )
}
