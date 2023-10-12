# Getting Started

After donwloading the project run command from project root ```npm i``` and then run ``` node index.js ```.

# mysql connectivity

By default backend code is connected with local mysql instance. However if you want to connect it with remote server or local server you may need to change the params in the
 following file according to your server and sql user settings. 
https://github.com/asadRiaz00/movies-list-BE/blob/main/config.js#L1


# DB Schame
To create the table run the following sql query from your sql server ( it will create table and coloumns inside your DB ).
```
CREATE TABLE `movies`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `name`          VARCHAR(100) NOT NULL ,
  `duration` Float NOT NULL ,
  `rating` Float NOT NULL ,
  PRIMARY KEY (`id`),
  UNIQUE `idx_name_unique` (`name`(100))
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;
```


