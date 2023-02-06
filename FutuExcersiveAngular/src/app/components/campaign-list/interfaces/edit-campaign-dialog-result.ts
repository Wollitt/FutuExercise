import {Towns} from "./towns";

export interface EditCampaignDialogResult {
  name: string,
  keywords: string,
  bid_amount: number,
  campaign_fund: number,
  status: boolean,
  town: Towns,
  radius: number
  canceled: boolean
}
