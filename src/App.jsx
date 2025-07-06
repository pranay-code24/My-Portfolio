import AboutMeMain from './components/aboutMeSection/AboutMeMain.jsx';
import AchievementsMain from './components/Achievements/AchievementsMain.jsx';
import ContactMeMain from './components/contactMeSection/ContactMeMain.jsx';
import FooterMain from './components/footer/FooterMain.jsx';
import HelperSection from './components/HelperSection.jsx';
import HeroGradient from './components/heroSection/HeroGradient.jsx';
import HeroMain from './components/heroSection/HeroMain.jsx';
import SubHeroSection from './components/heroSection/SubHeroSection.jsx';
import NavbarMain from './components/navbar/NavbarMain.jsx';
import ProjectsMain from './components/projectsSection/ProjectsMain.jsx';
import SkillsMain from './components/skillsSection/SkillsMain.jsx';
import SubSkills from './components/skillsSection/SubSkills.jsx';

function App() {
  return (
    <main className='font-body'>
      <NavbarMain/>
      <HeroMain/>
      <HeroGradient/>
      <SubHeroSection/>
      <AboutMeMain/>
      <SkillsMain/>
      <SubSkills/>
      <ProjectsMain/>
      <AchievementsMain/>
      <ContactMeMain/>
      <FooterMain/>
      {/* <HelperSection/> */}
    </main>
  );
}

export default App;
