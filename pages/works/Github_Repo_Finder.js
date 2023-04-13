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
  <Layout title="Github Repo Finder">
    <Container>
      <Title>
        Github Repo Finder <Badge> - ReactJS, TailwindCSS</Badge>
      </Title>
      <P>Finding Github Repo using username</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="rafath-github-repo-finder.vercel.app">
            Live Link
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Rafath-Auvee/Github-Repo-Finder">
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
          <span>ReactJS, TailwindCSS</span>
        </ListItem>
        <ListItem></ListItem>
      </List>

      <WorkImage
        src="/Portofolio-Images/ReactJS/Github-Repo-Finder/1.png"
        alt="chat1"
      />
      <WorkImage
        src="/Portofolio-Images/ReactJS/Github-Repo-Finder/2.png"
        alt="chat2"
      />
      <WorkImage
        src="/Portofolio-Images/ReactJS/Github-Repo-Finder/3.png"
        alt="chat3"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
