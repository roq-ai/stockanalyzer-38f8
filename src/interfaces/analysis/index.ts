import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface AnalysisInterface {
  id?: string;
  name: string;
  result: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface AnalysisGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  result?: string;
  organization_id?: string;
}
