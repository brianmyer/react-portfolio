export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
        <a href="#" className="btn">
      <div className="card" style={{ width: "18rem" , height: "18rem"}}>
          <img src="./src/assets/VW.png" className="card-img-top" alt="VoteWave logo" />
          <div className="card-body">
            <h5 className="card-title">VoteWave</h5>
            <p className="card-text">Your Voice, Your Choice.</p>

          </div>
      </div>
        </a>
        <a href="#" className="btn">
      <div className="card" style={{ width: "18rem", height: "18rem"}}>
          <img src="./src/assets/arvdark.png" className="card-img-top" alt="ARV logo" />
          <div className="card-body">
            <h5 className="card-title">ARV</h5>
            <p className="card-text">Know exactly where and when to pick up your loved ones.</p>

          </div>
      </div>
        </a>

    </div>
  );
}
