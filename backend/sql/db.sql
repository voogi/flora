-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.10-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Verzió:              9.1.0.4867
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for flora
DROP DATABASE IF EXISTS `flora`;
CREATE DATABASE IF NOT EXISTS `flora` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `flora`;


-- Dumping structure for tábla flora.colleague
DROP TABLE IF EXISTS `colleague`;
CREATE TABLE IF NOT EXISTS `colleague` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `cv` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table flora.colleague: ~4 rows (approximately)
/*!40000 ALTER TABLE `colleague` DISABLE KEYS */;
INSERT INTO `colleague` (`id`, `name`, `description`, `phone`, `email`, `cv`, `image`, `active`) VALUES
	(1, 'Munkatárs neve', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque hendrerit lorem sit amet aliquet. Aliquam eu risus ut mauris cursus euismod elementum dictum sapien. Pellentesque aliquet faucibus nunc, ac pharetra diam volutpat a. Donec at arcu leo. Nulla eget tristique purus. Vivamus sollicitudin lacus quis mauris malesuada, non accumsan massa varius. Nunc tristique magna eget tortor vestibulum viverra.\r\n\r\nFusce mollis egestas turpis. Maecenas at arcu tincidunt, placerat magna vitae, lacinia arcu. Nullam sit amet justo a nibh mattis sagittis ut sit amet dolor. Praesent enim lorem, consectetur laoreet semper vel, facilisis vel arcu. Donec elementum ut velit ut varius. Mauris sit amet ipsum felis. Nunc vitae purus id ex fringilla luctus. Donec feugiat arcu lectus, sit amet dictum lacus vulputate tristique. Cras velit ligula, egestas ut mi at, venenatis scelerisque neque. Proin pellentesque ligula id lacus semper, id lacinia velit tristique. Nulla et orci hendrerit, varius nulla non, ullamcorper ante. Proin eget lacinia sapien, in ultrices arcu.\r\n\r\nAliquam pharetra ullamcorper turpis sed sagittis. Praesent quis orci sit amet quam porta lobortis. Phasellus pharetra, tortor non feugiat commodo, nisl massa pulvinar felis, ut pellentesque odio sem nec nunc. Nunc vel libero placerat, malesuada libero ac, auctor odio. Donec molestie mauris quis justo interdum, nec porta orci congue. Suspendisse congue porttitor tempor. Praesent quis dolor ante. Vivamus nisi tellus, viverra at nibh ut, finibus auctor est. In hac habitasse platea dictumst. Vivamus viverra, augue vitae laoreet eleifend, erat velit suscipit justo, vitae rhoncus odio augue sit amet purus. Phasellus lobortis nulla quis efficitur auctor. In hendrerit ex vitae sapien varius dictum. Phasellus scelerisque turpis dui, in lobortis tortor elementum sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam eget lectus a nunc congue vestibulum quis in quam. Duis interdum, nulla in finibus molestie, urna dui elementum justo, nec viverra nibh nunc at ipsum.', '+36 70 123 4567', 'minta@eamil.hu', NULL, NULL, 1),
	(2, 'Munkatárs2 neve', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque hendrerit lorem sit amet aliquet. Aliquam eu risus ut mauris cursus euismod elementum dictum sapien. Pellentesque aliquet faucibus nunc, ac pharetra diam volutpat a. Donec at arcu leo. Nulla eget tristique purus. Vivamus sollicitudin lacus quis mauris malesuada, non accumsan massa varius. Nunc tristique magna eget tortor vestibulum viverra.\r\n\r\nFusce mollis egestas turpis. Maecenas at arcu tincidunt, placerat magna vitae, lacinia arcu. Nullam sit amet justo a nibh mattis sagittis ut sit amet dolor. Praesent enim lorem, consectetur laoreet semper vel, facilisis vel arcu. Donec elementum ut velit ut varius. Mauris sit amet ipsum felis. Nunc vitae purus id ex fringilla luctus. Donec feugiat arcu lectus, sit amet dictum lacus vulputate tristique. Cras velit ligula, egestas ut mi at, venenatis scelerisque neque. Proin pellentesque ligula id lacus semper, id lacinia velit tristique. Nulla et orci hendrerit, varius nulla non, ullamcorper ante. Proin eget lacinia sapien, in ultrices arcu.\r\n\r\nAliquam pharetra ullamcorper turpis sed sagittis. Praesent quis orci sit amet quam porta lobortis. Phasellus pharetra, tortor non feugiat commodo, nisl massa pulvinar felis, ut pellentesque odio sem nec nunc. Nunc vel libero placerat, malesuada libero ac, auctor odio. Donec molestie mauris quis justo interdum, nec porta orci congue. Suspendisse congue porttitor tempor. Praesent quis dolor ante. Vivamus nisi tellus, viverra at nibh ut, finibus auctor est. In hac habitasse platea dictumst. Vivamus viverra, augue vitae laoreet eleifend, erat velit suscipit justo, vitae rhoncus odio augue sit amet purus. Phasellus lobortis nulla quis efficitur auctor. In hendrerit ex vitae sapien varius dictum. Phasellus scelerisque turpis dui, in lobortis tortor elementum sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam eget lectus a nunc congue vestibulum quis in quam. Duis interdum, nulla in finibus molestie, urna dui elementum justo, nec viverra nibh nunc at ipsum.', '+36 70 123 4567', 'minta@eamil.hu', NULL, NULL, 1),
	(3, 'Munkatár3 neve', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque hendrerit lorem sit amet aliquet. Aliquam eu risus ut mauris cursus euismod elementum dictum sapien. Pellentesque aliquet faucibus nunc, ac pharetra diam volutpat a. Donec at arcu leo. Nulla eget tristique purus. Vivamus sollicitudin lacus quis mauris malesuada, non accumsan massa varius. Nunc tristique magna eget tortor vestibulum viverra.\r\n\r\nFusce mollis egestas turpis. Maecenas at arcu tincidunt, placerat magna vitae, lacinia arcu. Nullam sit amet justo a nibh mattis sagittis ut sit amet dolor. Praesent enim lorem, consectetur laoreet semper vel, facilisis vel arcu. Donec elementum ut velit ut varius. Mauris sit amet ipsum felis. Nunc vitae purus id ex fringilla luctus. Donec feugiat arcu lectus, sit amet dictum lacus vulputate tristique. Cras velit ligula, egestas ut mi at, venenatis scelerisque neque. Proin pellentesque ligula id lacus semper, id lacinia velit tristique. Nulla et orci hendrerit, varius nulla non, ullamcorper ante. Proin eget lacinia sapien, in ultrices arcu.\r\n\r\nAliquam pharetra ullamcorper turpis sed sagittis. Praesent quis orci sit amet quam porta lobortis. Phasellus pharetra, tortor non feugiat commodo, nisl massa pulvinar felis, ut pellentesque odio sem nec nunc. Nunc vel libero placerat, malesuada libero ac, auctor odio. Donec molestie mauris quis justo interdum, nec porta orci congue. Suspendisse congue porttitor tempor. Praesent quis dolor ante. Vivamus nisi tellus, viverra at nibh ut, finibus auctor est. In hac habitasse platea dictumst. Vivamus viverra, augue vitae laoreet eleifend, erat velit suscipit justo, vitae rhoncus odio augue sit amet purus. Phasellus lobortis nulla quis efficitur auctor. In hendrerit ex vitae sapien varius dictum. Phasellus scelerisque turpis dui, in lobortis tortor elementum sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam eget lectus a nunc congue vestibulum quis in quam. Duis interdum, nulla in finibus molestie, urna dui elementum justo, nec viverra nibh nunc at ipsum.', '+36 70 123 4567', 'minta@eamil.hu', NULL, NULL, 1),
	(5, 'gegreg', 'ergerg', 'reg', 'erg', 'efelveteli_78264923_2143516516.pdf', 'filete0i27ivgvbjt4ippbrh6a32d0.jpg', 1);
/*!40000 ALTER TABLE `colleague` ENABLE KEYS */;


-- Dumping structure for tábla flora.event
DROP TABLE IF EXISTS `event`;
CREATE TABLE IF NOT EXISTS `event` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `address` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table flora.event: ~2 rows (approximately)
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` (`id`, `title`, `description`, `address`, `image`, `date`) VALUES
	(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque hendrerit lorem sit amet aliquet. Aliquam eu risus ut mauris cursus euismod elementum dictum sapien. Pellentesque aliquet faucibus nunc, ac pharetra diam volutpat a. Donec at arcu leo. Nulla eget tristique purus. Vivamus sollicitudin lacus quis mauris malesuada, non accumsan massa varius. Nunc tristique magna eget tortor vestibulum viverra.', 'hznthtzh', 'fileufc50b80todokq27bqltgkvl0.jpg', '2017-03-19 01:00:00'),
	(3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.AS', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque hendrerit lorem sit amet aliquet. Aliquam eu risus ut mauris cursus euismod elementum dictum sapien. Pellentesque aliquet faucibus nunc, ac pharetra diam volutpat a. Donec at arcu leo. Nulla eget tristique purus. Vivamus sollicitudin lacus quis mauris malesuada, non accumsan massa varius. Nunc tristique magna eget tortor vestibulum viverra.', 'hznthtzh', 'fileufc50b80todokq27bqltgkvl0.jpg', '2017-03-26 01:00:00');
/*!40000 ALTER TABLE `event` ENABLE KEYS */;


-- Dumping structure for tábla flora.knowledge_base
DROP TABLE IF EXISTS `knowledge_base`;
CREATE TABLE IF NOT EXISTS `knowledge_base` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `creator` varchar(255) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Dumping data for table flora.knowledge_base: ~2 rows (approximately)
/*!40000 ALTER TABLE `knowledge_base` DISABLE KEYS */;
INSERT INTO `knowledge_base` (`id`, `title`, `description`, `creator`, `active`, `date`) VALUES
	(5, 'hfgh', 'jhkhjkhjkhjkh', 'jkuzjkz', 1, '2017-02-18 01:00:00'),
	(6, 'rthrt', 'trh', 'trhrth', 1, '2017-04-14 02:00:00');
/*!40000 ALTER TABLE `knowledge_base` ENABLE KEYS */;


-- Dumping structure for tábla flora.news
DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `short_description` text,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- Dumping data for table flora.news: ~6 rows (approximately)
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` (`id`, `title`, `short_description`, `description`, `image`, `date`, `active`) VALUES
	(1, 'Cím mkmdkfgnsdsdfgdfg', '<p>fgdfgdfgdfzuhrtz</p>', '<p>rtzrtzhrturtujzt</p><p>rtztrzrtz</p><p><br></p>', NULL, '2017-02-10 01:00:00', 1),
	(2, 'dfsttzhooo', NULL, NULL, 'fileh2so6fjqbfn3kqfnobnp5sacip.jpg', '2017-02-09 01:00:00', 1),
	(3, 'Ez itt a cím', NULL, NULL, 'filecodt57sv477sine578pr5rld4b.jpg', '2017-02-17 01:00:00', 1),
	(6, 'zrtz', NULL, NULL, NULL, '2017-02-22 01:00:00', 0),
	(7, 'ijzui', NULL, NULL, NULL, '2017-02-18 01:00:00', 1),
	(8, 'rgerg', NULL, NULL, NULL, '2017-02-02 01:00:00', 0);
/*!40000 ALTER TABLE `news` ENABLE KEYS */;


-- Dumping structure for tábla flora.project
DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `place` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table flora.project: ~0 rows (approximately)
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
/*!40000 ALTER TABLE `project` ENABLE KEYS */;


-- Dumping structure for tábla flora.subscribers
DROP TABLE IF EXISTS `subscribers`;
CREATE TABLE IF NOT EXISTS `subscribers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- Dumping data for table flora.subscribers: ~2 rows (approximately)
/*!40000 ALTER TABLE `subscribers` DISABLE KEYS */;
INSERT INTO `subscribers` (`id`, `email`) VALUES
	(5, 'lofutty23xx@gmail.com'),
	(6, 'gardiangy@gmail.com');
/*!40000 ALTER TABLE `subscribers` ENABLE KEYS */;


-- Dumping structure for tábla flora.volunteers
DROP TABLE IF EXISTS `volunteers`;
CREATE TABLE IF NOT EXISTS `volunteers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` bigint(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- Dumping data for table flora.volunteers: ~2 rows (approximately)
/*!40000 ALTER TABLE `volunteers` DISABLE KEYS */;
INSERT INTO `volunteers` (`id`, `email`, `name`, `phone`) VALUES
	(5, 'lofutty23xx@gmail.com', 'Dani', 36205545151),
	(6, 'gardiangy@gmail.com', 'Gyuri', 36205545151);
/*!40000 ALTER TABLE `volunteers` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
