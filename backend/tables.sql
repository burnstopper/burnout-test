CREATE TYPE answer_type AS ENUM (
    'never',
    'very_rarely',
    'rarely',
    'sometimes',
    'often',
    'very_often',
    'daily');

CREATE CAST (VARCHAR AS answer_type) WITH INOUT AS IMPLICIT;

CREATE TABLE answers
(
    id            BIGSERIAL PRIMARY KEY,
    respondent_id INTEGER     NOT NULL,
    date_time     TIMESTAMP WITH TIME ZONE,
    quiz_id       INTEGER,
    answer1       answer_type NOT NULL,
    answer2       answer_type NOT NULL,
    answer3       answer_type NOT NULL,
    answer4       answer_type NOT NULL,
    answer5       answer_type NOT NULL,
    answer6       answer_type NOT NULL,
    answer7       answer_type NOT NULL,
    answer8       answer_type NOT NULL,
    answer9       answer_type NOT NULL,
    answer10      answer_type NOT NULL,
    answer11      answer_type NOT NULL,
    answer12      answer_type NOT NULL,
    answer13      answer_type NOT NULL,
    answer14      answer_type NOT NULL,
    answer15      answer_type NOT NULL,
    answer16      answer_type NOT NULL,
    answer17      answer_type NOT NULL,
    answer18      answer_type NOT NULL,
    answer19      answer_type NOT NULL,
    answer20      answer_type NOT NULL,
    answer21      answer_type NOT NULL,
    answer22      answer_type NOT NULL
);

CREATE TABLE results
(
    id                BIGSERIAL PRIMARY KEY,
    respondent_id     INTEGER NOT NULL,
    date_time         TIMESTAMP WITH TIME ZONE,
    quiz_id           INTEGER,
    exhaustion        INTEGER,
    depersonalization INTEGER,
    reduction         INTEGER,
    integral_index    DECIMAL(1, 2)
);