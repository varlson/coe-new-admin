import { PremissionRoles } from "./types";
// types.d.ts ou em qualquer arquivo onde você define tipos
declare module "next-auth" {
  interface User {
    _id: string;
    name: string;
    username: string;
    avatar: string;
    activityStatus: boolean;
    premissionRole: PremissionRoles;
    createdAt: Date;
  }
}
