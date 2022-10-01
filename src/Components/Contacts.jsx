import { useState } from "react";
import React from "react";

import PillButton from "./PillButton";
import { UilPaperclip } from "@iconscout/react-unicons";
import BudgetPillButton from "./BudgetPillButton";

//firebase
import { app } from "../firebase";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import {
  Placeholder,
  PillBtnContainer,
  AttachmentLabel,
  AttachmentInput,
  SubmitText,
  SubmitContainer,
  AttachmentText,
  AttachmentContainer,
  CustomInputContainer,
  CustomTextInput,
  SelectionPillContainers,
  SelectionContainerHeading,
  FormContainer,
  ContactTitleContainer,
  ContactHeadContainer,
} from "../styles/Contacts.style";

function Contacts() {
  const [selectedBudget, setSelectedBudget] = useState(undefined);

  const [budgetData, setBudgetData] = useState([
    {
      name: "200-1k",
      id: "200-1k",
    },
    {
      name: "1k-5k",
      id: "1k-5k",
    },
    {
      name: "5k-10k",
      id: "5k-10k",
    },
    {
      name: "10k+",
      id: "10k+",
    },
  ]);

  const [mouseIn, setMouseIn] = useState(false);
  const [over, setOver] = useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [budget, setBudget] = useState();
  const [type, setType] = useState([]);
  const db = getFirestore(app);
  const storage = getStorage(app);

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
  const attachment = () => {};
  function searchHandler() {
    if (!name || !email || !about) {
      console.log("empty input");
      return;
    }

    formSubmit();

    setName("");
    setEmail("");
    setAbout("");
  }

  const handleSelect = (e) => {
    console.log(budgetData);
    console.log(selectedBudget);
    console.log(e.target.id);
    setSelectedBudget(e.target.id);
  };

  return (
    <>
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
          {budgetData.map((budgetData) => {
            return (
              <BudgetPillButton
                key={budgetData.id}
                budgetData={budgetData}
                selectedBudget={selectedBudget}
                setSelectedBudget={setSelectedBudget}
              />
            );
          })}
        </SelectionPillContainers>

        <AttachmentContainer className="bw_select attach">
          <AttachmentLabel htmlFor="choose-file">
            <UilPaperclip />
            <AttachmentText>Add Attachment</AttachmentText>
          </AttachmentLabel>
          <AttachmentInput
            name="uploadDocument"
            type="file"
            id="choose-file"
            accept=".jpg,.jpeg,.pdf,doc,docx,application/msword,.png"
            style={{ display: "none" }}
          />
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
      ></div>
    </>
  );
}

export default Contacts;
