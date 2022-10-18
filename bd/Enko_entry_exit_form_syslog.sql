-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 18, 2022 at 06:26 PM
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
-- Table structure for table `Enko_entry_exit_form_syslog`
--

CREATE TABLE `Enko_entry_exit_form_syslog` (
  `id_syslog` int(11) UNSIGNED NOT NULL,
  `topic` varchar(100) DEFAULT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `details` text DEFAULT NULL,
  `Created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `userID` varchar(100) DEFAULT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Enko_entry_exit_form_syslog`
--
ALTER TABLE `Enko_entry_exit_form_syslog`
  ADD PRIMARY KEY (`id_syslog`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Enko_entry_exit_form_syslog`
--
ALTER TABLE `Enko_entry_exit_form_syslog`
  MODIFY `id_syslog` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
