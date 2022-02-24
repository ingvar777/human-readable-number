module.exports = function toReadable (number) {
       let temp =
      "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(
         " "
      );
   let ty = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

   if (number < 20) return temp[number];
   if (number < 100)
      return ty[Math.floor(number / 10 - 2)] + (number % 10 ? " " + temp[number % 10] : "");
   if (number < 1000)
      return (
         temp[Math.floor(number / 100)] +
         " hundred" +
         (number % 100 == 0 ? "" : " " + toReadable(number % 100))
      );
  
}
