import { Typography } from "@material-tailwind/react";
import logo from '../../assets/logo.png'
import Container from "../utils/Container";
import { Link } from "react-router-dom";

 
export function Footer() {
  return (
    <footer className="w-full bg-white py-2">
      <Container>
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src={logo} alt="logo-ct" className="w-[200px]" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              as="a"
              to="/about"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              as="a"
              to="/shop"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              as="a"
              to="/contact"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <Typography color="gray" className="text-center font-normal">
        2025  copyright
      </Typography>
      </Container>
      
    </footer>
  );
}