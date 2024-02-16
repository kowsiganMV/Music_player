function playit(event,event1,event2){
         document.getElementById("doit").remove();
         var image=document.getElementById("playimg");
         image.src=event1;
         document.getElementById("currentname").textContent=event2;
         
         var newDiv = document.createElement('div');
         var sub=document.getElementById("subplay");
         newDiv.className = 'player';
         newDiv.id = 'doit';
         const audioElement = document.createElement('audio');
         audioElement.controls = true; 
         audioElement.autoplay = true;
         audioElement.className="custom-audio";
         audioElement.setAttribute('src', event);
         const sourceElement = document.createElement('source');
         sourceElement.setAttribute('src', event);
         sourceElement.setAttribute('type', 'audio/mpeg');
         audioElement.appendChild(sourceElement);
         newDiv.appendChild(audioElement);
         sub.append(newDiv);
      }

      async function searchData() {
        try {
            var container = document.getElementById("dataContainer");
            var tag=document.getElementById('Resultsection');
            tag.textContent="Searching...";
            container.innerHTML='';

            var load=document.createElement('img');
            load.className="loading";
            load.src="https://media1.giphy.com/media/YSvwImOVlXMS15KeNk/200.webp?cid=ecf05e4719le581x4wiyxfqajtmfgotf9296krgsyz0z45me&ep=v1_gifs_search&rid=200.webp&ct=g";
            load.alt="GIF Example";
            container.appendChild(load);


            const query = document.getElementById('searchInput').value;
            document.getElementById('searchInput').textContent='';
            const response = await fetch(`/search_data?query=${encodeURIComponent(query)}`);
            const data = await response.json();

            load.remove();
            tag.textContent="results for "+query;

            for (var i = 0; i < data[0].length; i++) {
                var div2=document.createElement('div');
                div2.className="center-play";
                div2.innerHTML=`<p >${data[1][i]}</p><button onclick="playit('${data[2][i]}','${data[0][i]}','${data[1][i]}')" id="playthis">▶</button>`;
                container.appendChild(div2);
              }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }   
    async function searchit(event) {
        try {
            var container = document.getElementById("dataContainer");
            var tag=document.getElementById('Resultsection');
            tag.textContent="Searching...";
            container.innerHTML='';

            var load=document.createElement('img');
            load.className="loading";
            load.src="https://media1.giphy.com/media/YSvwImOVlXMS15KeNk/200.webp?cid=ecf05e4719le581x4wiyxfqajtmfgotf9296krgsyz0z45me&ep=v1_gifs_search&rid=200.webp&ct=g";
            load.alt="GIF Example";
            container.appendChild(load);


            const query = event;
            const response = await fetch(`/search_data?query=${encodeURIComponent(query)}`);
            const data = await response.json();

            load.remove();
            tag.textContent="results for "+query;

            for (var i = 0; i < data[0].length; i++) {
                var div2=document.createElement('div');
                div2.className="center-play";
                div2.innerHTML=`<p >${data[1][i]}</p><button onclick="playit('${data[2][i]}','${data[0][i]}','${data[1][i]}')" id="playthis">▶</button>`;
                container.appendChild(div2);
              }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }     
    async function profilework() {
        var tag=document.getElementById("coverit");
        var profile=document.createElement('img');
        profile.className="profile";
        profile.src="https://avatars.githubusercontent.com/u/85386114?v=4";
        var Newdiv=document.createElement('div');
        Newdiv.className="About";
        var Newdiv1=document.createElement('div');
        Newdiv1.appendChild(profile);
        var Head=document.createElement('h1');
        Head.textContent="Created By";
        var para=document.createElement("p");
        para.textContent="Kowsigan M V created at 16-02-2024";
        Newdiv.appendChild(Newdiv1);
        Newdiv.appendChild(Head);
        Newdiv.appendChild(para);
        tag.appendChild(Newdiv);



    }