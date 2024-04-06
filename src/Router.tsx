import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Feed } from "./pages/Feed";
import { IssueDetails } from "./pages/IssueDetails";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Feed />} />
        <Route path="issue-details/:issueId" element={<IssueDetails />} />
      </Route>
    </Routes>
  );
}
