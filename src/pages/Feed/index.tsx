import { useNavigate } from "react-router-dom";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import {
  Description,
  FeedContainer,
  Post,
  PostContainer,
  PostTitle,
} from "./styles";

export function Feed() {

  const navigate = useNavigate();

  function navigateToIssueDetails() {
    navigate("/issue-details");
  }

  return (
    <FeedContainer>
      <Profile />
      <SearchForm />
      <PostContainer>
        <Post onClick={navigateToIssueDetails}>
          <PostTitle>
            <span>JavaScript data types and data structures</span>
            <p>Há um dia</p>
          </PostTitle>
          <Description>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </Description>
        </Post>
        <Post>
          <PostTitle>
            <span>JavaScript data types and data structures</span>
            <p>Há um dia</p>
          </PostTitle>
          <Description>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </Description>
        </Post>
        <Post>
          <PostTitle>
            <span>JavaScript data types and data structures</span>
            <p>Há um dia</p>
          </PostTitle>
          <Description>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </Description>
        </Post>
        <Post>
          <PostTitle>
            <span>JavaScript data types and data structures</span>
            <p>Há um dia</p>
          </PostTitle>
          <Description>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </Description>
        </Post>
        <Post>
          <PostTitle>
            <span>JavaScript data types and data structures</span>
            <p>Há um dia</p>
          </PostTitle>
          <Description>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </Description>
        </Post>
        <Post>
          <PostTitle>
            <span>JavaScript data types and data structures</span>
            <p>Há um dia</p>
          </PostTitle>
          <Description>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </Description>
        </Post>
      </PostContainer>
    </FeedContainer>
  );
}
