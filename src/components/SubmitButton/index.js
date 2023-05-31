import * as Styles from './styles'

export const SubmitButton = (onClick, disabled, text) => (
    <Styles.SubmitButton
        onClick={onClick}
        disabled={disabled}
    >
        {text}
    </Styles.SubmitButton>
    )