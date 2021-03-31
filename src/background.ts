import axios from "axios";

chrome.contextMenus.create({
  title: "Copy ephemeral URL",
  contexts: ["image"],
});

const copyText = (text: string) => {
  const input = document.createElement("textarea");
  document.body.appendChild(input);
  input.value = text;
  input.focus();
  input.select();
  document.execCommand("Copy");
  input.remove();
};

const getImage = (info: any) => {
  console.log(info.srcUrl);
  axios
    .post("http://darajava:3000/upload", {
      imageUrl: info.srcUrl,
    })
    .then((url) => {
      setTimeout(() => {
        copyText(url.data);
      }, 100);
    });
};

chrome.contextMenus.onClicked.addListener(getImage);
