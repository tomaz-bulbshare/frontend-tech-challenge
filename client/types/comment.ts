import { User } from "./user";

export type Comment = {
  readonly bcommentref: string;
  readonly briefref: string;
  readonly user: User;
  readonly comment: string;
  readonly submitted_on: string;
};
