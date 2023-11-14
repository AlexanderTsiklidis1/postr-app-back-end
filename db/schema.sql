DROP DATABASE IF EXISTS posts_dev;
CREATE DATABASE posts_dev;

\c posts_dev;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    postMessage TEXT NOT NULL,
    post_pic TEXT,
    profile_pic TEXT
);
