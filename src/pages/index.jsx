import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'
import pin from '../images/pin.jpg'
import tablet from '../images/tablet.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>AppOwl</BigTitle>
        <Subtitle>A simple way to monitor devices in the classroom</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Features</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Monitor"
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Know when students exit the app when they're not suppose to.
          </ProjectCard>
          <ProjectCard
            title="Rewards"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Give students stars and other cool icons when they behave.
          </ProjectCard>
          <ProjectCard
            title="Messaging"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Send direct notification messages to any and all devices.
          </ProjectCard>
          <ProjectCard
            title="Fun Time"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Incentivize behavior with fun web app experiences at times.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            AppOwl is on a mission to turn student devices into tools rather than distractions in the classroom.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          The web has so many learning resources and at the moment, classrooms are barely tapping into them to enrich
          their education experiences. AppOwl will bridge this divide between students and the internet, and provide
          ways for teachers to bring the web into their classrooms in a safe and orderly manner.
        </AboutDesc>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Title>Privacy Policy</Title>
        <AboutHero>
          <Avatar src={pin} alt="A map pin" />
          <AboutSub>Location Access</AboutSub>
        </AboutHero>
        <AboutDesc>
          AppOwl requires access to device location only for the purpose of measuring whether teacher devices are being
          used on school grounds if they have access to premium features purchased by the school.
        </AboutDesc>
        <AboutHero>
          <Avatar src={tablet} alt="A tablet icon" />
          <AboutSub>Phone State</AboutSub>
        </AboutHero>
        <AboutDesc>
          AppOwl watches the device state in order to notify the teacher's monitor at exact moments when students exit
          the applicaiton. This provides real-time monitoring functionalities for the teacher.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:andy@appowl.awsapps.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://twitter.com/rhymeswithandy">Twitter</a> &{' '}
            <a href="https://www.instagram.com/andyzanli/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by AppOwl. <a href="https://www.friendly-robot.netlify.com">Friendly-Robot</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
