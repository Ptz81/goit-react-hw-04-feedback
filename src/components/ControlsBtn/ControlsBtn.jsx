import css from '../Feedback.module.css'
import PropTypes from 'prop-types'

const ControlsBtn = ({ valueRate, increment }) => {
   const options = Object.keys(valueRate);
  return (
    <div>
      {options.map(item => {
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
valueRate: PropTypes.object.isRequired,
increment: PropTypes.func.isRequired,
}
export default ControlsBtn
