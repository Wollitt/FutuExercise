CREATE TABLE IF NOT EXISTS  CAMPAIGNS (
    id            BIGSERIAL primary key,
    name          VARCHAR not null,
    keywords      VARCHAR not null,
    bid_amount    INTEGER not null,
    campaign_fund INTEGER not null,
    status        BOOLEAN not null,
    town          VARCHAR not null,
    radius        INTEGER not null
);