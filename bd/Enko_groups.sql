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
-- Table structure for table `Enko_groups`
--

CREATE TABLE `Enko_groups` (
  `mail` varchar(40) NOT NULL,
  `group_name` varchar(41) NOT NULL,
  `school` varchar(28) DEFAULT NULL,
  `school_code` varchar(4) DEFAULT NULL,
  `Membre` int(11) NOT NULL,
  `Position` varchar(9) DEFAULT NULL,
  `important` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Enko_groups`
--

INSERT INTO `Enko_groups` (`mail`, `group_name`, `school`, `school_code`, `Membre`, `Position`, `important`) VALUES
('access@enkoeducation.com', 'Access', NULL, NULL, 4, NULL, b'0'),
('admin.bamako@enkoeducation.com', 'Admin Enko Bamako', 'Enko Bamako', 'EBK', 7, 'Admin', b'1'),
('admin.bonanjo@enkoeducation.com', 'Admin Enko Bonanjo', 'Enko Bonanjo', 'EBC', 6, 'Admin', b'1'),
('admin.botho@enkoeducation.com', 'Admin Enko Botho', 'Enko Botho', 'EBT', 8, 'Admin', b'1'),
('admin.jacaranda@enkoeducation.com', 'Admin Jacaranda Academy', 'Jacaranda Academy', 'EJA', 6, 'Admin', b'1'),
('admin.keurgorgui@enkoeducation.com', 'Admin Enko keur gorgui', 'Enko Keur Gorgui', 'EKG', 7, 'Admin', b'1'),
('admin.lagaiete@enkoeducation.com', 'Admin Enko la gaiete', 'Enko La Gaiete', 'EGC', 8, 'Admin', b'1'),
('admin.ouaga@enkoeducation.com', 'Admin Enko Ouaga', 'Enko Ouaga', 'EOG', 12, 'Admin', b'1'),
('admin.pestalozzi@enkoeducation.com', 'Admin Pestalozzi Education Center', 'Pestalozzi Education Center', 'PED', 12, 'Admin', b'1'),
('admin.riverside@enkoeducation.com', 'Admin Enko Riverside', 'Enko Riverside', 'EVS', 10, 'Admin', b'1'),
('admin.waca@enkoeducation.com', 'Admin Enko Waca', 'Enko Waca', 'EWC', 7, 'Admin', b'1'),
('admin@enkoeducation.com', 'Admin Enko Riviera', 'Enko Riviera', 'ERV', 7, 'Admin', b'1'),
('administration@amazingraceschool.co.za', 'Administration', 'Amazing Grace Private School', 'AGP', 5, NULL, b'0'),
('adminriviera@enkoeducation.com', 'Staff Admin Riviera', 'Enko Riviera', 'ERV', 21, 'Admin', b'1'),
('adminsekeleka@enkoeducation.com', 'Admin Sekeleka', 'Enko Sekeleka', 'ESC', 6, 'Admin', b'1'),
('afriqueenpoesie@enkoeducation.com', 'Afrique en Poésie', NULL, NULL, 7, NULL, b'0'),
('agps_mbr_list@enkoeducation.com', 'AGPS MBR List', 'Amazing Grace Private School', 'AGP', 14, NULL, b'0'),
('all.ouaga@enkoeducation.com', 'All@EnkoOuaga', 'Enko Ouaga', 'EOG', 39, 'all', b'1'),
('all.pestalozzi@enkoeducation.com', 'All Pestalozzi', 'Pestalozzi Education Center', 'PED', 91, 'all', b'1'),
('allenkostaff@enkoeducation.com', 'All Enko Staff', NULL, 'ALL', 17, 'All Staff', b'1'),
('allschoolstaff@enkoeducation.com', 'All School Staff', NULL, 'ALL\r', 362, 'all', b'1'),
('allstaff.bamako@enkoeducation.com', 'All staff Enko Bamako', 'Enko Bamako', 'EBK', 33, 'All Staff', b'1'),
('alumni@enkoeducation.com', 'Alumni Enko Education', NULL, NULL, 3, NULL, b'0'),
('amazingrace@enkoeducation.com', 'Amazing Grace', 'Amazing Grace Private School', 'AGP', 20, NULL, b'0'),
('ask.anything@enkoeducation.com', 'Ask Anything', NULL, NULL, 1, NULL, b'0'),
('bamako@enkoeducation.com', 'Enko Bamako International School', 'Enko Bamako', 'EBK', 3, NULL, b'0'),
('benga@enkoeducation.com', 'Enko Benga', NULL, NULL, 2, NULL, b'0'),
('bonanjo@enkoeducation.com', 'Enko Bonanjo', 'Enko Bonanjo', 'EBC', 4, NULL, b'0'),
('botho@enkoeducation.com', 'Enko Botho Campus', 'Enko Botho', 'EBT', 3, 'All Staff', b'1'),
('botho_mbr_list@enkoeducation.com', 'Botho MBR List', 'Enko Botho', 'EBT', 14, NULL, b'0'),
('calibration.nh@enkoeducation.com', 'Calibration Northern Hemisphere', NULL, NULL, 1, NULL, b'0'),
('calibration.sh@enkoeducation.com', 'Calibration Southern Hemisphere', NULL, NULL, 1, NULL, b'0'),
('canvas.support@enkoeducation.com', 'Canvas Support', NULL, NULL, 4, NULL, b'0'),
('classroomvisits@enkoeducation.com', 'Classroom Visits', 'All teacher', NULL, 2, 'Teacher', b'1'),
('classroom_teachers@enkoeducation.com', 'Classroom Teachers', NULL, NULL, 0, 'Teacher', b'0'),
('contabilidade.sekeleka@enkoeducation.com', 'Contabilidade Sekeleka', NULL, NULL, 1, NULL, b'0'),
('contact@enkoeducation.com', 'Contact', NULL, NULL, 2, 'HR', b'0'),
('coordinators.ouaga@enkoeducation.com', 'Coordinators@enkoouaga', 'Enko Ouaga', 'EOG', 4, NULL, b'0'),
('coordinators.riverside@enkoeducation.com', 'Coordinators Enko Riverside', 'Enko Riverside', 'EVS', 7, NULL, b'0'),
('counselors@enkoeducation.com', 'University Counselors', NULL, NULL, 13, NULL, b'0'),
('covid19@enkoeducation.com', 'Covid19', NULL, NULL, 1, NULL, b'0'),
('dakar@enkoeducation.com', 'Enko Dakar International School', NULL, NULL, 5, NULL, b'0'),
('domains@enkoeducation.com', 'Domains Leads', NULL, NULL, 12, NULL, b'0'),
('donation@enkoeducation.com', 'Donation', NULL, NULL, 3, NULL, b'0'),
('dp2.2018.nyamunda@enkoschools.com', 'Enko Nyamunda - 2018 - DP2', NULL, NULL, 15, NULL, b'0'),
('dp2019-2021-eoc@enkoschools.com', 'DP 2019 to 2021@ Ouaga Campus', NULL, NULL, 13, NULL, b'0'),
('dp2020-2022-eoc@enkoeducation.com', 'Dp2020-2022 at Enko Ouaga', NULL, NULL, 16, NULL, b'0'),
('dp2021-2023-eoc@enkoeducation.com', 'Dp2021-2023 at Enko Ouaga', NULL, NULL, 20, NULL, b'0'),
('dpriviera@enkoeducation.com', 'Enseignants DP Riviera', 'Enko Riviera', 'ERV', 22, 'Teacher', b'1'),
('duediligence.ext@enkoeducation.com', 'Due Diligence Ext', NULL, NULL, 15, NULL, b'0'),
('duediligence@enkoeducation.com', 'Group Due Diligence', NULL, NULL, 3, NULL, b'0'),
('e.pignot@enkoeducation.com', 'Eric Pignot', NULL, NULL, 1, NULL, b'0'),
('ebisdouala@enkoeducation.com', 'EBIS Douala', NULL, NULL, 36, NULL, b'0'),
('elgisfaculty@enkoeducation.com', 'ELGIS Faculty', NULL, NULL, 24, NULL, b'0'),
('enkofamily@enkoeducation.com', 'All Enko (Students and Staffs)', NULL, 'ALL', 2024, 'all', b'1'),
('enkoriverside-2020@enkoschools.com', 'Enko Riverside 2020', NULL, NULL, 17, NULL, b'0'),
('enkostaff@enkoeducation.com', 'Enko Staff', 'All Staff', NULL, 484, 'all', b'1'),
('events@enkoeducation.com', 'Events Enko Education', NULL, NULL, 2, NULL, b'0'),
('feedback.pestalozzi@enkoeducation.com', 'Feedback Pestalozzi', NULL, NULL, 1, NULL, b'0'),
('finance.agps@enkoeducation.com', 'Finance AGPS', 'Amazing Grace Private School', 'AGP', 7, 'Finance', b'0'),
('finance.bamako@enkoeducation.com', 'Finance Enko Bamako', 'Enko Bamako', 'EBK', 6, 'Finance', b'0'),
('finance.bonanjo@enkoeducation.com', 'Finance Enko Bonanjo', 'Enko Bonanjo', 'EBC', 7, 'Finance', b'0'),
('finance.botho@enkoeducation.com', 'Finance Enko Botho', 'Enko Botho', 'EBT', 6, 'Finance', b'0'),
('finance.jacaranda@enkoeducation.com', 'Finance Jacaranda Academy', 'Jacaranda Academy', 'EJA', 7, 'Finance', b'0'),
('finance.keurgorgui@enkoeducation.com', 'Finance Enko Keur Gorgui', 'Enko Keur Gorgui', 'EKG', 7, 'Finance', b'0'),
('finance.lgprimary@enkoeducation.com', 'Finance La Gaieté Primary', 'Enko La Gaiete', 'EGC', 8, 'Finance', b'0'),
('finance.lgsecondary@enkoeducation.com', 'Finance La Gaieté Secondary', 'Enko La Gaiete', 'EGC', 8, 'Finance', b'0'),
('finance.nh@enkoeducation.com', 'Finance Officers NH', NULL, NULL, 11, NULL, b'0'),
('finance.pestalozzi@enkoeducation.com', 'Finance Pestalozzi Education Center', 'Pestalozzi Education Center', 'PED', 8, 'Finance', b'0'),
('finance.riverside@enkoeducation.com', 'Finance Enko Riverside', 'Enko Riverside', 'EVS', 6, 'Finance', b'0'),
('finance.riviera@enkoeducation.com', 'Finance Enko Riviera', 'Enko Riviera', 'ERV', 8, 'Finance', b'0'),
('finance.sekeleka@enkoeducation.com', 'Finance Enko Sekeleka', 'Enko Sekeleka', 'ESC', 5, 'Finance', b'0'),
('finance.sh@enkoeducation.com', 'Finance Officers SH', NULL, NULL, 8, NULL, b'0'),
('finance.waca@enkoeducation.com', 'Finance Enko Waca', 'Enko Waca', 'EWC', 7, 'Finance', b'0'),
('finance@enkoeducation.com', 'Finance', NULL, NULL, 4, NULL, b'0'),
('financeenkoouaga@enkoeducation.com', 'Finance Enko Ouaga', 'Enko Ouaga', 'EOG', 8, 'Finance', b'0'),
('financial.aid@enkoeducation.com', 'Financial aid', NULL, NULL, 2, NULL, b'0'),
('focalpoints@enkoeducation.com', 'Ed-admin Focal Points', NULL, NULL, 16, NULL, b'0'),
('formtutors.ouaga@enkoeducation.com', 'Form Tutors Ouaga', NULL, NULL, 8, NULL, b'0'),
('founders@enkoeducation.com', 'Founders', NULL, NULL, 2, NULL, b'0'),
('hos.principals@enkoeducation.com', 'Heads of School & Principals', NULL, NULL, 20, NULL, b'0'),
('hos@enkoeducation.com', 'Heads of School', NULL, NULL, 16, 'hos', b'0'),
('hr@enkoeducation.com', 'HR', NULL, NULL, 4, 'hr', b'0'),
('human.resources@enkoeducation.com', 'Human Resources', NULL, NULL, 4, 'hr', b'0'),
('ibteachers.ouaga@enkoeducation.com', 'IB teachers Ouaga', NULL, NULL, 1, NULL, b'0'),
('itleads@enkoeducation.com', 'IT Leads', NULL, NULL, 15, NULL, b'0'),
('jacaranda@enkoeducation.com', 'Jacaranda Academy', NULL, NULL, 4, NULL, b'0'),
('jacaranda_mbr_list@enkoeducation.com', 'Jacaranda MBR List', 'Jacaranda Academy', 'EJA', 14, NULL, b'0'),
('jacquesjansevan@enkoeducation.com', 'jacquesjansevanrensburg', NULL, NULL, 3, NULL, b'0'),
('johnwesley@enkoeducation.com', 'Enko John Wesley', NULL, NULL, 3, NULL, b'0'),
('lagaiete@enkoeducation.com', 'Enko La Gaieté', NULL, NULL, 4, NULL, b'0'),
('launchers@enkoeducation.com', 'School Launchers', NULL, NULL, 5, NULL, b'0'),
('leadership@enkoeducation.com', 'General Leadership', NULL, NULL, 8, NULL, b'0'),
('learning@enkoeducation.com', 'Learning & Teaching', NULL, NULL, 1, NULL, b'0'),
('learnings@enkoeducation.com', 'Learning & Development', NULL, NULL, 3, NULL, b'0'),
('lower.secondary.ouaga@enkoeducation.com', 'Lower Secondary Kalgondin Ouaga', NULL, NULL, 7, NULL, b'0'),
('management@amazingraceschool.co.za', 'AGPS Management', 'Amazing Grace Private School', 'AGP', 12, NULL, b'0'),
('marketing.officers.nh@enkoeducation.com', 'Marketing Officers NH', NULL, NULL, 10, NULL, b'0'),
('marketing.officers.sh@enkoeducation.com', 'Marketing Officers SH', NULL, NULL, 10, NULL, b'0'),
('marketing@enkoeducation.com', 'Marketing', NULL, NULL, 7, NULL, b'0'),
('mypriviera@enkoeducation.com', 'Enseignants MYP Riviera', 'Enko Riviera', 'ERV', 33, 'Teacher', b'1'),
('operations@enkoeducation.com', 'Operations', NULL, NULL, 1, NULL, b'0'),
('ouaga@enkoeducation.com', 'Enko Ouaga Campus', NULL, NULL, 5, NULL, b'0'),
('pestalozzi@enkoeducation.com', 'Pestalozzi Education Center', NULL, NULL, 3, NULL, b'0'),
('pestalozzi_mbr_list@enkoeducation.com', 'Pestalozzi MBR List', 'Pestalozzi Education Center', 'PED', 13, NULL, b'0'),
('platform@enkoeducation.com', 'Platform', NULL, NULL, 24, NULL, b'0'),
('primary.ouaga@enkoeducation.com', 'Ouaga Primary School', 'Enko Ouaga', 'EOG', 11, NULL, b'0'),
('pro.nh@enkoeducation.com', 'Parents Relation Officers NH', NULL, NULL, 13, NULL, b'0'),
('pro.sh@enkoeducation.com', 'Parents Relation Officer SH', NULL, NULL, 8, NULL, b'0'),
('pta@amazingraceschool.co.za', 'Parents and Teacher A', NULL, NULL, 8, NULL, b'0'),
('purchase@enkoeducation.com', 'Purchase', NULL, NULL, 0, NULL, b'0'),
('reception.jacaranda@enkoeducation.com', 'Reception Jacaranda', NULL, NULL, 1, NULL, b'0'),
('recruit@enkoeducation.com', 'Recruit', NULL, NULL, 1, NULL, b'0'),
('riversidegraduation.2019@enkoschools.com', 'Enko Riverside - 2019', NULL, NULL, 19, NULL, b'0'),
('riverside_mbr_list@enkoeducation.com', 'Riverside MBR List', 'Enko Riverside', 'EVS', 14, NULL, b'0'),
('riviera@enkoeducation.com', 'Enko Riviera', 'Enko Riviera', 'ERV', 6, NULL, b'0'),
('sandton@enkoeducation.com', 'Enko Sandton', NULL, NULL, 3, NULL, b'0'),
('schoolopsleadership@enkoeducation.com', 'School Ops Leadership', NULL, NULL, 10, NULL, b'0'),
('scorecard@enkoeducation.com', 'Scorecard', NULL, NULL, 2, NULL, b'0'),
('secondary.ouaga@enkoeducation.com', 'Secondary Ouaga', 'Enko Ouaga', 'EOG', 20, NULL, b'0'),
('sekeleka_mbr_list@enkoeducation.com', 'Sekeleka MBR List', 'Enko Sekeleka', 'ESC', 11, NULL, b'0'),
('senate.ouaga@enkoeducation.com', 'Senate', NULL, NULL, 9, NULL, b'0'),
('sh-hos@enkoeducation.com', 'Southern Hemisphere HoS', NULL, NULL, 8, NULL, b'0'),
('sh.schoolops@enkoeducation.com', 'SH School Operations', NULL, NULL, 7, NULL, b'0'),
('staff.agps@enkoeducation.com', 'All Staff AGPS', 'Amazing Grace Private School', 'AGP', 36, 'All Staff', b'1'),
('staff.bonanjo@enkoeducation.com', 'All Staff Bonanjo', 'Enko Bonanjo', 'EBC', 35, 'All Staff', b'1'),
('staff.botho@enkoeducation.com', 'All Staff Botho', 'Enko Botho', 'EBT', 36, 'All Staff', b'1'),
('staff.jacaranda@enkoeducation.com', 'All Staff Jacaranda Academy', 'Jacaranda Academy', 'EJA', 14, 'All Staff', b'1'),
('staff.keurgorgui@enkoeducation.com', 'Staff Keur Gorgui', 'Enko Keur Gorgui', 'EKG', 52, 'All Staff', b'1'),
('staff.lgprimary@enkoeducation.com', 'All Staff Enko La Gaieté Primary School', 'Enko La Gaiete', 'EGC', 24, 'All Staff', b'1'),
('staff.lgsecondary@enkoeducation.com', 'All Staff Enko La Gaieté Secondary School', 'Enko La Gaiete', 'EGC', 27, 'All Staff', b'1'),
('staff.riverside@enkoeducation.com', 'Staff Enko Riverside', 'Enko Riverside', 'EVS', 37, 'All Staff', b'1'),
('staff.riviera@enkoeducation.com', 'All Staff Riviera', 'Enko Riviera', 'ERV', 75, 'All Staff', b'1'),
('staff.sekeleka@enkoeducation.com', 'All Staff Sekeleka', 'Enko Sekeleka', 'ESC', 48, 'All Staff', b'1'),
('staff.waca@enkoeducation.com', 'All Staff Enko WACA', 'Enko Waca', 'EWC', 72, 'All Staff', b'1'),
('studentlife.agps@enkoeducation.com', 'studentlife agps', NULL, NULL, 2, NULL, b'0'),
('studentlife.ebot@enkoeducation.com', 'studentlife ebot', NULL, NULL, 1, NULL, b'0'),
('studentlife.eris@enkoeducation.com', 'studentlife eris', NULL, NULL, 2, NULL, b'0'),
('studentlife.pec@enkoeducation.com', 'studentlife pec', NULL, NULL, 2, NULL, b'0'),
('studentlifejac@enkoeducation.com', 'student life jacaranda', NULL, NULL, 2, NULL, b'0'),
('studentrecruitment@enkoeducation.com', 'Student Recruitment', NULL, NULL, 1, NULL, b'0'),
('suppliers@enkoeducation.com', 'Suppliers Enko Education', NULL, NULL, 1, NULL, b'0'),
('survey.enko@enkoeducation.com', 'survey', NULL, NULL, 4, NULL, b'0'),
('teachers.bamako@enkoeducation.com', 'Teachers Bamako', 'Enko ouaga', 'EOG', 22, 'Teacher', b'1'),
('teachers.benga@enkoeducation.com', 'Teachers Benga', NULL, NULL, 9, NULL, b'0'),
('teachers.bonanjo@enkoeducation.com', 'Teachers Bonanjo', 'Enko bonanjo', 'EBC', 24, 'Teacher', b'1'),
('teachers.botho@enkoeducation.com', 'Teachers Botho', 'Enko Botho', 'EBT', 27, 'Teacher', b'1'),
('teachers.jacaranda@enkoeducation.com', 'Teachers Jacaranda Academy', 'Jacaranda Academy', 'EJA', 6, NULL, b'0'),
('teachers.johnwesley@enkoeducation.com', 'Teachers John Wesley', NULL, NULL, 5, 'Teacher', b'1'),
('teachers.keurgorgui@enkoeducation.com', 'Teachers Keur Gorgui', 'Enko Keur Gorgui', 'EKG', 35, 'Teacher', b'1'),
('teachers.lagaiete@enkoeducation.com', 'Teachers La Gaieté', 'Enko La Gaite', 'EOG', 44, 'Teacher', b'1'),
('teachers.ouaga@enkoeducation.com', 'Teachers Enko Ouaga', 'Enko Ouaga', 'EOG', 28, 'Teacher', b'1'),
('teachers.pestalozzi@enkoeducation.com', 'Teachers Pestalozzi', 'Pestalozzi Education Center', 'PED', 70, 'Teacher', b'1'),
('teachers.riverside@enkoeducation.com', 'Teachers Riverside', 'Enko Riverside', 'EVS', 22, 'Teacher', b'1'),
('teachers.riviera@enkoeducation.com', 'Teachers Riviera', 'Enko Riviera', 'ERV', 49, 'Teacher', b'1'),
('teachers.sandton@enkoeducation.com', 'Teachers Sandton', 'Enko Sandton', NULL, 12, NULL, b'0'),
('teachers.sekeleka@enkoeducation.com', 'Teachers Sekeleka', 'Enko Sekeleka', 'ESC', 39, 'Teacher', b'1'),
('teachers.waca@enkoeducation.com', 'Teachers WACA', 'Enko Waca', 'EWC', 47, 'Teacher', b'1'),
('teachers@amazingraceschool.co.za', 'AGPS Teachers', 'Amazing Grace Private School', 'AGP', 28, 'Teacher', b'1'),
('team.bonanjo@enkoeducation.com', 'Team Bonanjo', NULL, NULL, 11, NULL, b'0'),
('team.dakar@enkoeducation.com', 'Team Dakar', NULL, NULL, 23, NULL, b'0'),
('team.johnwesley@enkoeducation.com', 'Team John Wesley', NULL, NULL, 7, NULL, b'0'),
('team.lagaiete@enkoeducation.com', 'Team La Gaieté', NULL, NULL, 0, NULL, b'0'),
('team.nyamunda@enkoeducation.com', 'Team Nyamunda', NULL, NULL, 0, NULL, b'0'),
('team.riviera@enkoeducation.com', 'Team Riviera', NULL, NULL, 8, NULL, b'0'),
('team.vilankulo@enkoeducation.com', 'Team Vilankulo', NULL, NULL, 8, NULL, b'0'),
('testmien@enkoeducation.com', 'TEST', NULL, NULL, 1, NULL, b'0'),
('vilankulo@enkoeducation.com', 'Enko Sekeleka', NULL, NULL, 2, NULL, b'0'),
('wa.hos@enkoeducation.com', 'WA HoS', NULL, NULL, 11, NULL, b'0'),
('waca@enkoeducation.com', 'Enko WACA International School', 'Enko Waca', 'EWC', 5, NULL, b'0'),
('whistleblowing@enkoeducation.com', 'Whistleblowing', NULL, NULL, 1, NULL, b'0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Enko_groups`
--
ALTER TABLE `Enko_groups`
  ADD PRIMARY KEY (`mail`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
