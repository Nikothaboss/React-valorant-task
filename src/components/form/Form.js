import styled from "styled-components";

export const FormWrapper = styled.form `
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    
`
export const Input = styled.input `
    padding: 15px 0;
    width: 100%;
`

export const Div = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 10px;
    width: 100%;
`

export const Textarea = styled.textarea `
    width: 100%;
    box-sizing: border-box;
    height: 180px;
`

export const WidthDecider = styled.div `
    width: 50%;
    margin: auto;
`

const Form = () => {
    return (
        <WidthDecider>
        <FormWrapper>
            <Div>
                <label for="firstName">First Name: </label>
                <Input type="text" id="firstName" name="firstName"></Input>
            </Div>
            <Div>
                <label for="lastName">Last Name: </label>
                <Input type="text" id="lastName" name="lastName"></Input>
            </Div>
            <Div>
                <label for="email">Email: </label>
                <Input type="email" id="email" name="email"></Input>
            </Div>
            <Div>
                <label for="message">Message: </label>
                <Textarea name="message" id="message" placeholder="Enter message"></Textarea>
            </Div>
        </FormWrapper>
        </WidthDecider>
    )
}

export default Form
