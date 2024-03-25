import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Hardware from "../assets/images/HardWare.jpg";
import Software from "../assets/images/Software.jpg";

export default function Design() {
  return (
    <div>
      <Header />
      <h2 className="text-center font-lead text-6xl p-4 bg-gray-100 ">
        Design
      </h2>
      <p className="text-center text-xl p-4 bg-lime-100 ">
        Automotive design is the process of developing the appearance of motor
        vehicles
      </p>
      <div className="grid-cols-4 flex justify-between bg-gray-100 pt-10">
        <div className="max-w-[1240px]  m-[2rem] ml-[6rem] p-4  col-span-2 shadow-xl hover:scale-105 duration-[500ms]">
          <Card style={{ width: "35rem" }} className="justify-items-center">
            <Card.Img variant="top" src={Hardware} className="rounded" />
            <Card.Body>
              <Card.Title className="font-bold m-2 text-4xl">
                Hardware
              </Card.Title>
              <Card.Text className="pl-2">
                In the context of car manufacturing, hardware refers to the
                physical components, equipment, and machinery used in various
                stages
                <br /> of the production process. These hardware elements are
                essential <br />
                for fabricating, assembling, and quality testing vehicles.
              </Card.Text>
              <Button className="bg-green-600 rounded mt-5 ml-2 text-xl text-white p-1">
                Click here
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="max-w-[1240px] mr-[6rem] m-[2rem] p-4  col-span-2 shadow-xl hover:scale-105 duration-[500ms]">
          <Card style={{ width: "35rem" }} className="">
            <Card.Img variant="top" src={Software} className="rounded" />
            <Card.Body>
              <Card.Title className="font-bold m-2 text-4xl">
                Software
              </Card.Title>
              <Card.Text className="pl-2">
                In the realm of car manufacturing, software plays a crucial<br/> role
                in various aspects, ranging from design and engineering to
                production and quality control.
              </Card.Text>
              <Button className="bg-green-600 rounded mt-5 ml-2 text-xl text-white p-1">
                Click here
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
