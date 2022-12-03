CREATE TABLE user (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    kakao_id varchar(200) NOT NULL
);

CREATE TABLE wish_list (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_id INT NOT NULL,
    title varchar(200) NOT NULL,
    image_path varchar(1000) NOT NULL,
    link varchar(2000) NOT NULL,
    description varchar(2000) NOT NULL
);
