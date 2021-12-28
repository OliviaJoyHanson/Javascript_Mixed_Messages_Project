const randomNumber = () => {
    const nums = [1,2,3,4,5]
    const num = nums[Math.floor(Math.random() * nums.length)];
    return num
};

const words = {
    nouns : ["car", "dog", "cat", "human", "cup", "fish"],
    adverbs : ["freakishly", "stupidly", "voraciously", "gloriously", "shyly"],
    verbs : ["ran", "spun", "punched", "climbed", "ate"]
};

const phrases = [
    "The noun verb, adverb, over the moon.",
    "Did you see how he verb, adverb, into the noun?",
    "What the noun?! They adverb verb into the barn!",
    "I just watched as the noun adverb verb that thing.",
    "He said he was at the market when, very adverb, a noun verb a vendor."
];

const adLibPhrase = () => {
    // const ranNum = randomNumber();
    
    const noun = words.nouns[randomNumber()];
    const adverb = words.adverbs[randomNumber()];
    const verb = words.verbs[randomNumber()];

    var phrase = phrases[randomNumber()];
    var splitPhrase = phrase.split(",");

    // if splitPhrase.includes(w => "noun")
    // if (splitPhrase.map(w => w === "noun")) {
    //     splitPhrase[splitPhrase.indexOf("noun")] = noun;
    // } else if (splitPhrase.map(w => w === "adverb")) {
    //     splitPhrase[splitPhrase.indexOf("adverb")] = adverb;
    // } else if (splitPhrase.map(w => w === "verb")) {
    //     splitPhrase[splitPhrase.indexOf("verb")] = verb;
    // }

    splitPhrase.map(w => {
        if (w === "noun") {
            splitPhrase[splitPhrase.indexOf("noun")] = noun;
        } else if (w === "adverb") {
            splitPhrase[splitPhrase.indexOf("adverb")] = adverb;
        } else if (w === "verb"){
            splitPhrase[splitPhrase.indexOf("verb")] = verb;
        }
    })

    console.log(splitPhrase)
}

adLibPhrase();
