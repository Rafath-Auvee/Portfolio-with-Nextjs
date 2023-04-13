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
  <Layout title="Todo">
    <Container>
      <Title>
        Rafath Todo <Badge> - ReactJS, Firebase Auth</Badge>
      </Title>
      <P>
       My Personal Todo Application. It reaveals my location every time I do CRUD
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sigma-tenant-afea5.web.app/">
            Live Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Rafath-Auvee/Sigma-Tenant-Todo-With-Firebase-Cloud-Function">
            Repo Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, Firebase Auth, Tailwind</span>
        </ListItem>
        <ListItem>
          {/* <Meta>Blogpost</Meta>
              <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
                How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
                $5/mo <ExternalLinkIcon mx="2px" />
              </Link> */}
        </ListItem>
      </List>

      <WorkImage
        src="/Portofolio-Images/Full Stack/Rafath-Todo-with-Location/1.png"
        alt="chat1"
      />
      <WorkImage
        src="/Portofolio-Images/Full Stack/Rafath-Todo-with-Location/2.png"
        alt="chat2"
      />
      <WorkImage
        src="/Portofolio-Images/Full Stack/Rafath-Todo-with-Location/3.png"
        alt="chat3"
      />
      <WorkImage
        src="/Portofolio-Images/Full Stack/Rafath-Todo-with-Location/4.png"
        alt="chat4"
      />
      <WorkImage
        src="/Portofolio-Images/Full Stack/Rafath-Todo-with-Location/5.png"
        alt="chat5"
      />
      <WorkImage
        src="/Portofolio-Images/Full Stack/Rafath-Todo-with-Location/6.png"
        alt="chat5"
      />

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
