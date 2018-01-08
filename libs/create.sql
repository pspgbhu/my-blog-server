USE blog;

CREATE TABLE `blog`.`messages` (
	`id` int(3) NOT NULL AUTO_INCREMENT,
  `article` varchar(100) NOT NULL,
	`name` varchar(100) NOT NULL,
	`email` varchar(100) DEFAULT NULL,
	`text` text DEFAULT NULL,
	`create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
) ENGINE=`InnoDB`;
