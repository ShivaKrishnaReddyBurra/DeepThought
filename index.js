
const tasks = [
    {
      "task_id": 18882,
      "task_title": "Explore the world of management",
      "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
      "status": "notworkyet",
      "assets": [
        {
          "asset_id": 18883,
          "asset_title": "Technical Project Management",
          "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
          "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
          "asset_type": "display_asset",
          "asset_content_type": "video"
        },
        {
          "asset_id": 18884,
          "asset_title": "Threadbuild",
          "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
          "asset_content": " ",
          "asset_type": "input_asset",
          "asset_content_type": "threadbuilder"
        },
        {
          "asset_id": 18885,
          "asset_title": "Structure you pointers ",
          "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
          "asset_content": " ",
          "asset_type": "input_asset",
          "asset_content_type": "article"
        },
        {
          "asset_id": 18886,
          "asset_title": "4SA Method",
          "asset_description": "To explore more read more",
          "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
          "asset_type": "display_asset",
          "asset_content_type": "article"
        }
      ]
    }
  ];

  function display()
  {
      document.getElementById("show").classList.toggle("show");
      if (document.getElementById("show").classList.contains("show"))
          {
              document.getElementById("changeicon").src="images/larrow.svg";
              document.getElementById("text").innerHTML="Journey Board";
          }
      else
      {
           document.getElementById("changeicon").src="images/rarrow.svg";
              document.getElementById("text").innerHTML="";
      }
  }

tasks.forEach(element => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("textbox");
    taskDiv.innerHTML = `
                <h1>${element.task_title}</h1>
                <p>${element.task_description}</p>
    `;
    document.getElementById("task").appendChild(taskDiv);
    element.assets.forEach(asset => {
        const assetDiv = document.createElement("div");
        assetDiv.classList.add("asset");
        assetDiv.innerHTML=`
            <div class="asset-title">
            <h2>${asset.asset_title}</h2>
            <img class="icon"  src="./images/discription.svg" alt="discription">
            </div>
            <p><span>Description: </span>${asset.asset_description}</p>
        `;
        // Add more code here to handle different asset types
        if(asset.asset_content_type === "video")
        {
            const video = document.createElement("iframe");
            video.src = asset.asset_content;
            video.width = "100%";
            video.height = "291px";
            assetDiv.appendChild(video);
        }
        else if(asset.asset_content_type === "threadbuilder")
        {
            const threadBuilder = document.createElement("div");
            threadBuilder.classList.add("thread-builder");
            threadBuilder.innerHTML = `
               <div class="thread-title">
                    <img src="./images/vector.svg" alt="thread">
                    <h2>Thread A</h2>
                </div>
                <div class="sub-thread-container">
                    <div class="sub-thread">
                        <h4>Sub Thread 1</h4>
                        <textarea placeholder="Enter Text here"></textarea>
                    </div>
                    <div class="sub-thread">
                        <h4>Sub Thread 2</h4>
                        <textarea placeholder="Enter Text here"></textarea>
                    </div>
                </div>
                <div class="thread-selection">
                    <img src="./images/thread.svg" alt="menu">
                    <select>
                       
                        <option> Select Catgory</option>
                        <option value="thread">Thread B</option>
                    </select>
                    <select>
                        <option value="sub-thread">Select process</option>
                        <option value="sub-thread">Sub Thread 2</option>
                    </select>
                </div>
                <button class="add-thread">+ Sub-thread</button>
                <div class="thread-summary">
                    <h2>Summary for Thread A</h2>
                    <textarea placeholder="Write your summary here"></textarea>
                </div>
            `;
            assetDiv.appendChild(threadBuilder);
        }
        else if (asset.asset_type === "display_asset" && asset.asset_content_type === "article")
            {
                const input = document.createElement("div");
                input.classList.add("display");
                input.innerHTML = `
                        <div class = "input_con">
                            <h3 class="title"><img src="./images/vector.svg">  &nbsp&nbsp&nbsp Introduction</h3>
                            <p>The 4SA Method , How to bring a idea into progress ?</p>
                            <p class="see">See More</p>
                        </div>
                        <div class ="input_con">
                            <h3 class="title"><img src="./images/vector.svg"> &nbsp&nbsp&nbsp  Thread A</h3>
                            <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                            <p class="see">See More</p>
                        </div>

                `;
                assetDiv.appendChild(input);
            }

        else if(asset.asset_content_type === "article")
        {
            const article = document.createElement("div");
            article.classList.add("article");
            article.innerHTML = `
                <h3>Title</h3>
                <div class="title"></div>
                <h3>Content</h3>
                <div class="editor">
                    <ul class="e1">
                        <li>File</li>
                        <li>Edit</li>
                        <li>View</li>
                        <li>Insert</li>
                        <li>Format</li>
                        <li>Tools</li>
                        <li>Table</li>
                        <li>Help</li>
                    </ul>
                    <ul class="e2">
                        <img src="./images/undo.svg" alt="undo">
                        <img src="./images/redo.svg" alt="redo">
                        <img src="./images/zoom.svg" alt="zoom">
                        <input type="text" placeholder="Paragraph">
                        <img class="dot" src="./images/dot.svg" alt="dot">
                    </ul>
                </div>
                <div class="content1"></div>
            `;
            assetDiv.appendChild(article);
        }
        
        document.getElementById("output").appendChild(assetDiv);
    });
});

