import React, { useEffect } from "react"
import { useTranslation } from "react-i18next";
import { aboutUsMockup, instagramIcon, team } from "../../../../../utils/constants/constants"
import * as Styled from './Team.style'

function Team() {
    const { t, i18n, ready } = useTranslation(['home'], { useSuspense: true });
    useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

    return (
        <Styled.Container>
            <Styled.SectionTitle>
                <h1>{t('home.team.title')}</h1>
            </Styled.SectionTitle>
            <Styled.Title>
                <h1>{t('home.team.thePeople')} <span>{t('home.team.behind')}</span></h1>
            </Styled.Title>
            <Styled.Team>
                { team.map((member) => { 
                    return (
                    <Styled.TeamMember>
                        <Styled.Image>
                            <img alt={ member.name } src={ member.img} />
                        </Styled.Image>
                        <Styled.Description>
                            <h3>{ member.name}</h3>
                            <h4>{ member.career}</h4>
                            <p>{ member.position}</p>
                        </Styled.Description>
                        <div className="contact">
                            <ul className="sci">
                            <li>
                                <a href={ member.instagram } target="_blank" rel="noreferrer"><img src={ instagramIcon } alt={ member.name} /></a>
                            </li>
                        </ul>
                        </div>
                        
                        </Styled.TeamMember>
                    )
                })}
            </Styled.Team>
        </Styled.Container>
    )
}

export default Team