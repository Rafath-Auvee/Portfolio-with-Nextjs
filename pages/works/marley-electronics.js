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
  <Layout title="Marley Electronics">
    <Container>
      <Title>
        Marley Electronics<Badge>-2022</Badge>
      </Title>
      <P>
        Made with React, React Router, DaisyUI, Node.js, Express, MongoDB,
        Firebase Authentication. User can sign in / sign up and can order for
        product. Also secure payment system implemented with stripe. Admin can
        make admin any user, track order.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://marley-electronics-client.vercel.app/">
            Live Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Rafath-Auvee/Marley-Electronics-Client">
            Client Repo
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Rafath-Auvee/Marley-Server-">
            Server Repo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, React, MongoDB, Stripe</span>
        </ListItem>
        <ListItem>
          {/* <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link> */}
        </ListItem>
      </List>

      <WorkImage src="/images/works/marley1.png" alt="marley1" />
      <WorkImage src="/images/works/marley2.png" alt="marley2" />
      <WorkImage src="/images/works/marley3.png" alt="marley3" />
      <WorkImage src="/images/works/marley4.png" alt="marley4" />
      <WorkImage src="/images/works/marley5.png" alt="marley5" />
      <WorkImage src="/images/works/marley6.png" alt="marley6" />
      <WorkImage src="/images/works/marley7.png" alt="marley7" />
      <WorkImage src="/images/works/marley8.png" alt="marley8" />
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
