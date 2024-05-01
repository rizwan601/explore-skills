

function ImageCard(props:string) {
  return (
    <div className="facilities-col">
    <img src={props.source} alt=""/>
    <h3>{props.title}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
    </p>
</div>
  )
}

export default ImageCard