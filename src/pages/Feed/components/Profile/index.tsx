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
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../contexts/userContext";
import { api } from "../../../../lib/axios";

export function Profile() {

  const { userName } = useContext(UserContext);

  const [userLogin, setUserLogin] = useState('')
  const [userCompany, setUserCompany] = useState('');
  const [userFollowers, setUserFollowers] = useState('');
  const [userBio, setUserBio] = useState('');
  const [name, setName] = useState('');

  function getUserInfo() {
    api.get(`/users/${userName}`)
      .then(response => {
        setUserLogin(response.data.login)
        setUserCompany(response.data.company)
        setUserFollowers(response.data.followers)
        setUserBio(response.data.bio)
        setName(response.data.name)
      })
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <ProfileContainer>
      <ProfilePicture src={`https://github.com/${userName}.png`} alt="" />
      <ProfileContent>
        <Name>
          <span>{name}</span>
          <a href={`https://github.com/${userName}`} target="_blank">
            <img src={GithubLink} alt="" />
          </a>
        </Name>
        <Description>
          {userBio}
        </Description>
        <InfoTagsContainer>
          <InfoTag>
            <img src={GithubIcon} alt="" />
            <span>{userLogin}</span>
          </InfoTag>
          <InfoTag>
            <img src={CompanyIcon} alt="" />
            <span>{userCompany}</span>
          </InfoTag>
          <InfoTag>
            <img src={FollowersIcon} alt="" />
            <span> {`${userFollowers} seguidores`}</span>
          </InfoTag>
        </InfoTagsContainer>
      </ProfileContent>
    </ProfileContainer>
  );
}
