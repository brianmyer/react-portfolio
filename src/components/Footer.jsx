import LinkedInLogo from "../assets/LI-In-Bug.png"
export default function Footer() {
    return (
        <div className="p-2 mb-2 text-center mt-5 py-4 background-image">
            
            <a href="https://www.linkedin.com/in/brian-james-myer/" className="px-3">

                <img src={LinkedInLogo}
                    alt="LinkedIn logo"
                    width="54"
                    height="48"
                />
            </a>
            <a href="https://github.com/brianmyer" className="px-3">

                <img src="../src/assets/github-mark.png"
                    alt="GitHub logo"
                    width="48"
                    height="48"
                />
            </a>
            <a href="https://www.instagram.com/brianjamesmyer/" className="px-3">

                <img src="../src/assets/ig-icon.png"
                    alt="Instagram logo"
                    width="48"
                    height="48"
                />
            </a>
        </div>
    );
}