import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

export function Faq() {
  return (
    <div className="flex justify-center items-center">
      <Accordion type="single" collapsible className="w-full max-w-3xl space-y-2 p-8 rounded-xl shadow-lg">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[#ff6b6b] text-5xl font-bold">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="text-slate-100 text-3xl mt-4">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-[#ff6b6b] text-5xl font-bold">
            Is it styled?
          </AccordionTrigger>
          <AccordionContent className="text-slate-100 text-3xl mt-4">
            Yes. It comes with default styles that match the other components aesthetic.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-[#ff6b6b] text-5xl font-bold">
            Is it animated?
          </AccordionTrigger>
          <AccordionContent className="text-slate-100 text-3xl mt-4">
            Yes. Its animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
