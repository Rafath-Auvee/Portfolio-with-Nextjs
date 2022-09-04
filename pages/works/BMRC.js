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
      Baust Mechatronics and Robotics Club (BMRC) <Badge> -In Development</Badge>
      </Title>
      <P>
      Chat Application for Club made with Firebase cloude messag, Reactjs , Tailwindcss, DaisyUI. Logged in users can chat with another club member. Protected Route for chat and user profile. Users can update their profile.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://bmrc.vercel.app/">
          https://bmrc.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Firebase, ExpressJS, NodeJS, React, MongoDB</span>
        </ListItem>
        <ListItem>
          {/* <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link> */}
        </ListItem>
      </List>

      <WorkImage src="/images/works/chat1.png" alt="chat1" />
      <WorkImage src="/images/works/chat2.png" alt="chat2" />
      <WorkImage src="/images/works/chat3.png" alt="chat3" />

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
