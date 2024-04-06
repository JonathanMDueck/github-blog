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
import { formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'

type IssueTitleProps = {
  title: string;
  url: string;
  login: string;
  created_at: Date;
  comments: number;
}

export function IssueTitle({ title, url, login, created_at, comments }: IssueTitleProps) {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/");
  }

  return (
    <IssueTitleContainer>
      <LinksContainer>
        <img src={BackIcon} alt="" onClick={navigateToHome} />
        <a href={url} target="_blank">
          <img src={SeeOnGithub} alt="" />
        </a>
      </LinksContainer>
      <p>{title}</p>
      <InfoTagsContainer>
        <InfoTag>
          <img src={GithubIcon} alt="" />
          <span>{login}</span>
        </InfoTag>
        <InfoTag>
          <img src={CalendarIcon} alt="" />
          <span>{formatDistanceToNow(new Date(created_at), {
            addSuffix: true,
            locale: ptBR
          })}</span>
        </InfoTag>
        <InfoTag>
          <img src={CommentsIcon} alt="" />
          <span>{comments} comentários</span>
        </InfoTag>
      </InfoTagsContainer>
    </IssueTitleContainer>
  );
}
