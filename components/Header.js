import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: red;
`

export default () => (
  <Wrapper>
    {/* ici il nous faut le LOGO */}
    <Link href='/home'>
      <a>Home</a>
    </Link>
    <button>Profil</button> 
  </Wrapper>
)