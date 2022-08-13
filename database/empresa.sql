-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-08-2022 a las 23:39:53
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empresa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `idClientes` int(11) NOT NULL,
  `NombreCliente` varchar(128) DEFAULT NULL,
  `ApellidoCliente` varchar(128) DEFAULT NULL,
  `FechaNacCliente` date NOT NULL,
  `PesoCliente` float DEFAULT NULL,
  `AlturaCliente` float DEFAULT NULL,
  `DomicilioCliente` varchar(128) DEFAULT NULL,
  `CodPostal` int(11) DEFAULT NULL,
  `Movil01Cliente` bigint(11) DEFAULT NULL,
  `Movil02Cliente` bigint(11) DEFAULT NULL,
  `EmailCliente` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`idClientes`, `NombreCliente`, `ApellidoCliente`, `FechaNacCliente`, `PesoCliente`, `AlturaCliente`, `DomicilioCliente`, `CodPostal`, `Movil01Cliente`, `Movil02Cliente`, `EmailCliente`) VALUES
(1, 'Lucas', 'Forchino', '1979-01-24', 95.5, 1.8, 'Jujuy 1234', 7600, 2236121212, NULL, 'lucas@gmail.com'),
(2, 'Jorge', 'Solis', '1945-10-01', 78.2, 1.8, 'Almafuerte 321', 8000, 2291614593, 2291614593, 'j@hotmail.com'),
(3, 'Javier', 'Fernandez', '1975-09-02', 90, 1.77, 'Av. Paso 100', 7600, 2235444444, 2235444445, 'javier@gmail.com'),
(23, 'Jorge', 'Solisa', '1982-01-01', 100, 1.8, 'Av. Colon 4444', 7600, 22351666666, 22351666667, 'sol@gmail.com'),
(35, 'Juan', 'Mercado', '1964-02-02', 89.6, 1.77, 'Av. Independeica 720', 7600, 2236166744, 2236166745, 'mercado@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`idClientes`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `idClientes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
