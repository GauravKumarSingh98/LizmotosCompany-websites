import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Sales() {
  return (
    <div>
      <Header />
      <h1 className="text-center font-lead text-6xl p-4 bg-gray-100">Sales</h1>
      <p className="text-center text-xl p-4 bg-lime-100 ">
        By following this sales and marketing timeline for both online and
        dealership channels, <br />
        the car manufacturer can effectively generate buzz, attract customers,
        and drive sales for the new vehicle, maximizing <br /> its market
        potential and ensuring a successful product launch and adoption
      </p>

      <div className="p-[2rem] bg-gray-100">
        <div className="">
          <h1 className="text-4xl pl-4 pb-4 text-center bg-[#0284c7] text-white m-4">
            Online
          </h1>
          {/* <img src={Online} alt="material" className="rounded w-[200px] object-fill h-48 w-96 shadow-md" /> */}
        </div>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1 className="font-bold text-2xl ">
              Pre-Launch Phase (Weeks 1-4)
            </h1>
          </AccordionSummary>
          <AccordionDetails className="flex rounded m-6">
            <ul className="text-xl text-lead ">
              <li className="mb-4">
                • Develop a comprehensive digital marketing strategy, including
                website development, social media planning, and content
                creation.
              </li>
              <li className="mb-4">
                • Build anticipation through teaser campaigns, sneak peeks, and
                countdowns on social media platforms.
              </li>
              <li className="mb-4">
                • Launch a pre-registration or early access campaign on the
                website to capture leads and build a database of interested
                customers.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1 className="font-bold text-2xl "> Launch Phase (Weeks 5-8) </h1>
          </AccordionSummary>
          <AccordionDetails className="flex rounded m-6">
            <ul className="text-xl text-lead ">
              <li className="mb-4">
                • Officially launch the new vehicle on the company website and
                across social media channels.
              </li>
              <li className="mb-4">
                • Roll out targeted online advertising campaigns, including
                search engine marketing (SEM), display ads, and social media
                sponsored posts.
              </li>
              <li className="mb-4">
                • Implement a customer engagement strategy, such as live Q&A
                sessions, interactive demos, and virtual test drives.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1 className="font-bold text-2xl ">
              {" "}
              Post-Launch Phase (Weeks 9-12){" "}
            </h1>
          </AccordionSummary>
          <AccordionDetails className="flex rounded m-6">
            <ul className="text-xl text-lead ">
              <li className="mb-4">
                • Continue to engage with customers online through social media
                updates, blog posts, and email newsletters.
              </li>
              <li className="mb-4">
                • Launch targeted remarketing campaigns to re-engage website
                visitors who showed interest but did not make a purchase.
              </li>
              <li className="mb-4">
                • Collect and analyze customer feedback to identify areas for
                improvement and inform future marketing efforts.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1 className="font-bold text-2xl ">
              {" "}
              Ongoing Marketing Activities (Weeks 13+){" "}
            </h1>
          </AccordionSummary>
          <AccordionDetails className="flex rounded m-6">
            <ul className="text-xl text-lead ">
              <li className="mb-4">
                • Maintain an active online presence with regular updates,
                including new product features, customer testimonials, and
                behind-the-scenes content.
              </li>
              <li className="mb-4">
                • Implement a content marketing strategy to establish the brand
                as a thought leader in the automotive industry, with blog posts,
                videos, and infographics.
              </li>
              <li className="mb-4">
                • Monitor online reviews and ratings on third-party platforms,
                responding promptly to customer feedback and addressing any
                issues or concerns.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* Dealership */}

        <div className="">
          <h1 className="text-4xl pl-4 pb-4 text-center bg-[#0284c7] text-white m-4">
            Dealership
          </h1>
          {/* <img src={Online} alt="material" className="rounded w-[200px] object-fill h-48 w-96 shadow-md" /> */}
        </div>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1 className="font-bold text-2xl ">
              Pre-Launch Phase (Weeks 1-4)
            </h1>
          </AccordionSummary>
          <AccordionDetails className="flex rounded m-6">
            <ul className="text-xl text-lead ">
              <li className="mb-4">
                • Train dealership staff on product features, specifications,
                and sales techniques.
              </li>
              <li className="mb-4">
                • Prepare dealership showrooms with promotional materials,
                signage, and demo vehicles.
              </li>
              <li className="mb-4">
                • Host exclusive preview events for existing customers, VIPs,
                and local community members to generate excitement.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1 className="font-bold text-2xl "> Launch Phase (Weeks 5-8) </h1>
          </AccordionSummary>
          <AccordionDetails className="flex rounded m-6">
            <ul className="text-xl text-lead ">
              <li className="mb-4">
                • Host launch events at dealership locations, featuring test
                drives, product demonstrations, and special promotions.
              </li>
              <li className="mb-4">
                • Offer exclusive incentives or discounts for customers who
                attend the launch events or make early reservations.
              </li>
              <li className="mb-4">
                • Collaborate with local media outlets to generate press
                coverage and publicity for the vehicle launch.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1 className="font-bold text-2xl ">
              {" "}
              Post-Launch Phase (Weeks 9-12){" "}
            </h1>
          </AccordionSummary>
          <AccordionDetails className="flex rounded m-6">
            <ul className="text-xl text-lead ">
              <li className="mb-4">
                • Follow up with leads generated during the launch phase through
                personalized emails, phone calls, and showroom visits.
              </li>
              <li className="mb-4">
                • Offer incentives for test drives and vehicle reservations,
                such as complimentary accessories or extended warranties.
              </li>
              <li className="mb-4">
                • Organize customer appreciation events at dealership locations
                to thank early adopters and encourage repeat business.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1 className="font-bold text-2xl ">
              {" "}
              Ongoing Marketing Activities (Weeks 13+){" "}
            </h1>
          </AccordionSummary>
          <AccordionDetails className="flex rounded m-6">
            <ul className="text-xl text-lead ">
              <li className="mb-4">
                • Provide ongoing training and support for dealership staff to
                ensure product knowledge and customer service excellence.
              </li>
              <li className="mb-4">
                • Implement loyalty programs and referral incentives to
                encourage existing customers to refer friends and family to the
                dealership.
              </li>
              <li className="mb-4">
                • Participate in community events, sponsorships, and
                partnerships to raise brand awareness and drive foot traffic to
                dealership locations.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>

      <Footer />
    </div>
  );
}
