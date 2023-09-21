import '../index.css'
import MetricInput from './MetricInput'

const MetricForm = (props) => {
  return (
    <form className="form">
      <div className="input-group">
        {props.metricInputLabelData.map(
          (metrixInputLabel, index) =>
            index % 2 == 0 && (
              <MetricInput metrixInputLabel={metrixInputLabel} />
            )
        )}
      </div>
      <div className="input-group">
        {props.metricInputLabelData.map(
          (metrixInputLabel, index) =>
            index % 2 != 0 && (
              <MetricInput metrixInputLabel={metrixInputLabel} />
            )
        )}
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  )
}

export default MetricForm
