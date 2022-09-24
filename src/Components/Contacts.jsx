import { useEffect, useState } from "react";
import React from "react";
import Header from "./Header";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./Footer";
import styled from "styled-components";

import PillButton from "./PillButton";
import { UilPaperclip } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";

//firebase
import { app } from "../firebase";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const ContactHeadContainer = styled.div`
  margin: 6rem auto 2rem auto;
  width: 90%;
  padding: 1rem 5rem;
`;

const ContactTitleContainer = styled.div`
  font-size: 72px;
  line-height: 1.2;
`;

const FormContainer = styled.div`
  margin: 0 0 47px 0;
  font-size: 35px;

  color: #ccc;
`;

const SelectionContainerHeading = styled.div`
  padding: 2rem 10rem 0rem;
`;

const SelectionPillContainers = styled.div`
  display: flex;
  padding: 0rem 9rem;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const CustomTextInput = styled.input`
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

const CustomInputContainer = styled.div``;

const AttachmentContainer = styled.div`
  padding: 1rem 10rem 0rem;
  font-size: 35px;

  display: flex;
  align-items: center;
  color: #000;

  width: fit-content;
`;

const AttachmentText = styled.div`
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

const SubmitContainer = styled.div`
  padding: 4rem 10rem 4rem;
  font-size: 35px;

  display: flex;
  align-items: center;

  width: fit-content;
`;

const SubmitText = styled.div`
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

function Contacts() {
  const [mouseIn, setMouseIn] = useState(false);
  const [over, setOver] = useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [budget, setBudget] = useState();
  const [type, setType] = useState([]);
  const db = getFirestore(app);
  const formSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "form"), {
        name: name,
        email: email,
        about: about,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  function searchHandler() {
    if (!name || !email || !about) {
      console.log("empty input");
      return;
    }
    // console.log({ name: name, email: email, about: about });
    formSubmit();
    setName("");
    setEmail("");
    setAbout("");
  }

  return (
    <>
      {/* <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color={mouseIn === false ? "0, 0, 0" : "255, 255, 255"}
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "img",
          "h1",
          "h2",
          "textarea",
          "button",
          ".link",
          ".hamburger-react",
          ".social_links",
          ".attach",
          ".submit",
        ]}
      /> */}

      <ContactHeadContainer>
        <ContactTitleContainer>
          <h4 className="fw-500 bw_select lh-1">
            Something
            <br />
            crawled up there?
            <br />
            Tell us👋
          </h4>
        </ContactTitleContainer>
      </ContactHeadContainer>

      <FormContainer>
        <SelectionContainerHeading className="bw_select">
          Hey, wanted to talk about...
        </SelectionContainerHeading>

        <SelectionPillContainers>
          <PillButton text="Personal Portfolio" />
          <PillButton text="Web Application" />
          <PillButton text="Strategy and Branding" />
          <PillButton text="UI/UX Design" />
        </SelectionPillContainers>

        <CustomInputContainer>
          <CustomTextInput
            placeholder="Your name"
            type="text"
            value={name}
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
          <CustomTextInput
            placeholder="Your email"
            type="email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomTextInput
            placeholder="About your project"
            type="text"
            value={about}
            autoComplete="off"
            onChange={(e) => setAbout(e.target.value)}
          />
        </CustomInputContainer>

        <SelectionContainerHeading className="bw_select">
          Creation Budget (INR)
        </SelectionContainerHeading>

        <SelectionPillContainers>
          <PillButton text="200-1k" />
          <PillButton text="1k-5k" />
          <PillButton text="5k-10k" />
          <PillButton text="> 10k" />
        </SelectionPillContainers>

        <AttachmentContainer className="bw_select attach">
          <UilPaperclip /> <AttachmentText>Add Attachment</AttachmentText>
        </AttachmentContainer>

        <SubmitContainer
          className="btnSubmitInner bw_select submit"
          // disabled={!search}
          onClick={() => searchHandler()}
        >
          <SubmitText>Send request</SubmitText>
        </SubmitContainer>
      </FormContainer>

      <div
        onMouseEnter={() => {
          setMouseIn(true);
        }}
        onMouseLeave={() => {
          setMouseIn(false);
        }}
      >
      </div>
    </>
  );
}

export default Contacts;
