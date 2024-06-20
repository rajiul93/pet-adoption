import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const HowAdopt = () => {
    return (
        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Visit Our Pet List page</AccordionTrigger>
          <AccordionContent>
          tart by visiting local animal shelters or rescue groups. Spend time with different pets to find one that fits your lifestyle and personality.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Ask Questions</AccordionTrigger>
          <AccordionContent>
          The shelter staff knows their animals well. Don’t hesitate to ask about the pet’s history, temperament, and special needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Prepare Your Home</AccordionTrigger>
          <AccordionContent>
          Before bringing your new pet home, make sure you have the necessary supplies, such as food, a bed, toys, and grooming tools. Pet-proof your home to ensure a safe environment.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Adoption Process</AccordionTrigger>
          <AccordionContent>Each organization has its own adoption process, which may include an application, interview, and home visit. Be patient, as these steps are in place to ensure the best match for both you and the pet.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
};

export default HowAdopt;