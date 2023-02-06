import {Towns} from "../components/campaign-list/interfaces/towns";

export interface AddCampaignDTO {
  name: string,
  keywords: string,
  bid_amount: number,
  campaign_fund: number,
  status: boolean,
  town: Towns,
  radius: number
}
