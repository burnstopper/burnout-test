CREATE TYPE answer_type AS ENUM (
    'NEVER',
    'VERY_RARELY',
    'RARELY',
    'SOMETIMES',
    'OFTEN',
    'VERY_OFTEN',
    'DAILY');

CREATE CAST (varchar AS answer_type) WITH INOUT AS IMPLICIT;

CREATE TABLE answers
(
    id            BIGSERIAL PRIMARY KEY, --TODO: check to BIGINT when switching to SQLite
    respondent_id INTEGER     NOT NULL,
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