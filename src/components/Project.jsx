export default function Project({src, alt, title, text, app, repo}) {
    return (
            <div className="card col" style={{ width: "18rem" }}>
                <img src={src} className="card-img-top" alt={alt} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <button type="button" class="btn btn-dark" href={app}>Link to App</button>
                    <button type="button" class="btn btn-dark" href={repo}>GitHub Repo</button>
                </div>
            </div>
    );
}
