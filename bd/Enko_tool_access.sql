-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 28, 2022 at 02:21 PM
-- Server version: 10.3.34-MariaDB-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdEnko`
--

-- --------------------------------------------------------

--
-- Table structure for table `Enko_tool_access`
--

CREATE TABLE `Enko_tool_access` (
  `id_tool` int(11) NOT NULL,
  `finance` varchar(100) NOT NULL,
  `It` varchar(100) NOT NULL,
  `hr` varchar(100) NOT NULL,
  `mo` varchar(100) NOT NULL,
  `teacher` varchar(100) NOT NULL,
  `hos` varchar(100) NOT NULL,
  `ext` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Enko_tool_access`
--

INSERT INTO `Enko_tool_access` (`id_tool`, `finance`, `It`, `hr`, `mo`, `teacher`, `hos`, `ext`) VALUES
(1, '[gsuite,payspace,slack,]', '[asana,edAdmin,gsuite,helpdesk,payspace,slack,zoom,]', '[asana,docusign,gsuite,jazzhr,payspace,slack,zoom,]', '[edAdmin,gsuite,mailchimp,payspace,pipedrive,slack,surveymonkey,]', '[canvas,gsuite,payspace,turnitin,]', '[canvas,edAdmin,gsuite,payspace,turnitin,]', '[gsuite,payspace,]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Enko_tool_access`
--
ALTER TABLE `Enko_tool_access`
  ADD PRIMARY KEY (`id_tool`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Enko_tool_access`
--
ALTER TABLE `Enko_tool_access`
  MODIFY `id_tool` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
