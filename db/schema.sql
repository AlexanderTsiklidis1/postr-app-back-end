DROP DATABASE IF EXISTS postr_dev;
CREATE DATABASE postr_dev;

\c postr_dev;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    userName TEXT NOT NULL,
    postMessage TEXT NOT NULL,
    post_pic TEXT,
    profile_pic TEXT
);
