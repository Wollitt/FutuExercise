CREATE TABLE IF NOT EXISTS EMERALD_ACCOUNT (
    id BIGSERIAL primary key,
    balance FLOAT not null
);

INSERT INTO EMERALD_ACCOUNT(balance) VALUES
(1000000);