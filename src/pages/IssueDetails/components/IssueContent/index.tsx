import { IssueContentContainer } from "./styles";
import Markdown from "react-markdown"

type IssueContentProps = {
  body: string;
}

export function IssueContent({ body }: IssueContentProps) {
  return (
    <IssueContentContainer>
      <Markdown>
        {body}
      </Markdown>
    </IssueContentContainer>
  );
}
