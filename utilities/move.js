export default function move(input, from, to) {
  let numberOfDeletedElm = 1;

  const elm = input.splice(from, numberOfDeletedElm)[0];
  console.log("elm", elm);
  numberOfDeletedElm = 0;

  input.splice(to, numberOfDeletedElm, elm);

  return input;
}
