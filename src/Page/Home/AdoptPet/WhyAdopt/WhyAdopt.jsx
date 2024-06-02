import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  
  export function WhyAdopt() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Save a Life</AccordionTrigger>
          <AccordionContent>Shelters are often overcrowded. By adopting, you are saving a pet from possible euthanasia and giving them a loving home.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Experience Unconditional Love</AccordionTrigger>
          <AccordionContent>
          Pets bring immense joy and companionship, helping to reduce stress and improve overall well-being.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Support Animal Welfare</AccordionTrigger>
          <AccordionContent>
          Adoption helps combat the unethical breeding practices of puppy mills and supports humane and ethical treatment of animals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Health Benefits</AccordionTrigger>
          <AccordionContent>
          Pets can improve your physical and mental health, providing motivation for exercise and reducing feelings of anxiety and depression.  </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  