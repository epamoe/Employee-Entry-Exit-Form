-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 31, 2022 at 05:54 AM
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
-- Table structure for table `entry_exit_form`
--

CREATE TABLE `entry_exit_form` (
  `id_record` bigint(20) UNSIGNED NOT NULL,
  `created_on` datetime DEFAULT current_timestamp(),
  `initiator` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `suggested_email` varchar(255) DEFAULT NULL,
  `organisation` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `staff_member_repporting_to` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `begining_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `id_passport_type` varchar(255) DEFAULT NULL,
  `id_passport_number` varchar(255) DEFAULT NULL,
  `country_residence` varchar(255) DEFAULT NULL,
  `city_residence` varchar(255) DEFAULT NULL,
  `marital_status` varchar(255) DEFAULT NULL,
  `other_marital_status` varchar(250) DEFAULT NULL,
  `number_children` varchar(255) DEFAULT NULL,
  `contract_type` varchar(255) DEFAULT NULL,
  `employment_type` varchar(255) DEFAULT NULL,
  `net_salary` varchar(255) DEFAULT NULL,
  `gross_salary` varchar(255) DEFAULT NULL,
  `emergency_name` varchar(255) DEFAULT NULL,
  `emergency_phone` varchar(255) DEFAULT NULL,
  `personal_email` varchar(255) DEFAULT NULL,
  `personal_phone` varchar(255) DEFAULT NULL,
  `expiration_date_of_probation_period` date DEFAULT NULL,
  `is_probation_period_renewable` varchar(255) DEFAULT NULL,
  `it_tools` text DEFAULT NULL,
  `it_groups` text DEFAULT NULL,
  `leaving_email` varchar(255) DEFAULT NULL,
  `departure_date` date DEFAULT NULL,
  `deprovisioning_date` datetime DEFAULT NULL,
  `leaving_reason` text DEFAULT NULL,
  `changing_email` varchar(255) DEFAULT NULL,
  `local_currency` varchar(255) DEFAULT NULL,
  `form_type` varchar(255) DEFAULT NULL,
  `automatisation_proceed` varchar(255) DEFAULT NULL,
  `automatisation_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `entry_exit_form`
--

INSERT INTO `entry_exit_form` (`id_record`, `created_on`, `initiator`, `firstname`, `lastname`, `suggested_email`, `organisation`, `position`, `staff_member_repporting_to`, `subject`, `begining_date`, `end_date`, `birthdate`, `gender`, `nationality`, `id_passport_type`, `id_passport_number`, `country_residence`, `city_residence`, `marital_status`, `other_marital_status`, `number_children`, `contract_type`, `employment_type`, `net_salary`, `gross_salary`, `emergency_name`, `emergency_phone`, `personal_email`, `personal_phone`, `expiration_date_of_probation_period`, `is_probation_period_renewable`, `it_tools`, `it_groups`, `leaving_email`, `departure_date`, `deprovisioning_date`, `leaving_reason`, `changing_email`, `local_currency`, `form_type`, `automatisation_proceed`, `automatisation_date`) VALUES
(1, '2022-08-30 15:50:36', 'NA', 'Estebanc', 'PAMOE', 'abcd.est@enkoeducation.com', 'Enko Waca', 'it', 'Reporting Staff member', 'music', '2022-08-06', '2022-08-17', '2022-08-17', 'other', 'CA', 'passport', 'CMR000222555', 'CM', 'Douala', 'married', '', '1', 'consultant', 'parttime', '200000', '50000', 'Abdel Raïm', '2', 'epamoe@gmail.com', '2', '2022-08-11', 'yes', '[gsuite,canvas,esignature]', '[allstaff,allteacher]', NULL, NULL, NULL, NULL, NULL, NULL, 'entry', NULL, NULL),
(34, '2022-08-30 16:23:42', 'NA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user.leaving@enkoeducation.com', '2022-08-18', '2022-08-03 00:00:00', 'endofcontract', NULL, NULL, 'leaving', NULL, NULL),
(35, '2022-08-31 04:46:22', 'NA', NULL, NULL, NULL, 'Enko Waka', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'abcd.staff', NULL, 'changing', NULL, NULL),
(36, '2022-08-31 04:46:22', 'NA', NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'abcd.staff', NULL, 'changing', NULL, NULL),
(37, '2022-08-31 04:46:22', 'NA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'abcd.staff', NULL, 'changing', NULL, NULL),
(38, '2022-08-31 04:46:22', 'NA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'abcd.staff', NULL, 'changing', NULL, NULL),
(39, '2022-08-31 04:52:16', 'NA', NULL, NULL, NULL, 'Enko Waka', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'abcd.staff', NULL, 'changing', NULL, NULL),
(40, '2022-08-31 04:52:16', 'NA', NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'abcd.staff', NULL, 'changing', NULL, NULL),
(41, '2022-08-31 04:52:16', 'NA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'abcd.staff', NULL, 'changing', NULL, NULL),
(42, '2022-08-31 04:52:16', 'NA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'abcd.staff', NULL, 'changing', NULL, NULL),
(43, '2022-08-31 04:52:45', 'NA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'enko.user@enkoeducation.com', '2012-12-12', '2005-05-05 00:00:00', 'dismissal', NULL, NULL, 'leaving', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `entry_exit_form`
--
ALTER TABLE `entry_exit_form`
  ADD PRIMARY KEY (`id_record`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `entry_exit_form`
--
ALTER TABLE `entry_exit_form`
  MODIFY `id_record` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
