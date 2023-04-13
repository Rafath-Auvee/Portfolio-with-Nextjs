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
        Job Hunt <Badge> - React, Redux, Redux with Tookit, Thunk, RTK</Badge>
      </Title>
      <P>
        Job Hunt is a place where employer post vacancy and applicant apply for
        job. Protected Routes, Login/Signup, Role Setup, Job Applied, Job
        Create.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://job-hunt-xi.vercel.app/">
            Live Link
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Rafath-Auvee/JobHunt">
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
          <span>React, Redux, Redux with Tookit, Thunk, RTK, TailwindCSS</span>
        </ListItem>
        <ListItem></ListItem>
      </List>

      <WorkImage
        src="/Portofolio-Images/React-Redux/JobHunt/1.png"
        alt="chat1"
      />
      <WorkImage
        src="/Portofolio-Images/React-Redux/JobHunt/2.png"
        alt="chat2"
      />
      <WorkImage
        src="/Portofolio-Images/React-Redux/JobHunt/3.png"
        alt="chat3"
      />
      <WorkImage
        src="/Portofolio-Images/React-Redux/JobHunt/4.png"
        alt="chat1"
      />
      <WorkImage
        src="/Portofolio-Images/React-Redux/JobHunt/5.png"
        alt="chat2"
      />
      <WorkImage
        src="/Portofolio-Images/React-Redux/JobHunt/6.png"
        alt="chat3"
      />
      <WorkImage
        src="/Portofolio-Images/React-Redux/JobHunt/7.png"
        alt="chat1"
      />
      <WorkImage
        src="/Portofolio-Images/React-Redux/JobHunt/8.png"
        alt="chat2"
      />
      <WorkImage
        src="/Portofolio-Images/React-Redux/JobHunt/9.png"
        alt="chat3"
      />
      <WorkImage
        src="/Portofolio-Images/React-Redux/JobHunt/10.png"
        alt="chat3"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
