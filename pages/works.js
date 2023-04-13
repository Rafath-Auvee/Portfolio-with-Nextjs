import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import Marley from '../public/images/works/me.png'
import Chat from '../public/images/works/chat.png'
import Paratronics from '../public/images/works/mern2.png'

import htmlLanding from '../public/Portofolio-Images/HTML-CSS/html-porfolio-v1/1.png'

import influener_gear from '../public/Portofolio-Images/HTML-CSS/influencer-gear/1.png'
import convention_center from '../public/Portofolio-Images/Responsive/convention-center/1.png'
import panda_commerce from '../public/Portofolio-Images/Responsive/panda-commerce/1.png'

import mission from '../public/Portofolio-Images/HTML-CSS/mission 2022/1.png'
import expense_tracker from '../public/Portofolio-Images/JavaScript/money-expense-tracker/1.png'
import phone_hunter from '../public/Portofolio-Images/JavaScript/phone-hunter/2.png'

import ema_john from '../public/Portofolio-Images/ReactJS/ema-john/1.png'
import Github_Repo_Finder from '../public/Portofolio-Images/ReactJS/Github-Repo-Finder/1.png'
import Laptop_Shop from '../public/Portofolio-Images/ReactJS/Laptop Shop/1.png'
import Law_By_Auvee from '../public/Portofolio-Images/ReactJS/Law By Auvee/1.png'
import Paradis_Island_Electric_Shop from '../public/Portofolio-Images/ReactJS/Paradis Island Electric Shop/1.png'
import Paradis_Medical_Store from '../public/Portofolio-Images/ReactJS/Paradis Medical Store/1.png'
import React_Search_Sort_Pagination_Find from '../public/Portofolio-Images/ReactJS/React Search Sort Pagination Find/1.png'
import Rest_Countries from '../public/Portofolio-Images/ReactJS/Rest-Countries/1.png'

import rafath_todo from "../public/Portofolio-Images/Full Stack/Rafath-Todo-with-Location/1.png"

const Works = () => {
  // const developer_porfolio = 'https://ibb.co/1J6jnXM'
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Noteworthy Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="marley-electronics"
              title="Marley Electronics"
              thumbnail={Marley}
            >
              E-commerce website where user can buy products through Stripe. And
              Admins can make a user an admin or remove them.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="Paratronics-Warehouse"
              title="Paratronics Warehouse"
              thumbnail={Paratronics}
            >
              Full stack inventory website where we used to keep records of our
              products and suppliers can request for product and order.
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem id="BMRC" title="BMRC (Beta)" thumbnail={Chat}>
              Chat Application for Robotics Club where users can have different
              roles and can chat with there fellow club members.
            </WorkGridItem>
          </Section>
          {/* <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section> */}
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Full Stack Projects
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem id="Rafath_Todo" thumbnail={rafath_todo} title="Rafath Todo">
              My Personal Todo Application With Location Finder where every time reveal your
              location by doing CRUD operations.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            ReactJS
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="React_Search_Sort_Pagination_Find"
              thumbnail={React_Search_Sort_Pagination_Find}
              title="React Search Sort Pagination Find"
            >
              My HTML Portfolio Website during my learning phase
            </WorkGridItem>
          </Section>

          <Section delay={0.5}>
            <WorkGridItem
              id="Github_Repo_Finder"
              thumbnail={Github_Repo_Finder}
              title="Github Repo Finder"
            >
              My HTML Portfolio Website during my learning phase
            </WorkGridItem>
          </Section>

          <Section delay={0.5}>
            <WorkGridItem id="ema_john" thumbnail={ema_john} title="Ema John">
              My HTML Portfolio Website during my learning phase
            </WorkGridItem>
          </Section>

          <Section delay={0.5}>
            <WorkGridItem
              id="Laptop_Shop"
              thumbnail={Laptop_Shop}
              title="Laptop Shop"
            >
              My HTML Portfolio Website during my learning phase
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="Law_By_Auvee"
              thumbnail={Law_By_Auvee}
              title="Law By Auvee"
            >
              My HTML Portfolio Website during my learning phase
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="Paradis_Island_Electric_Shop"
              thumbnail={Paradis_Island_Electric_Shop}
              title="Paradis Island Electric Shop"
            >
              My HTML Portfolio Website during my learning phase
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="Paradis_Medical_Store"
              thumbnail={Paradis_Medical_Store}
              title="Paradis Medical Store"
            >
              My HTML Portfolio Website during my learning phase
            </WorkGridItem>
          </Section>

          <Section delay={0.5}>
            <WorkGridItem
              id="Rest_Countries"
              thumbnail={Rest_Countries}
              title="Rest Countries"
            >
              My HTML Portfolio Website during my learning phase
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            JavaScript
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="expense_tracker"
              thumbnail={expense_tracker}
              title="Monthly Expense Tracker"
            >
              Expense tracker for monthly for cloth, rent, food and also for
              savings
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="Phone_Hunter"
              thumbnail={phone_hunter}
              title="Phone Hunter"
            >
              API Fetching for phone and dom manipulation
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Responsive Website
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="influener_gear"
              thumbnail={influener_gear}
              title="Influencer Gear"
            >
              Photography Landing Page
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="panda_commerce"
              thumbnail={panda_commerce}
              title="Panda Commerce"
            >
              Shop Landing Page for bags, watchs, shoes
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="convention_center"
              thumbnail={convention_center}
              title="Convention Center"
            >
              Convention Center Landing Page for marriage and family programs
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            HTML & CSS
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem id="Mission_2022" thumbnail={mission} title="Mission 2022">
              Landing Page in HTML & CSS
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            HTML
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="html_porfolio"
              thumbnail={htmlLanding}
              title="HTML Porfolio"
            >
              My HTML Portfolio Website during my learning phase
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
