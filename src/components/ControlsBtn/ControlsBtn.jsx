import css from '../Feedback.module.css'
import PropTypes from 'prop-types'

const ControlsBtn = ({data, increment}) => {
  return (
    <div>
      {data.map(item => {
        return (
          <button
            type="button"
            key={item}
            onClick={() => increment(item)}
            className={css.btn}
          >{item}</button>
        );
    })}
    </div>
  );
}
ControlsBtn.propTypes = {
data: PropTypes.array.isRequired,
increment: PropTypes.func.isRequired,
}
export default ControlsBtn
