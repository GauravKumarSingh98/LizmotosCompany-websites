import "./style.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PRD from "../assets/images/PRD.jpg";
import Specs from "../assets/images/Specs.jpg";

const WorkIcon = () => <></>;

export default function Planning() {
  return (
    <>
      <Header />
      <h2 className="text-center font-lead text-6xl p-4 bg-gray-100 ">
        Planning Timeline
      </h2>
      <p className="text-center text-xl p-4 bg-lime-100 ">
        Production program planning is usually done continuously and the
        production <br /> program is split up into daily or weekly order pools
      </p>
      <div className="grid-cols-2 flex p-4 gap-4 bg-gray-100">
        {/* PRD */}
        <div className="App sm:w-[30%] md:w-[50%] col-span-1 mt-[20%]">
          <img
            src={Specs}
            alt="prd"
            className="mb-[60%] ml-5 rounded shadow-xl hover:scale-105 duration-[500ms]"
          />
          <div className="mt-6 font-mono">
            <h2 className="text-4xl mb-4">
              PRD (Product Requirements Document)
            </h2>
          </div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work cursor-pointer shadow-xl hover:scale-105 duration-[500ms] "
              // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2 weeks"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h2 className="font-bold vertical-timeline-element-title">
                Project Plan Development
              </h2>
              <ul>
                <li>Define project scope and objectives</li>
                <li>Create work breakdown structure</li>
                <li>Assign responsibilities</li>
                <li>Develop Gantt chart or project timeline</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work cursor-pointer shadow-xl hover:scale-105 duration-[500ms]"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="3 weeks"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h2 className="font-bold vertical-timeline-element-title">
                Budgeting and Financial Projections
              </h2>
              <ul>
                <li>Estimate costs for each phase</li>
                <li>Allocate resources accordingly</li>
                <li>Develop financial projections</li>
                <li>Set budget constraints</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work cursor-pointer shadow-xl hover:scale-105 duration-[500ms]"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2 Weeks"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h2 className="font-bold vertical-timeline-element-title">
                Risk Assessment and Mitigation
              </h2>
              <ul>
                <li>Identify potential risks</li>
                <li>Assess likelihood and impact</li>
                <li>Develop risk mitigation strategies</li>
                <li>Create contingency plans</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work cursor-pointer shadow-xl hover:scale-105 duration-[500ms]"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="3 Weeks"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h2 className="font-bold vertical-timeline-element-title">
                Technical Requirements Definition{" "}
              </h2>
              <ul>
                <li>Gather input from engineering team</li>
                <li>Define technical specifications</li>
                <li>Establish performance criteria</li>
                <li>Consider regulatory requirements</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work cursor-pointer shadow-xl hover:scale-105 duration-[500ms]"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="4 Weeks"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h2 className="font-bold vertical-timeline-element-title">
                Partnership Establishment{" "}
              </h2>
              <ul>
                <li>Identify potential partners (suppliers, manufacturers)</li>
                <li>Negotiate contracts and agreements</li>
                <li>Establish communication channels</li>
                <li>Clarify roles and responsibilities</li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

        {/* Specs */}

        <div className="App sm:w-[30%] md:w-[50%] col-span-1 ">
          <div className="mt-6 font-mono">
            <h2 className="text-4xl mb-4">Specs (Specifications)</h2>
          </div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work cursor-pointer shadow-xl hover:scale-105 duration-[500ms] "
              // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2 weeks"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h2 className="font-bold vertical-timeline-element-title">
                Hardware Specifications
              </h2>
              <dt>
                Detailed information about the materials, dimensions, and
                performance requirements of the physical components.
              </dt>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work cursor-pointer shadow-xl hover:scale-105 duration-[500ms]"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="3 weeks"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h2 className="font-bold vertical-timeline-element-title">
                Software Specifications
              </h2>
              <dt>
                Detailed information about the software architecture,
                algorithms, and interfaces.
              </dt>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work cursor-pointer shadow-xl hover:scale-105 duration-[500ms]"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2 Weeks"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h2 className="font-bold vertical-timeline-element-title">
                Performance Requirements
              </h2>
              <dt>
                Specific performance criteria that the product must meet, such
                as speed, response time, and reliability.
              </dt>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work cursor-pointer shadow-xl hover:scale-105 duration-[500ms]"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="3 Weeks"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h2 className="font-bold vertical-timeline-element-title">
                Safety Requirements{" "}
              </h2>
              <dt>
                Specific safety requirements that the product must meet, such as
                crash test ratings, electrical safety, and fail-safe mechanisms.
              </dt>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work cursor-pointer shadow-xl hover:scale-105 duration-[500ms]"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="4 Weeks"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h2 className="font-bold vertical-timeline-element-title">
                Testing Requirements{" "}
              </h2>
              <dt>
                A description of the testing process, including test cases, test
                scenarios, and test environments.
              </dt>
            </VerticalTimelineElement>
          </VerticalTimeline>
          <img
            src={PRD}
            alt="prd"
            className="mr-[40px] mt-[70%] rounded shadow-xl hover:scale-105 duration-[500ms] "
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
