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
  <Layout title="Search Sort Pagination Find">
    <Container>
      <Title>
        ReactJS Search Sort Pagination Find <Badge> - ReactJS</Badge>
      </Title>
      <P>
        Search Sort Pagination Find implemented in 100 products. The products
        store in products.json and Search Sort Pagination Find implemented in
        the products. products
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Live</Meta>
          <Link href="https://react-search-sort-pagination-100-items.vercel.app">
            Live Link
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/Rafath-Auvee/React-Search-Sort-Pagination---100-Items">
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
        src="/Portofolio-Images/ReactJS/React Search Sort Pagination Find/1.png"
        alt="chat1"
      />
      <WorkImage
        src="/Portofolio-Images/ReactJS/React Search Sort Pagination Find/2.png"
        alt="chat2"
      />
      <WorkImage
        src="/Portofolio-Images/ReactJS/React Search Sort Pagination Find/3.png"
        alt="chat3"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
