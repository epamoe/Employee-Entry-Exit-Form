-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 07, 2022 at 01:40 PM
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
  `initiator` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `suggested_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `organisation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `staff_member_repporting_to` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `begining_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nationality` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_passport_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_passport_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country_residence` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city_residence` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `marital_status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `other_marital_status` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `number_children` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contract_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employment_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `crypted_net_salary` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `crypted_gross_salary` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `emergency_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `emergency_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `personal_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `personal_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expiration_date_of_probation_period` date DEFAULT NULL,
  `is_probation_period_renewable` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `it_tools` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `it_groups` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `leaving_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `departure_date` date DEFAULT NULL,
  `deprovisioning_date` datetime DEFAULT NULL,
  `leaving_reason` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `changing_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `local_currency` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `form_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `automatisation_proceed` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `automatisation_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `entry_exit_form`
--

INSERT INTO `entry_exit_form` (`id_record`, `created_on`, `initiator`, `firstname`, `lastname`, `suggested_email`, `organisation`, `position`, `staff_member_repporting_to`, `subject`, `begining_date`, `end_date`, `birthdate`, `gender`, `nationality`, `id_passport_type`, `id_passport_number`, `country_residence`, `city_residence`, `marital_status`, `other_marital_status`, `number_children`, `contract_type`, `employment_type`, `crypted_net_salary`, `crypted_gross_salary`, `emergency_name`, `emergency_phone`, `personal_email`, `personal_phone`, `expiration_date_of_probation_period`, `is_probation_period_renewable`, `it_tools`, `it_groups`, `leaving_email`, `departure_date`, `deprovisioning_date`, `leaving_reason`, `changing_email`, `local_currency`, `form_type`, `automatisation_proceed`, `automatisation_date`) VALUES
(1, '2022-08-30 15:50:36', 'NA', 'Estebanc', 'PAMOE', 'abcd.est@enkoeducation.com', 'Enko Waca', 'it', 'Reporting Staff member', 'music', '2022-08-06', '2022-08-17', '2022-08-17', 'other', 'CA', 'passport', 'CMR000222555', 'CM', 'Douala', 'married', '', '1', 'consultant', 'parttime', '200000', '50000', 'Abdel Raïm', '2', 'epamoe@gmail.com', '2', '2022-08-11', 'yes', '[gsuite,canvas,esignature]', '[allstaff,allteacher]', NULL, NULL, NULL, NULL, NULL, NULL, 'entry', NULL, NULL),
(47, '2022-09-07 10:59:26', 'NA', 'Estebanc', 'PAMOE', 'abcd.com@enkoeducation.com', 'Enko Riviera', 'teacher', 'nino1111', 'music', '2022-09-22', '2022-09-29', '2022-09-29', 'female', 'BB', 'passport', 'CMR-0002222555', 'BH', 'bamako', 'married', '', '2', 'consultant', 'parttime', 'AES_ENCRYPT(\'200000\',\'NA\')', '50000', 'Abdel Raïm', '5558888999', 'epamoe@gmail.com', '22222222', '2022-09-21', 'yes', '[gsuite,payspace,helpdesk,jazzhr]', '[allstaff,allteacher]', NULL, NULL, NULL, NULL, NULL, NULL, 'entry', NULL, NULL),
(48, '2022-09-07 11:03:11', 'NA', 'Estebanc', 'PAMOE', 'abcd.com@enkoeducation.com', 'Enko Riviera', 'teacher', 'nino1111', 'music', '2022-09-22', '2022-09-29', '2022-09-29', 'female', 'BB', 'passport', 'CMR-0002222555', 'BH', 'bamako', 'married', '', '2', 'consultant', 'parttime', NULL, '50000', 'Abdel Raïm', '5558888999', 'epamoe@gmail.com', '22222222', '2022-09-21', 'yes', '[gsuite,payspace,helpdesk,jazzhr]', '[allstaff,allteacher]', NULL, NULL, NULL, NULL, NULL, NULL, 'entry', NULL, NULL),
(49, '2022-09-07 12:33:01', 'NA', 'Estebanc', 'PAMOE', 'abcd.com@enkoeducation.com', 'Enko Riviera', 'teacher', 'nino1111', 'music', '2022-09-22', '2022-09-29', '2022-09-29', 'female', 'BB', 'passport', 'CMR-0002222555', 'BH', 'bamako', 'married', '', '2', 'consultant', 'parttime', 'éŸ9ÌØP‘£ñàú‚¢Îm', '50000', 'Abdel Raïm', '5558888999', 'epamoe@gmail.com', '22222222', '2022-09-21', 'yes', '[gsuite,payspace,helpdesk,jazzhr]', '[allstaff,allteacher]', NULL, NULL, NULL, NULL, NULL, NULL, 'entry', NULL, NULL),
(50, '2022-09-07 12:39:43', 'NA', 'Estebanc', 'PAMOE', 'abcd.com@enkoeducation.com', 'Enko Riviera', 'teacher', 'nino1111', 'music', '2022-09-22', '2022-09-29', '2022-09-29', 'female', 'BB', 'passport', 'CMR-0002222555', 'BH', 'bamako', 'married', '', '2', 'consultant', 'parttime', 'éŸ9ÌØP‘£ñàú‚¢Îm', '­6ºò^Íé¯\'ÀíÿP#', 'Abdel Raïm', '5558888999', 'epamoe@gmail.com', '22222222', '2022-09-21', 'yes', '[gsuite,payspace,helpdesk,jazzhr]', '[allstaff,allteacher]', NULL, NULL, NULL, NULL, NULL, NULL, 'entry', NULL, NULL),
(51, '2022-09-07 12:41:10', 'NA', 'Estebanc', 'PAMOE', 'abcd.com@enkoeducation.com', 'Enko Riviera', 'teacher', 'nino1111', 'music', '2022-09-22', '2022-09-29', '2022-09-29', 'female', 'BB', 'passport', 'CMR-0002222555', 'BH', 'bamako', 'married', '', '2', 'consultant', 'parttime', 'éŸ9ÌØP‘£ñàú‚¢Îm', '­6ºò^Íé¯\'ÀíÿP#', 'Abdel Raïm', '5558888999', 'epamoe@gmail.com', '22222222', '2022-09-21', 'yes', '[gsuite,payspace,helpdesk,jazzhr]', '[allstaff,allteacher]', NULL, NULL, NULL, NULL, NULL, NULL, 'entry', NULL, NULL),
(52, '2022-09-07 12:46:03', 'NA', 'Estebanc', 'PAMOE', 'abcd.com@enkoeducation.com', 'Enko Riviera', 'teacher', 'nino1111', 'music', '2022-09-22', '2022-09-29', '2022-09-29', 'female', 'BB', 'passport', 'CMR-0002222555', 'BH', 'bamako', 'married', '', '2', 'consultant', 'parttime', 'éŸ9ÌØP‘£ñàú‚¢Îm', '­6ºò^Íé¯\'ÀíÿP#', 'Abdel Raïm', '5558888999', 'epamoe@gmail.com', '22222222', '2022-09-21', 'yes', '[gsuite,payspace,helpdesk,jazzhr]', '[allstaff,allteacher]', NULL, NULL, NULL, NULL, NULL, NULL, '2022-09-07 12:46:03', NULL, NULL),
(53, '2022-09-07 12:58:38', 'NA', 'Estebanc', 'PAMOE', 'abcd.com@enkoeducation.com', 'Enko Riviera', 'teacher', 'nino1111', 'music', '2022-09-22', '2022-09-29', '2022-09-29', 'female', 'BB', 'passport', 'CMR-0002222555', 'BH', 'bamako', 'married', '', '2', 'consultant', 'parttime', 'éŸ9ÌØP‘£ñàú‚¢Îm', '­6ºò^Íé¯\'ÀíÿP#', 'Abdel Raïm', '5558888999', 'epamoe@gmail.com', '22222222', '2022-09-21', 'yes', '[gsuite,payspace,helpdesk,jazzhr]', '[allstaff,allteacher]', NULL, NULL, NULL, NULL, NULL, NULL, '2022-09-07 12:58:38', NULL, NULL),
(54, '2022-09-07 13:00:08', 'NA', 'Estebanc', 'PAMOE', 'abcd.com@enkoeducation.com', 'Enko Riviera', 'teacher', 'nino1111', 'music', '2022-09-22', '2022-09-29', '2022-09-29', 'female', 'BB', 'passport', 'CMR-0002222555', 'BH', 'bamako', 'married', '', '2', 'consultant', 'parttime', 'Ã©ê®rSH„O‘,ñQ', ',<çcL2D9=‡qü[ö', 'Abdel Raïm', '5558888999', 'epamoe@gmail.com', '22222222', '2022-09-21', 'yes', '[gsuite,payspace,helpdesk,jazzhr]', '[allstaff,allteacher]', NULL, NULL, NULL, NULL, NULL, NULL, 'entry', NULL, NULL);

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
  MODIFY `id_record` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
