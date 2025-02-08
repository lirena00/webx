import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Faq() {
  return (
    <div className="flex items-center justify-center">
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-3xl space-y-2 rounded-xl p-8 shadow-lg"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-italic font-serif text-4xl font-bold text-[#ff6b6b]">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="mt-4 text-3xl text-slate-100">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-italic font-serif text-4xl font-bold text-[#ff6b6b]">
            Is it styled?
          </AccordionTrigger>
          <AccordionContent className="mt-4 text-3xl text-slate-100">
            Yes. It comes with default styles that match the other components
            aesthetic.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-italic font-serif text-4xl font-bold text-[#ff6b6b]">
            Is it animated?
          </AccordionTrigger>
          <AccordionContent className="mt-4 text-3xl text-slate-100">
            Yes. Its animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
