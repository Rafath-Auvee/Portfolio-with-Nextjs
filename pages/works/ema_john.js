import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Ema John">
    <Container>
      <Title>
        Ema John <Badge> - ECommerce</Badge>
      </Title>
      <P>
        ECommerce where various product store in a json and cart also implement.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://eshop-f5bd1.web.app/">
            Live Link
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Live Link</Meta>
          <Link href="https://github.com/Rafath-Auvee/EShop-with-Reactjs">
            Repo Link
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, Tailwind, Router, Firebase Authentication</span>
        </ListItem>
        <ListItem></ListItem>
      </List>

      <WorkImage src="/Portofolio-Images/ReactJS/ema-john/1.png" alt="chat1" />
      <WorkImage src="/Portofolio-Images/ReactJS/ema-john/2.png" alt="chat2" />
      <WorkImage src="/Portofolio-Images/ReactJS/ema-john/3.png" alt="chat3" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
