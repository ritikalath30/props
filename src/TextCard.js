function TextCard(props) {
  return (
    
    <div style={{'padding':'5px'}}>
      <div class="card" style={{ width: "20rem" }}>
        <div className="text-center h1">
          <i class="bi bi-laptop"></i>
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">{props.title}</h5>
          <p class="card-text">
            {props.text}
          </p>
          <div className="text-right">
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextCard;
