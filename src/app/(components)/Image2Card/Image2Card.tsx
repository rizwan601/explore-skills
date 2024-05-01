

function Image2Card(props:string) {
  return (
    <div className="campus-col">
                <img src={props.src} alt=""/>
                <div className="layer">
                    <h3>{props.title}</h3>
                </div>
                </div>
  )
}

export default Image2Card