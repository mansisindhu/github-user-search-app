const Card = ({ data }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "auto" }}>
      <img src={data.avatar_url} className="card-img-top" alt={data.login} />
      <div className="card-body" style={{height: "210px"}}>
        <h5 className="card-title">{data.name ? data.name : data.login}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{data.login}</h6>
        <p className="m-1">Total Repos: {data.public_repos}</p>
        <p className="m-1"><span>Followers: {data.followers} </span> <span style={{marginLeft: "12px"}}>Following: {data.following}</span></p>
        <p className="m-1">Location: {data.location ? data.location : "N/A"}</p>
        <p className="m-1">Company: {data.company ? data.company : "N/A"}</p>
      </div>
      <div className="card-footer">
        <a target="_blank" style={{textDecoration: "none", color: "black"}} href={data.html_url} >Visit profile on GitHub</a>
        </div>
    </div>
  );
};

export default Card;
