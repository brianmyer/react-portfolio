export default function Footer() {
    return (
        <div className="border-top border-3 border-dark p-2 mb-2 border-opacity-50 text-center mt-5 pt-4">
            <a href="https://www.linkedin.com/in/brian-james-myer/" className="px-3">

                <img src="../src/assets/LI-In-Bug.png"
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