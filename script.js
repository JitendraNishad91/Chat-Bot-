let prompt = document.getElementById("prompt");
let submit= document.getElementById("submit");

let chatcontainer = document.querySelector(".chat_container");

// file input + upload button
let imageInput = document.getElementById("fileInput"); // your hidden input
let imageButton = document.getElementById("image");
let image = document.querySelector("#image img"); // img inside label

    // the <label>

const API_url =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyCN3ODLy6NcKJTc3qPVugcfuaJA-XgTo2g";

let user = {
  message: null,
  file:{
    mime_type :null, 
            data: null 
  }
}

async function generateResponse(aichatbox) {
  let aiArea = aichatbox.querySelector(".ai_chat_area");

  let RequestOptions = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          "parts": [{"text": user.message},(user.file.data?[{"inline_data" : user.file}]:[])
        ]
        } ]
    })
  }

  try {
    let response = await fetch(API_url, RequestOptions);
    let data = await response.json();
    console.log(data);

    let apiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text
      ?.replace(/\*\*(.*?)\*\*/g, "$1")
      .trim();

    aiArea.innerHTML = apiResponse || "No response";
  } catch (error) {
    console.log(error);
    aiArea.innerHTML = "⚠️ Error fetching response.";
  } finally {
    chatcontainer.scrollTo({ top: chatcontainer.scrollHeight, behavior: "smooth" });
    image.src = `img.svg`;
    image.classList.remove("choosed");
    user.file = {};
  }
}

function createchatbox(html, classes) {
  let div = document.createElement("div");
  div.innerHTML = html;
  div.classList.add(classes);
  return div;
}

function handlechatresponse(message) {
  user.message = message;
  let html = `
    <div class="user_chat_box">
      <img src="user image.png" alt="" id="userImage" width="10%">
      <div class="user_chat_area">
        ${user.message}
        ${user.file.data?`<img src="data:${user.file.mime_type};base64,${user.file.data}" class= "chooseimg" />`:""}
             </div>
    </div>`;
  
  prompt.value = "";
  let userchatbox = createchatbox(html, "user_chat_box");
  chatcontainer.appendChild(userchatbox);
  chatcontainer.scrollTo({ top: chatcontainer.scrollHeight, behavior: "smooth" });

  setTimeout(() => {
    let html = `
      <div class="ai_chat_box">
        <img src="ai image new.png" alt="" id="aiImage" width="6%">
        <div class="ai_chat_area">
          <img src="Sandy Loading.gif" alt="loading" class="load" width="40px">
        </div>
      </div>`;
    let aichatbox = createchatbox(html, "ai_chat_box");
    chatcontainer.appendChild(aichatbox);
    chatcontainer.scrollTo({ top: chatcontainer.scrollHeight, behavior: "smooth" });

    generateResponse(aichatbox);
  }, 600);
}

prompt.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && prompt.value.trim() !== "") {
    handlechatresponse(prompt.value);
  }
});

submit.addEventListener("click", ()=>{
    handlechatresponse(prompt.value);
  });

// File input listener
imageInput.addEventListener("change", (e) => {
  const file = imageInput.files[0];
  if (!file) return;
  let reader = new FileReader();
  reader.onload = (e) => {
    let base64string = e.target.result.split(",")[1];
    user.file = {
      mime_type: file.type,
      data: base64string
    };
    image.src = `data:${user.file.mime_type};base64,${user.file.data}`;
    image.classList.add("choosed")
  };
  reader.readAsDataURL(file);
});

imageButton.addEventListener("click", () => {
  imageInput.click();
});

