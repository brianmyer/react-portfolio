import headshot from "../assets/headshot.jpg"

export default function About() {
  return (
    <div className="my-4">
      <img src={headshot}
        alt="Portrait of Brian James Myer"
        height="100"
        width="150"
        className="rounded-circle my-3"
      />
      <h1 className="my-3">About</h1>
      <p className="my-3">
        Enterprising full stack web developer with over a decade of experience in cross-functional collaboration in high pressure situations. Strong ability to work both independently and collaboratively in fast-paced, agile environments. Proficient in both front-end and back-end technologies, with expertise in HTML, CSS, JavaScript, SQL, Node.js, and relational databases. Skilled in creating responsive and visually appealing user interfaces while ensuring seamless integration with server-side functionalities. Strong problem-solving abilities and a passion for staying up-to-date with industry trends and emerging technologies. Certificate of Completion in Full-Stack Web Development from the University of Pennsylvania in collaboration with edX LLC.
      </p>
    </div>
  );
}
