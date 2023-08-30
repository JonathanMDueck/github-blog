import {
  InfoTag,
  InfoTagsContainer,
  IssueTitleContainer,
  LinksContainer,
} from "./styles";

import BackIcon from "../../../../assets/Back.svg";
import SeeOnGithub from "../../../../assets/SeeOnGithub.svg";
import GithubIcon from "../../../../assets/GithubIcon.svg";
import CalendarIcon from "../../../../assets/CalendarIcon.svg";
import CommentsIcon from "../../../../assets/CommentsIcon.svg";
import { useNavigate } from "react-router-dom";

export function IssueTitle() {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/");
  }

  return (
    <IssueTitleContainer>
      <LinksContainer>
        <img src={BackIcon} alt="" onClick={navigateToHome} />
        <a href="https://github.com/">
          <img src={SeeOnGithub} alt="" />
        </a>
      </LinksContainer>
      <p>JavaScript data types and data structures</p>
      <InfoTagsContainer>
        <InfoTag>
          <img src={GithubIcon} alt="" />
          <span>JonathanMDueck</span>
        </InfoTag>
        <InfoTag>
          <img src={CalendarIcon} alt="" />
          <span>Há 1 dia</span>
        </InfoTag>
        <InfoTag>
          <img src={CommentsIcon} alt="" />
          <span>5 comentários</span>
        </InfoTag>
      </InfoTagsContainer>
    </IssueTitleContainer>
  );
}
