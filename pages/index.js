import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

import Image from 'next/image'
import MyYt from "../public/images/links/yt.jpg"
import MyLinkedin from "../public/images/links/thumbLinkedin.png"
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an full stack developer based in Bangladesh!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rafath Bin Zafar Auvee
          </Heading>
          <p>Full Stack Web Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/rafath.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Rafath is a full-stack developer based in Chittagong, Bangladesh. I
          build things for the web. I'm currently a final year student at
          Bangladesh Army University of Science and Technology. pursuing a
          degree in Computer Science and Engineering.
        </Paragraph>
        <Box align="center" my={4}>
          <Link
            href="https://drive.google.com/file/d/10cSdnYrtMm0fN8QsM_-WK49kjnsLCD-N/view?usp=sharing"
            target="_blank"
          >
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Resume
            </Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Chittagong, Bangladesh.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Participated in ICT Olympiad in 3rd AUW MATH & ICT FEST 2017 at AUW
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Placed 3rd in Outsbook Inter School and College Programming Contest
          (College Level).
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Placed 2nd in Robotronics 2019 - Line Follower Robot (Speed Battle).
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Participated in Dhaka Regional ACM ICPC
        </BioSection>
        <BioSection>
          <BioYear>2019 - Present </BioYear>
          Currently Final Year Student & Pursueing my Bachelor&apos;s in
          Computer Science & Engineering (Expected Graduation in 2023)
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Robo Soccer at AUST Mind spark
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          General Secretary at BAUST Mechatronics and Robotics Club.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Travelling, Kayaking,{' '}
          <Link href="https://auvee.itch.io/trass" target="_blank">
            Making Video Games
          </Link>
          , Machine Learning, Problem solving
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Rafath-Bin-Zafar-Auvee" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Rafath-Bin-Zafar-Auvee
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/RafathAuvee" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @RafathAuvee
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/rafathbinzafarauvee/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                Rafath Auvee
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/rafath_auvee/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @rafath_auvee
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCD1DaFedbnT8w_gH6N23VFA"
            title="Rafath Auvee's Youtube Channel"
            thumbnail={MyYt}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.linkedin.com/in/auvee/"
            title="Linkedin"
            thumbnail={MyLinkedin}
          >
            My Linkedin
          </GridItem>
        </SimpleGrid>
{/* 
        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
