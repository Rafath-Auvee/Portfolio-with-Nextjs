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
        Phone Hunter{' '}
        <Badge> - JavaScript Async/Await, DOM Manipulation, Bootstarp</Badge>
      </Title>
      <P>Asynchronus Data Handling and DOM Manipulation</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://auvee-assignment-6.netlify.app">
            Live Link
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Rafath-Auvee/Phone-Hunter">
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
          <span>
            HTML, CSS, JavaScript Async/Await, DOM Manipulation, Bootstarp
          </span>
        </ListItem>
        <ListItem></ListItem>
      </List>

      <WorkImage
        src="/Portofolio-Images/JavaScript/phone-hunter/1.png"
        alt="chat1"
      />
      <WorkImage
        src="/Portofolio-Images/JavaScript/phone-hunter/2.png"
        alt="chat2"
      />
      <WorkImage
        src="/Portofolio-Images/JavaScript/phone-hunter/3.png"
        alt="chat3"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
