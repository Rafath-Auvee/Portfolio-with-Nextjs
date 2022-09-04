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
  <Layout title="Inkdrop">
    <Container>
      <Title>
      Paratronics Warehouse Solution<Badge>-2022</Badge>
      </Title>
      <P>
      Inventory Website Full stack website where we used to keep records of our products and suppliers can request for product and order. Fully dynamic made with React, React Router, MongoDB, Express, Bootstrap, Tailwind CSS, Node.js, Firebase Authentication. User can decrement the order quantity or increase vice versa and also add, delete and update product.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://marley-electronics.web.app/">
          https://marley-electronics.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Firebase Authentication, React, MongoDB, Node.js, Express, Bootstrap, Tailwind CSS</span>
        </ListItem>
        <ListItem>
          {/* <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link> */}
        </ListItem>
      </List>

      <WorkImage src="/images/works/paratronics1.png" alt="paratronics1" />
      <WorkImage src="/images/works/paratronics2.png" alt="paratronics2" />
      <WorkImage src="/images/works/paratronics3.png" alt="paratronics3" />
      <WorkImage src="/images/works/paratronics4.png" alt="paratronics4" />
      <WorkImage src="/images/works/paratronics5.png" alt="paratronics5" />
      <WorkImage src="/images/works/paratronics6.png" alt="paratronics6" />
      <WorkImage src="/images/works/paratronics7.png" alt="paratronics7" />
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
