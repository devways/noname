import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
  
  background-color: blue;
`

export default () => (
  <Wrapper>
    <button>contact</button>
    <Link href="/about">
      <button>about</button>
    </Link>
  </Wrapper>
)