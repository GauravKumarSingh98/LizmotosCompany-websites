import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Materials from "../assets/images/Materials.jpg";
import Production from "../assets/images/Production.jpg";

export default function Manufacturing() {
  return (
    <div>
      <Header />
      <h1 className="text-center font-lead text-6xl p-4 bg-gray-100">
        Manufacturing
      </h1>
      <p className="text-center text-xl p-4 bg-lime-100 ">
        By carefully selecting materials and employing advanced production
        processes,
        <br /> car manufacturers can produce vehicles that meet or exceed
        customer expectations for performance, safety, comfort, and reliability{" "}
        <br />
        while optimizing manufacturing efficiency and cost-effectiveness.{" "}
      </p>
      <div className="p-[2rem] bg-gray-100">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1 className="font-bold text-4xl ">Material</h1>
          </AccordionSummary>
          <AccordionDetails className="flex justify-evenly rounded m-6">
            <img
              src={Materials}
              alt="material"
              className="rounded w-[200px] object-fill h-48 w-96 shadow-md"
            />
            <ul className="text-xl text-lead ">
              <li className="mb-4">• Steel and Aluminum</li>
              <li className="mb-4">• Plastics and Composites</li>
              <li className="mb-4">• Glass</li>
              <li className="mb-4">• Rubber and Elastomers</li>
              <li className="mb-4">• Electronics and Wiring</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1 className="font-bold text-4xl ">Production Process</h1>
          </AccordionSummary>
          <AccordionDetails className="flex justify-evenly rounded m-6">
            <img
              src={Production}
              alt="material"
              className="rounded w-[200px] object-fill h-48 w-96"
            />
            <ul className="text-xl text-lead">
              <li className="mb-4">• Stamping and Forming</li>
              <li className="mb-4">• Welding and Joining</li>
              <li className="mb-4">• Casting and Molding</li>
              <li className="mb-4">• Machining and Finishing</li>
              <li className="mb-4">• Assembly and Testing</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>

      <Footer />
    </div>
  );
}
