import { render, screen } from "@testing-library/react";
import Navbar from "../../../components/navbar/index";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// test("Test products ref and name", () => {
//   render(
//     <BrowserRouter>
//       <Navbar />
//     </BrowserRouter>
//   );

//   const linkElement = screen.getByText(/Products/i);
//   expect(linkElement).toBeInTheDocument();
//   expect(linkElement).toHaveAttribute("href", "/zee_web/products");
// });

// test("Test contact ref and name", () => {
//   render(
//     <BrowserRouter>
//       <Navbar />
//     </BrowserRouter>
//   );

//   const linkElement = screen.getByText(/Contact/i);
//   expect(linkElement).toBeInTheDocument();
//   expect(linkElement).toHaveAttribute("href", "/zee_web/contact");
// });

// test("Test about ref and name", () => {
//   render(
//     <BrowserRouter>
//       <Navbar />
//     </BrowserRouter>
//   );

//   const linkElement = screen.getByText(/About/i);
//   expect(linkElement).toBeInTheDocument();
//   expect(linkElement).toHaveAttribute("href", "/zee_web/about");
// });

test("Test home ref and name", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "/zee_web");
});
