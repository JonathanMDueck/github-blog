import { IssueContent } from "./components/IssueContent";
import { IssueTitle } from "./components/IssueTitle";
import { IssueDetailsContainer } from "./styles";

export function IssueDetails() {
  return (
    <IssueDetailsContainer>
      <IssueTitle />
      <IssueContent />
    </IssueDetailsContainer>
  );
}
