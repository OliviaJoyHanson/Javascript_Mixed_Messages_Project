const randomNumber = () => {
    const nums = [1,2,3,4,5]
    const num = nums[Math.floor(Math.random() * nums.length)];
    return num
};
console.log(randomNumber(5));

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

const adLibPhrase = (num) => {
    const ranNum = randomNumber(num);


}