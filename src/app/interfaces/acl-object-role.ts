import { AclObject } from './acl-object';
import { AclRole } from './acl-role';

export interface AclObjectRole {
  object: AclObject,
  level: string,
  aclRoles: AclRole[]
}
