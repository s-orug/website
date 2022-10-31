import React from "react";
import {
  ReadContainer,
  ReadContent,
  ReadH1,
  ReadH2,
  ReadP,
  ReadSpace,
} from "./ReadsElements";

const Read = () => {
  return (
    <ReadContainer>
      <ReadContent>
        <ReadH1>Reads</ReadH1>
      </ReadContent>
      <ReadContent>
        <ReadP>
          These are some of the books that I found interesting to read or very
          helpful.
        </ReadP>
        <ReadSpace></ReadSpace>
        <ReadH2>Psychology of Money by Morgan Housel</ReadH2>

        <ReadSpace></ReadSpace>
        <ReadH2>Long Walk to Freedom by Nelson Mandala</ReadH2>

        <ReadSpace></ReadSpace>
        <ReadH2>Steve Jobs by Walter Issacson</ReadH2>

        <ReadSpace></ReadSpace>
        <ReadH2>Warriors Don't Cry by Melba Pattillo Beals</ReadH2>

        <ReadSpace></ReadSpace>
        <ReadH2>Procrastination by Jane B. Burka</ReadH2>

        <ReadSpace></ReadSpace>
        <ReadH2>Chanakya Neeti by B.K. Chaturvedi</ReadH2>

        <ReadSpace></ReadSpace>
      </ReadContent>
    </ReadContainer>
  );
};

export default Read;
