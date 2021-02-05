let promise = fetch("coffee.jpg");
let promise2 = promise.then(response => {
  if (!response.ok)
    throw new Error(`HTTP error! ${response.status}`);
  else
    return response.blob();
});

let promise3 = promise2.then(myBlob => {
  let objUrl = URL.createObjectURL(myBlob);
  let image = document.createElement("img");
  image.src = objUrl;
  document.appendChild(image);
});
