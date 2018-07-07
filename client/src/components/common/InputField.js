import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputGroup = ({
  divClass,
  name,
  classname,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange
}) => {
  return (
    <div className={divClass}>
      <input
        type={type}
        className={classnames(classname, {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
