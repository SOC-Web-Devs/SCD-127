-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2022 at 01:36 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scd_127`
--

-- --------------------------------------------------------

--
-- Table structure for table `wallet_dta`
--

CREATE TABLE `wallet_dta` (
  `id` int(11) NOT NULL,
  `address` varchar(50) NOT NULL,
  `balance` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wallet_dta`
--

INSERT INTO `wallet_dta` (`id`, `address`, `balance`) VALUES
(27, '0xc9ea92cb3e7636417cd062a7e449cb69045ab07c', '8'),
(28, '1xc9ea92cb3e7636417cd062a7e449cb69045ac07c', '1'),
(29, '2xc9ea92cb3e7636417cd062a8e449cb69045ac07c', '2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wallet_dta`
--
ALTER TABLE `wallet_dta`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wallet_dta`
--
ALTER TABLE `wallet_dta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
