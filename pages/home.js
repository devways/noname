import Layout from '../components/Layout'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: green;
  height: 100%;
  margin-botton: -10px;
`

export default () => (
  <Wrapper>
    <Layout>
      <p>here is home page</p>
    </Layout>
  </Wrapper>
)