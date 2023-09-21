import '../index.css'

const MetricInput = (props) => {
  return (
    <p>
      <label
        htmlFor={props.metrixInputLabel.id}
      >{`${props.metrixInputLabel.text} (${props.metrixInputLabel.unit})`}</label>
      <input
        type={props.metrixInputLabel.type}
        id={props.metrixInputLabel.id}
      />
    </p>
  )
}

export default MetricInput
