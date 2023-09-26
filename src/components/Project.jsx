export default function Project({src, alt, title, text, app, repo}) {
    return (
            <div className="card col" style={{ width: "18rem" }}>
                <img src={src} className="card-img-top" alt={alt} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href={app}>
                    <button type="button" class="btn btn-dark mx-2">Link to App</button>
                    </a>
                    <a href={repo}>
                    <button type="button" class="btn btn-dark mx-2" >GitHub Repo</button>
                    </a>
                </div>
            </div>
    );
}
