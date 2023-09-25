export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="card" style={{ width: "18rem" , height: "18rem"}}>
        <a href="#" className="btn">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">VoteWave</h5>
            <p className="card-text">Your Voice, Your Choice</p>

          </div>
        </a>
      </div>
      <div className="card" style={{ width: "18rem", height: "18rem"}}>
        <a href="#" className="btn">
          <img src="../assets/arvgray.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">ARV</h5>
            <p className="card-text">Know exactly where and when to pick up your loved ones.</p>

          </div>
        </a>
      </div>

    </div>
  );
}
