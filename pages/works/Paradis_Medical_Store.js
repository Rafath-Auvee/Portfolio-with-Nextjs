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
  <Layout title="BMRC">
    <Container>
      <Title>
        Paradis Medical Store<Badge> - ReactJS</Badge>
      </Title>
      <P>
        Medical Store Website where your selected product goes to cart and from
        that cart you can choose one randomly.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://auvee-assignment-8.netlify.app/">
            Live Link
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Rafath-Auvee/Paradis-Island-Medical-Store-Lucky-One-">
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
          <span>ReactJS, Tailwind, Hooks</span>
        </ListItem>
        <ListItem></ListItem>
      </List>

      <WorkImage
        src="/Portofolio-Images/ReactJS/Paradis Medical Store/1.png"
        alt="chat1"
      />
      <WorkImage
        src="/Portofolio-Images/ReactJS/Paradis Medical Store/2.png"
        alt="chat2"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
