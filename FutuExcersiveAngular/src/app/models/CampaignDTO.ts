import {Towns} from "../components/campaign-list/interfaces/towns";

export interface CampaignDTO {
  id: number,
  name: string,
  keywords: string,
  bid_amount: number,
  campaign_fund: number,
  status: boolean,
  town: Towns,
  radius: number
}
