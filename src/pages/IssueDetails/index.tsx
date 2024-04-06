import { useParams } from "react-router-dom";
import { IssueContent } from "./components/IssueContent";
import { IssueTitle } from "./components/IssueTitle";
import { IssueDetailsContainer } from "./styles";
import { api } from "../../lib/axios";
import { UserContext } from "../../contexts/userContext";
import { useContext, useEffect, useState } from "react";

type IssueProps = {
  login: string;
  created_at: Date;
  comments: number;
  title: string;
  url: string;
  body: string;
}

export function IssueDetails() {

  const { userName, repositoryName } = useContext(UserContext)
  const { issueId } = useParams();

  const [issue, setIssue] = useState<IssueProps>({
    body: "",
    comments: 0,
    created_at: new Date("9999-12-31"),
    login: "",
    title: "",
    url: ""
  });

  function getIssueDetails() {
    api.get(`repos/${userName}/${repositoryName}/issues/${issueId}`)
      .then(response => {
        const responseIssue: IssueProps = {
          body: response.data.body,
          comments: response.data.comments,
          created_at: response.data.created_at,
          login: response.data.user.login,
          title: response.data.title,
          url: response.data.html_url
        }
        setIssue(responseIssue)
      })
  }

  useEffect(() => {
    getIssueDetails();
    console.log(issue)
  }, [])

  return (
    <IssueDetailsContainer>
      <IssueTitle comments={issue.comments}
        created_at={issue.created_at}
        login={issue.login}
        title={issue.title}
        url={issue.url}
      />
      <IssueContent body={issue.body} />
    </IssueDetailsContainer>
  );
}
