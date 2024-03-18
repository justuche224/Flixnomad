/* eslint-disable react/no-unescaped-entities */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold mb-8">Frequently asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Why is the movie not playing</AccordionTrigger>
          <AccordionContent>
            Most movies are using enconding that aren't supported by most native
            video players. You are advised to use an advanced media player like
            VLC or MX player
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Are the movies available for download in high quality?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely. We strive to provide our users with high-quality movie
            downloads in various formats to suit their preferences.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Is there a limit to the number of movies I can download?
          </AccordionTrigger>
          <AccordionContent>
            No, there are no limits on the number of movies you can download
            from our website. Feel free to explore and download as many as you
            like.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Are subtitles available for downloaded movies?
          </AccordionTrigger>
          <AccordionContent>
            Yes, subtitles are available for most of the movies on our website.
            They can be downloaded along with the movie files.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Is there a membership or subscription required to download movies?
          </AccordionTrigger>
          <AccordionContent>
            No, downloading movies from our website is completely free. There
            are no membership or subscription fees involved.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
