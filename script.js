// method to generate a random index number to grab from arrays later on
const randomNumber = () => {
    const nums = [0,1,2,3,4]
    const num = nums[Math.floor(Math.random() * nums.length)];
    return num
};

// word-type arrays to be randomly chosen from to replace placeholders when phrase is chosen
const words = {
    nouns : ["car", "dog", "cat", "human", "cup", "fish"],
    adverbs : ["freakishly", "stupidly", "voraciously", "gloriously", "shyly"],
    verbs : ["ran", "spun", "punched", "climbed", "ate"]
};

// array of phrases with placeholders so that when we parse, we can match with the placeholder and replace with randomly chosen word from its word-type array
const phrases = [
    "The noun verb, adverb, over the moon.",
    "Did you see how he verb, adverb, into the noun?",
    "What the noun?! They adverb verb into the barn!",
    "I just watched as the noun adverb verb that thing.",
    "He said he was at the market when, very adverb, a noun verb a vendor."
];

// This method uses the randomNumber method to grab random words from each word-type array, as well as a phrase from the phrases array 
// then splits the phrase so that it can be iterated through and can find and replace the placeholders with the randomly chosen words.
// then it joins the phrase back together to complete the randomly generated ad lib. 
const adLibPhrase = () => {

    const noun = words.nouns[randomNumber()];
    const adverb = words.adverbs[randomNumber()];
    const verb = words.verbs[randomNumber()];

    var phrase = phrases[randomNumber()];
    var splitPhrase = phrase.split(/([\W+])/);

    splitPhrase.forEach(w => {
        if (w === "noun") {
            splitPhrase[splitPhrase.indexOf("noun")] = noun;
        } else if (w === "adverb") {
            splitPhrase[splitPhrase.indexOf("adverb")] = adverb;
        } else if (w === "verb"){
            splitPhrase[splitPhrase.indexOf("verb")] = verb;
        }
    });

    const result = splitPhrase.join("");
    console.log(result);
}

adLibPhrase();
