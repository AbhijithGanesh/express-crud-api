import { Issue } from './issues.';
interface User {
  id: number;
  name: String;
  email: String;
  twitter: String;
  issue: Issue[];
}

export { User };
