import Reveal from "./Reveal";

export default function QuoteBlock({
  quote,
  author,
  delay = 0,
}: {
  quote: string;
  author: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <figure className="quote-block">
        <blockquote className="quote-text">{quote}</blockquote>
        <figcaption className="quote-author">{author}</figcaption>
      </figure>
    </Reveal>
  );
}
