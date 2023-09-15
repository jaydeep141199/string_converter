
function convertString() {
  const input = document.getElementById("value").value;
  let finalstring = "";

  // Convert input to an array
  const inputArray = Array.from(input);

  inputArray.map((items) => {
    if (items === items.toUpperCase()) {
      finalstring += items.toLowerCase();
    } else {
      finalstring += items.toUpperCase();
    }
  });

  const words = finalstring.split(" ");
  let finalstr = "";
  // console.log("jaydeep", words);

  words.map((data) => {
    const pattern = /\d[A-Za-z]+\d/g;
    const word = data.match(pattern);
    const newstrArry = data.split(word);
    let newword = "";

    if (word !== null) {
      newword = word.toString();
    }

    if (newword.length > 1) {
      newword =
        newword[newword.length - 1] + newword.substring(1, newword.length - 1)+newword[0];
      newstrArry.splice(1, 0, newword);
      newstrArry.toString();
      let changedWord = newstrArry.join("");
      data = changedWord;
    }
    finalstr += data + " ";
  });

  document.getElementById("output").innerHTML = finalstr;
}
