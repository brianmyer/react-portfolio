import Nav from './NavTabs';


export default function Header() {
    return (
        <div className="header-container text-center mb-3">
            <div className="background-image">
                <a className="link-dark text-decoration-none" href="https://www.linkedin.com/in/brian-james-myer/">
                    <h1 className="text-start">
                        Brian James Myer - Full Stack Web Developer
                    </h1>
                </a>
                <Nav />
            </div>
        </div>
    );
}