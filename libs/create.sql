USE blog;

CREATE TABLE `blog`.`messages` (
	`id` int(8) NOT NULL AUTO_INCREMENT,
  `article` varchar(128) NOT NULL,
	`name` varchar(128) NOT NULL,
	`email` varchar(128) NOT NULL,
	`text` text DEFAULT NULL,
  `replayId` int(8) DEFAULT NULL,
	`create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` bit NOT NULL DEFAULT b'1',
	PRIMARY KEY (`id`)
) ENGINE=`InnoDB`;
