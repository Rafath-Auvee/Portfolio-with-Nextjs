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
        Expense Tracker <Badge> - Monthly Expense Tracker</Badge>
      </Title>
      <P>Monthly Expense Tracker for Food, Rent, Income and Savings.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://auvee-assignment-5.netlify.app/">
            Live Link
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Rafath-Auvee/Monthly-Expense-Tracker">
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
            HTML, CSS, Bootstrap, JavaScript Async/Await, DOM Manipulation
          </span>
        </ListItem>
        <ListItem></ListItem>
      </List>

      <WorkImage
        src="/Portofolio-Images/JavaScript/money-expense-tracker/1.png"
        alt="chat1"
      />
      <WorkImage
        src="/Portofolio-Images/JavaScript/money-expense-tracker/2.png"
        alt="chat2"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
