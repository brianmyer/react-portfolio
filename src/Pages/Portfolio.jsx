export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="card" style={{ width: "18rem" }}>
          <img src="./src/assets/VW.png" className="card-img-top" alt="VoteWave logo" />
          <div className="card-body">
            <h5 className="card-title">VoteWave</h5>
            <p className="card-text">Your Voice, Your Choice.</p>
            <button type="button" class="btn btn-dark" href="https://votewave-2770cf914d61.herokuapp.com/">Link to App</button>
            <button type="button" class="btn btn-dark" href="https://github.com/brianmyer/votewave">GitHub Repo</button>
          </div>
      </div>
      <div className="card" style={{ width: "18rem"}}>
          <img src="./src/assets/arvdark.png" className="card-img-top" alt="ARV logo" />
          <div className="card-body">
            <h5 className="card-title">ARV</h5>
            <p className="card-text">Know exactly where and when to pick up your loved ones.</p>
            <button type="button" class="btn btn-dark" href="https://brianmyer.github.io/ARV/">Link to App</button>
            <button type="button" class="btn btn-dark" href="https://github.com/brianmyer/ARV">GitHub Repo</button>
          </div>
      </div>

    </div>
  );
}
