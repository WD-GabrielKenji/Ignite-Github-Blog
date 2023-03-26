import { useNavigate } from 'react-router-dom'

import { ExternalLink } from '../../../../Components/ExternalLink'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { PostHeaderContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostHeader() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      <>
        <header>
          <ExternalLink
            as="button"
            onClick={goBack}
            icon={<FontAwesomeIcon icon={faChevronLeft} />}
            text="Voltar"
            variant="iconLeft"
          />
          <ExternalLink text="Ver no Github" href="#" target="_blank" />
        </header>

        <h1>JavaScript data types and data structures</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            WD-GabrielKenji
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} />
            Há 1 dia
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </li>
        </ul>
      </>
    </PostHeaderContainer>
  )
}
