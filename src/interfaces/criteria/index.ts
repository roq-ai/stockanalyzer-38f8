import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CriteriaInterface {
  id?: string;
  name: string;
  value: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface CriteriaGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  value?: string;
  organization_id?: string;
}
