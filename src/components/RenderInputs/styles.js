import styled from "styled-components";
import Input from 'antd/lib/input';
import { Radio, DatePicker } from 'antd';


export const InputContianer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 5px;
`;

export const InputTitle = styled.label`
    font-size: 12px;
    margin-bottom: 5px;
`;

export const StyledInput = styled(Input)`
    width: 80%;
    ${({ centered }) => (centered && 'text-align: center;')};

`;

export const GenderOptions = styled(Radio.Group)``

export const DateSelector = styled(DatePicker)``