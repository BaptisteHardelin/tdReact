let quotes = [
  { id: 1, text: "Elementary, my dear Watson ", author: "Sherlock Holmes" },
  { id: 2, text: "Big Brother is watching you", author: "Georges Orwell" },
  { id: 3, text: "I think therefore I am", author: "Rene Descartes" },
  { id: 4, text: "You talkinâ€™ to me?", author: "Travis Bickle" },
];

const deleteQuote = (id, quotesArr, setQuotesArr, setCanDelete) => {
  // Tant qu'on plus d'une citation alors on peut les supprimer
  if (quotesArr.length > 1) {
    const newQuotes = quotesArr.filter((quote) => quote.id !== id);
    setQuotesArr(newQuotes);
  } else {
    // Empêche l'apprition d'une erreur dans la console comme quoi setCanDelete n'est pas une fonction
    if (setCanDelete) setCanDelete(false);
  }
};

export { quotes, deleteQuote };
