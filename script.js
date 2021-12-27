const randomNumber = () => {
    const nums = [1,2,3,4,5]
    const num = nums[Math.floor(Math.random() * nums.length)];
    return num
};

const words = {
    nouns: ["car", "dog", "cat", "human", "cup", "fish"],
    adverbs: ["freakishly", "stupidly", "voraciously", "gloriously", "shyly"],
    verbs: ["ran", "spun", "punched", "climbed", "ate"]
};

const phrases = [
    "The noun verb, adverb, over the moon.",
    "Did you see how he verb, adverb, into the noun?",
    "What the noun?! They adverb verb into the barn!"
];

const adLibPhrase = () => {
    const ranNum = randomNumber();
    
    const noun = words[nouns[randomNumber()]];
    const adverb = words[abverbs[randomNumber()]];
    const verb = words[verbs[randomNumber()]];

    const phrase = phrases[ranNum];

    const splitPhrase = phrase.split(" ");
    console.log(splitPhrase);
}

adLibPhrase();