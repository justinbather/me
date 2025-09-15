export interface Quote {
  author: string
  quote: string
}

export const quotes: Quote[] = [
  {
    author: 'Kanye West',
    quote: "For me to say I wasn't a genius I'd just be lying to you and myself",
  },
  {
    author: 'Kanye West',
    quote: "I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle",
  },
  {
    author: 'Kanye West',
    quote:
      "I wish I could run across a beach into my own arms",
  },
  {
    author: 'Kanye West',
    quote: 'I need a room full of mirrors so I can be surrounded by winners',
  },
  {
    author: 'Kanye West',
    quote:
      "Sometimes I get emotional over fonts",
  },
]

export function getRandomQuote(): Quote {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex]
}
