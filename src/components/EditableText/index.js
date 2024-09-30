import {Component} from 'react'

import {
  MainContainer,
  EditableTextBox,
  InputElement,
  CustomButton,
  InputButtonContainer,
} from './styledComponents'

class EditableText extends Component {
  state = {showInput: true, userInput: ''}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickingSave = () => {
    this.setState({showInput: false})
  }

  onClickingEdit = () => {
    this.setState({showInput: true})
  }

  render() {
    const {showInput, userInput} = this.state

    return (
      <MainContainer>
        <EditableTextBox>
          <h1>Editable Text Input</h1>
          <InputButtonContainer>
            {showInput ? (
              <InputElement
                type="text"
                value={userInput}
                onChange={this.onChangeUserInput}
              />
            ) : (
              <p>{userInput}</p>
            )}
            {showInput ? (
              <CustomButton type="button" onClick={this.onClickingSave}>
                Save
              </CustomButton>
            ) : (
              <CustomButton type="button" onClick={this.onClickingEdit}>
                Edit
              </CustomButton>
            )}
          </InputButtonContainer>
        </EditableTextBox>
      </MainContainer>
    )
  }
}

export default EditableText
