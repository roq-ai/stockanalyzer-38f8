import { AnalysisInterface } from 'interfaces/analysis';
import { CriteriaInterface } from 'interfaces/criteria';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  analysis?: AnalysisInterface[];
  criteria?: CriteriaInterface[];
  user?: UserInterface;
  _count?: {
    analysis?: number;
    criteria?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
