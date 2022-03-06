-- MariaDB dump 10.19  Distrib 10.4.22-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: gamersassociation
-- ------------------------------------------------------
-- Server version	10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coach_details`
--

DROP TABLE IF EXISTS `coach_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coach_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `team_name` varchar(45) NOT NULL,
  `is_admin` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`,`team_name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coach_details`
--

LOCK TABLES `coach_details` WRITE;
/*!40000 ALTER TABLE `coach_details` DISABLE KEYS */;
INSERT INTO `coach_details` VALUES (1,'Rahul Devid','India',1),(2,'Sachin','India',0),(3,'Mani','India',0),(4,'Kapil','India',0),(5,'Srikanth','India',0),(6,'Raina','India',0),(7,'Gregg','America',1),(8,'Sebastian','America',0),(9,'Jerry','England',1),(10,'Cruise','England',0),(11,'Peter','England',0);
/*!40000 ALTER TABLE `coach_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_details`
--

DROP TABLE IF EXISTS `player_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `player_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `names` varchar(45) NOT NULL,
  `matches` int(11) NOT NULL,
  `losts` int(11) DEFAULT NULL,
  `wins` int(11) DEFAULT NULL,
  `sport` varchar(45) DEFAULT NULL,
  `team` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_details`
--

LOCK TABLES `player_details` WRITE;
/*!40000 ALTER TABLE `player_details` DISABLE KEYS */;
INSERT INTO `player_details` VALUES (1,'dhoni',90,5,85,'cricket','India'),(2,'sachin',4,1,3,'cricket','India'),(3,'yuvi',6,4,2,'cricket','India'),(4,'rohith',5,3,2,'cricket','India'),(5,'virat',10,2,8,'cricket','India'),(6,'root',8,5,2,'cricket','England'),(7,'stokes',22,11,11,'cricket','England'),(8,'jofra',1,1,0,'cricket','England'),(9,'jhony',0,0,0,'cricket','America'),(10,'ronald',18,2,16,'football','America'),(11,'messi',22,10,12,'football','India'),(12,'sunil',20,1,19,'football','India'),(13,'sandesh',11,1,10,'football','India'),(14,'gurpreth',13,3,10,'football','India'),(15,'thapa',0,0,0,'football','India'),(16,'brandon',19,0,19,'football','India');
/*!40000 ALTER TABLE `player_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-07  0:31:29
