import {
  Description,
  InfoTag,
  InfoTagsContainer,
  Name,
  ProfileContainer,
  ProfileContent,
  ProfilePicture,
} from "./styles";
import GithubLink from "../../../../assets/GithubLink.svg";
import GithubIcon from "../../../../assets/GithubIcon.svg";
import CompanyIcon from "../../../../assets/CompanyIcon.svg";
import FollowersIcon from "../../../../assets/FollowersIcon.svg";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/jonathanmdueck.png" alt="" />
      <ProfileContent>
        <Name>
          <span>Jonathan Dueck</span>
          <a href="https://github.com/jonathanmdueck">
            <img src={GithubLink} alt="" />
          </a>
        </Name>
        <Description>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Description>
        <InfoTagsContainer>
          <InfoTag>
            <img src={GithubIcon} alt="" />
            <span>JonathanMDueck</span>
          </InfoTag>
          <InfoTag>
            <img src={CompanyIcon} alt="" />
            <span>Exxonmobil</span>
          </InfoTag>
          <InfoTag>
            <img src={FollowersIcon} alt="" />
            <span> 32 seguidores</span>
          </InfoTag>
        </InfoTagsContainer>
      </ProfileContent>
    </ProfileContainer>
  );
}
