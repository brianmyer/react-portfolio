import Nav from './NavTabs';


export default function Header() {
    return (
        <div className="border-bottom border-3 border-dark p-2 border-opacity-50 text-center my-3">
            <a className='link-dark text-decoration-none' href="https://www.linkedin.com/in/brian-james-myer/">
        
               <h1>
                Brian James Myer - Full Stack Web Developer
                </h1>
            </a>
            <Nav />
        </div>
    );
}