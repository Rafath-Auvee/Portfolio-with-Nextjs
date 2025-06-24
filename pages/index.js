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
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoGithub
} from 'react-icons/io5'

import Image from 'next/image'
import MyYt from '../public/images/links/yt.jpg'
import MyLinkedin from '../public/images/links/thumbLinkedin.png'
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
        Hello, I&apos;m an aspirant full stack developer based in Bangladesh!
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
          Rafath is an aspiring full-stack developer based in Chittagong,
          Bangladesh. I have a passion for building things for the web and
          recently completed my Bachelor's degree in Computer Science &
          Engineering at Bangladesh Army University of Science and Technology.
        </Paragraph>
        <Box align="center" my={4}>
          <Link
            href="https://drive.google.com/drive/folders/1rgRtmyvDgO_wDsildhGdCCXYfRwBps67?usp=sharing"
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
          <BioYear>2024 - 2025</BioYear>
          Joined Think Studio LLC as Junior Software Engineer
        </BioSection>

        <BioSection>
          <BioYear>2023 - 2024</BioYear>
          Joined Save The Date as Full Stack Web Developer
        </BioSection>

        <BioSection>
          <BioYear>2023</BioYear>
          Graduated with a B.Sc. in Computer Science & Engineering from
          Bangladesh Army University of Science & Technology
        </BioSection>

        <BioSection>
          <BioYear>2022</BioYear>
          Joined Wrexa LLC as Full Stack Web Developer
        </BioSection>

        <BioSection>
          <BioYear>2019</BioYear>
          Participated in Dhaka Regional ACM ICPC 2019 (Team: BAUST_Codex)
        </BioSection>

        <BioSection>
          <BioYear>2019</BioYear>
          2nd place in Robotronics 2019 - Line Follower (Speed Battle)
        </BioSection>

        <BioSection>
          <BioYear>2019</BioYear>
          Participated in RUET CSE FEST 2019
        </BioSection>

        <BioSection>
          <BioYear>2017</BioYear>
          3rd place in Outsbook Inter School and College Programming Contest
          (College Level)
        </BioSection>

        <BioSection>
          <BioYear>2017</BioYear>
          Participated in ICT Olympiad at 3rd AUW MATH & ICT FEST 2017
        </BioSection>

        <BioSection>
          <BioYear>2017</BioYear>
          Participated in Drishty Chittagong Junior Model United Nations
          Conference
        </BioSection>

        <BioSection>
          <BioYear>2000 - June</BioYear>
          Born in Chittagong, Bangladesh
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Travelling, Kayaking,{' '}
          <Link href="https://auvee.itch.io/trass" target="_blank">
            Making Video Games{' '}
          </Link>
          ,Machine Learning, Problem solving
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <BioSection>
          <BioYear>Frontend</BioYear>
          NextJS, ReactJS, HTML, CSS
        </BioSection>

        <BioSection>
          <BioYear>Backend</BioYear>
          Express.js, Node.js
        </BioSection>
        <BioSection>
          <BioYear>Database</BioYear>
          MongoDB, Firebase
        </BioSection>
        <BioSection>
          <BioYear>Version Control</BioYear>
          Github
        </BioSection>
        <BioSection>
          <BioYear>UI</BioYear>
          Material UI, SCSS, DaisyUI, TailwindCSS, Bootstrap
        </BioSection>
        <BioSection>
          <BioYear>State Management</BioYear>
          Redux
        </BioSection>
        <BioSection>
          <BioYear>Other Languages</BioYear>
          C++, Python
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>2023 June - Now</BioYear>
          Full Stack Web Developer at Save The Date
        </BioSection>
        <BioSection>
          {/* <BioYear>Wrexa LLC</BioYear> */}
          <BioYear>2022 October - 2023 March</BioYear>
          Jr Web Developer at Wrexa LLC
        </BioSection>

        {/* <BioSection>
          <BioYear>2022 (August - September)</BioYear>
          Web Developer at Sigma Tenant
        </BioSection>
      

        <BioSection>
          <BioYear>November 2016 - Present</BioYear>
          Freelance Web Developer at Fiverr
        </BioSection> */}
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Rafath-Auvee" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Rafath-Auvee
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
            <Link
              href="https://www.facebook.com/rafathbinzafarauvee/"
              target="_blank"
            >
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
            <Link
              href="https://www.instagram.com/rafath_auvee/"
              target="_blank"
            >
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
