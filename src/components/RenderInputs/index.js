import * as Styles from "./styles";
import { genderOptions } from "../../common/constants/options";

const parseDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    })
}

export const renderInputs = (inputs, onChangeHandler, userData) => (
    onChangeHandler ? inputs.map((input) => {
        return (input.type !== "gender" && input.type !== "dateofbirth") ? (
            <Styles.InputContianer key={input.type}>
                <Styles.InputTitle>{input.title}</Styles.InputTitle>
                <Styles.StyledInput
                    onChange={(e) => onChangeHandler(e, input.type)}
                    type={input.type === "password" ? "password" : ""}
                />
            </Styles.InputContianer>
        ) : input.type !== "dateofbirth" ?
            (
                <Styles.InputContianer key={input.type}>
                    <Styles.InputTitle>{input.title}</Styles.InputTitle>
                    <Styles.GenderOptions
                        optionType="button"
                        options={genderOptions}
                        onChange={(e) => onChangeHandler(e, input.type)}
                    />
                </Styles.InputContianer>
            )
            :
            (
                <Styles.InputContianer key={input.type}>
                    <Styles.InputTitle>{input.title}</Styles.InputTitle>
                    <Styles.DateSelector
                        onChange={(value) => onChangeHandler(value, input.type)}
                    />
                </Styles.InputContianer>
            )
    })
        :
        inputs.map((input) => {
            return input.type !== "gender" ? (
                <Styles.InputContianer key={input.type}>
                    <Styles.InputTitle>{input.title}</Styles.InputTitle>
                    <Styles.StyledInput
                        centered={"true"}
                        value={
                            input.type !== "dateOfBirth" ?
                                userData[input.type]
                                :
                                parseDate(userData[input.type])
                        }
                        readOnly
                    />
                </Styles.InputContianer>
            ) : (
                <Styles.InputContianer key={input.type}>
                    <Styles.InputTitle>{input.title}</Styles.InputTitle>
                    <Styles.GenderOptions
                        optionType="button"
                        options={genderOptions}
                        value={userData[input.type]}
                        readOnly
                    />
                </Styles.InputContianer>
            )

        })
);