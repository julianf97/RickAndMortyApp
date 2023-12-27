import "./status.scss"

export default function Animal( { onClick } ) {
  return (
    <div className="statusAlive" onClick={() => onClick()}>
        <div className="selectAlive">
            Animal
        </div>
    </div>
  )
}
