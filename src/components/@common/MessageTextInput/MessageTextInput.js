import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './MessageTextInput.module.css'
import Label from '../Label/Label'
import TextInput from '../TextInput/TextInput'
import Description from '../Description/Description'

const MessageTextInput = (
  {
    label,
    description,
    value,
    onChange,
    name,
    type,
    maxLength,
    required,
    className,
    errorMessage,
    ...props
  },
) => {
  return (
    <div className={classNames(styles.box, className)}>
      <div className={styles['text-field']}>
        <Label className={styles.label} required={required}>
          {label}
        </Label>
        {description && <Description className={styles.description}>{description}</Description>}
        <div className={styles['input-box']}>
          <TextInput
            required={required}
            value={value}
            name={name}
            type={type}
            maxLength={maxLength}
            onChange={onChange}
            {...props}
          />
        </div>
        {errorMessage && <p className={styles['rule-field']}>{errorMessage}</p>}
      </div>
    </div>
  )
}

MessageTextInput.propTypes = {
  label: PropTypes.string,
  initialValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  description: PropTypes.node,
  maxLength: PropTypes.number,
  errorMessage: PropTypes.string,
}

MessageTextInput.defaultProps = {
  label: '',
  value: '',
  required: false,
  description: '',
}

export default MessageTextInput
