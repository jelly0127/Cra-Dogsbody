import styled from 'styled-components'
import useWindowSize from '../../hooks/isDesktop'
import DOCS_ICON from './images/Docs.png'
import DOCS_ICON_DARK from './images/Docs_dark.png'

import DISCORD from './images/Discord.png'
import DISCORD_DARK from './images/Discord_dark.png'

import TWITTER_ICON from './images/Twitter.png'
import TWITTER_ICON_DARK from './images/Twitter_dark.png'

import MEDIUM from './images/Medium.png'
import MEDIUM_DARK from './images/Medium_dark.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 182px;
  img {
    cursor: ${(prop: any) => (prop.theme.isDesktop ? 'pointer' : 'none')};
    width: 32px;
  }
`

const imgArray = [
  {
    darkICon: DOCS_ICON_DARK,
    icon: DOCS_ICON,
    url: 'https://baidu.com/',
  },
  {
    darkICon: DISCORD_DARK,
    icon: DISCORD,
    url: 'https://baidu.com/',
  },
  {
    darkICon: TWITTER_ICON_DARK,
    icon: TWITTER_ICON,
    url: 'https://baidu.com/',
  },
  {
    darkICon: MEDIUM_DARK,
    icon: MEDIUM,
    url: 'https://baidu.com/',
  },
]

// eslint-disable-next-line no-undef
const CommunityLinkGroup: React.FC = () => {
  const isDesktop = useWindowSize().isDesktop
  return (
    <Wrapper>
      {imgArray.map(item => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={item.darkICon} onClick={() => window.open(item.url)} key={item.url + item.icon} />
      ))}
    </Wrapper>
  )
}

export default CommunityLinkGroup
