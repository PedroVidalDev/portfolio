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
import { useTranslation } from 'react-i18next'

export const Skills = () => {
  const { t } = useTranslation()

  return (
    <SkillsItemsContainer>
      <SkillsTopicContainer>
        <SkillTitle>{t('skill.skillLanguageTitle')}</SkillTitle>
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
        <SkillTitle>{t('skill.skillTollsTitle')}</SkillTitle>
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
