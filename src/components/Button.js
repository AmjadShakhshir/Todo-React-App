import PropTypes from "prop-types"

const Button = (props) => {
    return (
    <button onClick = {props.onClick}
    className="btn">Add a new todo</button>
    )
}

Button.propTypes = {
    onClick : PropTypes.func.isRequired,
}

export default Button

