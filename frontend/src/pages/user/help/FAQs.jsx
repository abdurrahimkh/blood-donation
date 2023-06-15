import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { useState, Fragment } from "react";

function Icon({ id, open }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function FAQs() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="text-md font-brooklyn" onClick={() => handleOpen(1)}>
          What is blood donation?
        </AccordionHeader>
        <AccordionBody>Blood donation means giving blood to be used in saving the lives of others.</AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader className="text-md font-brooklyn" onClick={() => handleOpen(2)}>
          Why should one donate blood?
        </AccordionHeader>
        <AccordionBody>There is no artificial blood for sale. Blood must therefore be donated freely by somebody out of love for life.</AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader className="text-md font-brooklyn" onClick={() => handleOpen(3)}>
          What is the age range for donating blood?
        </AccordionHeader>
        <AccordionBody>You can donate blood if you are between the ages of 17 and 60 years.</AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader className="text-md font-brooklyn" onClick={() => handleOpen(4)}>
          One loses some blood through donation. Will this not affect one’s day-to-day activities?
        </AccordionHeader>
        <AccordionBody>No. The volume of blood that you donate is just a little less than one water sachet (450mls). In about a day, the body makes up the amount of blood lost. With regards to the blood cells in the body it takes 4-8 weeks for complete replacement.</AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader className="text-md font-brooklyn" onClick={() => handleOpen(5)}>
          Will I feel fine after donation?
        </AccordionHeader>
        <AccordionBody>Yes. After the donation you will be given refreshment whilst relaxing. You can then go back to your normal activities</AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader className="text-md font-brooklyn" onClick={() => handleOpen(6)}>
          Will the blood donation make me weak?
        </AccordionHeader>
        <AccordionBody>Blood donation does not affect sexuality. Blood donation does not affect the way you work. You must not however perform activities that will make you sweat on the day of donation.</AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader className="text-md font-brooklyn" onClick={() => handleOpen(7)}>
          How soon can one return to work?
        </AccordionHeader>
        <AccordionBody>You can go back to work or school on the same day except when taking part in any vigorous activity such as climbing, driving a heavy vehicle or working at hazardous depths or heights.</AccordionBody>
      </Accordion>
    </Fragment>
  );
}
