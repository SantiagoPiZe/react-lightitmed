import * as Styles from './styles'

export const SubmitButton = (onClick, disabled, text) => (
    <Styles.LoginButton
        onClick={onClick}
        disabled={disabled}
    >
        {text}
    </Styles.LoginButton>
    )