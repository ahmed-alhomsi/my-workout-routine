function Card({ src, alt, numberOfSets }) {
  return (
    <div className="card shadow" style={{width: "400px"}}>
        <img style={{width: "100%", height: "200px"}} src={src} alt={alt} />
        <div className="card-body">
            <h4 className="card-title">Number of Sets</h4>
            <p className="card-text">{numberOfSets}</p>
        </div>
    </div>
  )
}

export default Card