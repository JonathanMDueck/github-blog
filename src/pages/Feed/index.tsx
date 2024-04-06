import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'
import Markdown from "react-markdown"
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import {
  Description,
  FeedContainer,
  Post,
  PostContainer,
  PostTitle,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { api } from "../../lib/axios";

type PostType = {
  title: string;
  body: string;
  number: number;
  created_at: Date;
  id: number;
}

export function Feed() {

  const navigate = useNavigate();
  const { repositoryName, userName } = useContext(UserContext);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [numberOfPosts, setNumberOfPosts] = useState(0);
  const [searchParam, setSearchParam] = useState('');

  function getRepositoryIssues() {
    api.get(`search/issues?q=${searchParam}%20repo:${userName}/${repositoryName}`)
      .then(response => {
        setPosts(response.data.items)
        setNumberOfPosts(response.data.total_count);
      })
  }

  function navigateToIssueDetails(issueId: number) {
    navigate(`issue-details/${issueId}`)
  }

  useEffect(() => {
    if (posts.length === 0)
      getRepositoryIssues();

    (searchParam.length > 3 || searchParam.length === 0)
      && getRepositoryIssues();

  }, [searchParam])

  return (
    <FeedContainer>
      <Profile />
      <SearchForm
        numberOfPosts={numberOfPosts}
        searchParam={searchParam}
        setSearchParam={setSearchParam}
      />
      <PostContainer>
        {posts?.map(post => {
          return (
            <Post key={post.id} onClick={() => navigateToIssueDetails(post.number)}>
              <PostTitle>
                <span>{post.title}</span>
                <p>
                  {formatDistanceToNow(new Date(post.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </p>
              </PostTitle>
              <Description>
                <Markdown>
                  {post.body}
                </Markdown>
              </Description>
            </Post>
          )
        })}
      </PostContainer>
    </FeedContainer>
  );
}
