import Project from '../components/Project';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className='container'>
        <div className='row'>
        <Project
          src="./src/assets/VW.png"
          alt="VoteWave logo"
          title="VoteWave"
          text="Your Voice, Your Choice."
          app="https://votewave-2770cf914d61.herokuapp.com/"
          repo="https://github.com/brianmyer/votewave"
        >
        </Project>

        <Project
          src="./src/assets/arvdark.png"
          alt="ARV logo"
          title="ARV"
          text="Know exactly where and when to pick up your loved ones."
          app="https://brianmyer.github.io/ARV/"
          repo="https://github.com/brianmyer/ARV"
        >
        </Project>

        <Project
          src="https://placehold.co/300x200/55887C/FFF?text=Placeholder"
          alt="placeholder logo"
          title="Placeholder"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          app="https://www.linkedin.com/in/brian-james-myer"
          repo="https://github.com/brianmyer"
        >
        </Project>
        </div>
        <div className='row'>
        <Project
          src="https://placehold.co/300x200/55887C/FFF?text=Placeholder"
          alt="placeholder logo"
          title="Placeholder"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          app="https://www.linkedin.com/in/brian-james-myer"
          repo="https://github.com/brianmyer"
        >
        </Project>

        <Project
          src="https://placehold.co/300x200/55887C/FFF?text=Placeholder"
          alt="placeholder logo"
          title="Placeholder"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          app="https://www.linkedin.com/in/brian-james-myer"
          repo="https://github.com/brianmyer"
        >
        </Project>

        <Project
          src="https://placehold.co/300x200/55887C/FFF?text=Placeholder"
          alt="placeholder logo"
          title="Placeholder"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          app="https://www.linkedin.com/in/brian-james-myer"
          repo="https://github.com/brianmyer"
        >
        </Project>

        </div>
      </div>
    </div >  
  );
} 
