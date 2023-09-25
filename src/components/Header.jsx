import Nav from './NavTabs';


export default function Header() {
    return (
        <div className="border-bottom border-3 border-dark p-2 mb-2 border-opacity-50 text-center">
            <a href="https://www.linkedin.com/in/brian-james-myer/">

               Brian James Myer - Full Stack Web Developer
            </a>
            <Nav />
        </div>
    );
}