import { Issue } from './issues.';
interface User {
  id: number;
  name: string;
  email: string;
  twitter: string;
  issue: Issue[];
}

export { User };
