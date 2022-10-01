import styled from "styled-components";

export const ContactHeadContainer = styled.div`
  margin: 6rem auto 2rem auto;
  width: 90%;
  padding: 1rem 5rem;
`;

export const ContactTitleContainer = styled.div`
  font-size: 72px;
  line-height: 1.2;
`;

export const FormContainer = styled.div`
  margin: 0 0 47px 0;
  font-size: 35px;

  color: #ccc;
`;

export const SelectionContainerHeading = styled.div`
  padding: 2rem 10rem 0rem;
`;

export const SelectionPillContainers = styled.div`
  display: flex;
  padding: 0rem 9rem;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const CustomTextInput = styled.input`
  width: 60%;
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 2rem 10rem;

  font-size: 35px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #ccc;
    opacity: 1; /* Firefox */
  }

  :focus {
    outline: none;
    border-bottom: 2px solid #000;
    transition: 0.2s ease-in-out all;
  }
`;

export const CustomInputContainer = styled.div``;

export const AttachmentContainer = styled.div`
  padding: 1rem 10rem 0rem;
  font-size: 35px;

  display: flex;
  align-items: center;
  color: #000;

  width: fit-content;
`;

export const AttachmentText = styled.div`
  font-weight: bold;
  font-size: 22px;

  width: fit-content;
  padding-bottom: 1px;

  transition: all 0.4s ease-in-out;

  border-bottom: 2px solid #fff;

  :hover {
    border-bottom: 2px solid #000;
    width: fit-content;
    padding-bottom: 1px;
  }
`;

export const SubmitContainer = styled.div`
  padding: 4rem 10rem 4rem;
  font-size: 35px;

  display: flex;
  align-items: center;

  width: fit-content;
`;

export const SubmitText = styled.div`
  border-bottom: 2px solid #ccc;
  color: #ccc;
  padding-bottom: 1px;
  transition: all 0.4s ease-in-out;
  width: fit-content;

  font-weight: bold;

  font-size: 22px;

  :hover {
    border-bottom: 2px solid #000;
    color: #000;
    padding-bottom: 1px;
    width: fit-content;
  }

  :active {
    border-bottom: 2px solid #000;
    color: #000;
    padding-bottom: 1px;
    width: fit-content;
  }
`;

export const AttachmentInput = styled.input`
  ::file-selector-button {
    font-weight: bold;
    color: dodgerblue;
    padding: 0.5em;
    border: thin solid grey;
    border-radius: 3px;
  }
`;

export const AttachmentLabel = styled.label`
  display: flex;
`;

export const PillBtnContainer = styled.button`
  margin: 2rem 1rem;
`;

export const Placeholder = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;