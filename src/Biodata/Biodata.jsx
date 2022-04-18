import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";
import BioCard from "../BioCard/BioCard";
import Imageprofiler from "./Imageprofiler";
const biodata = () => {
  return (
    <div>
      <div>
        <h1>Welcome to my portfolio cv</h1>
        <SocialIcons />
        <Imageprofiler />
      </div>

      <BioCard
        bioHeader="PERSONAL SUMMARY"
        bioInfo="An ambitious problem solver with a passion for Tech and IT, who would like to join a team of like-minded developers and programmers. Although has little experience of creating logical but plan to learn faster and better in other to create innovative solutions to complex problems. My keen interest in technology, mobile applications and software development is my driving force, as someone I take responsibility for my own personal development, as I continually evaluating and upgrading my skills so that I can stays at the cutting edge of programs for development. I plan to keep learning and not giving up in order to stay up to date learning the required knowledge needed to keep helping me solve problem"
      />
      <BioCard
        bioHeader="CAREER STATEMENT"
        bioInfo="“I feel that my greatest strengths is my strong commitment to learning either from books or colleagues with whom I work.

        Secondly my skill at developing and maintaining a close working relationship with every company client, something which in turn helps me to gain an in-depth understanding of their individual needs.

        Thirdly my real passion for Software Development as a whole, an obsession which allows me to spot trends and develop best practise processes.”"
      />
      <BioCard
        bioHeader="CAREER HISTORY"
        bioInfo="“In charge and responsible for computer separation of offset printing to a machine known as film processor for the plate, and also responsible for CTCP (computer to plate) computer operatorprocesses.”"
      />
    </div>
  );
};

export default biodata;
