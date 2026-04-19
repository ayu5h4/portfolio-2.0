import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Skills from './_components/Skills';
import Experience from './_components/Experience';
import Achievement from './_components/Achievement';
import ProjectList from './_components/ProjectList';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <div className="my-20" />
            <AboutMe />
            <div className="my-20" />
            <Skills />
            <div className="my-20" />
            <Experience />
            <div className="my-20" />
            <Achievement />
            <div className="my-20" />
            <ProjectList className="mt-20" />
        </div>
    );
}
