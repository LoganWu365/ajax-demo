let pageNumber = 1;
getCss.onclick =()=>{
let request = new XMLHttpRequest();
request.open("GET","/style.css");
request.onreadystatechange = ()=>{
    if(request.readyState === 4){
        if(request.status >= 200 && request.status < 300){
            let style = document.createElement('style');
            style.innerHTML = request.response;
            document.head.appendChild(style);
        }else{
            alert('加载css错误');
        }
    }
};
request.send();
};
getJs.onclick = ()=> {
    let requestJs = new XMLHttpRequest();
    requestJs.open("GET","2.js");
    requestJs.onreadystatechange = ()=>{
        if(requestJs.readyState === 4){
            if(requestJs.status >= 200 && requestJs.status < 300){
                let script = document.createElement('script');
                script.innerHTML = requestJs.response;
                document.head.appendChild(script);
            }else{
                alert('加载Js错误');
            }
        }
    };
    requestJs.send();
};
getHtml.onclick = ()=>{
    let html = new XMLHttpRequest();
    html.open('GET','3.html');
    html.onreadystatechange = ()=>{
        if(html.readyState === 4){
            if(html.status >= 200 && html.status < 300){
                let newHtml = document.createElement('div');
                newHtml.innerHTML = html.response;
                document.body.appendChild(newHtml);
            }else{
                alert('加载Html错误')
            }
        }
    };
    html.send();
};
getXml.onclick = ()=>{
    let request = new XMLHttpRequest();
    request.open('GET','4.xml');
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status <300){
            let dom = request.responseXML;
            let text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text);
        }
    };
    request.send();
};
getJSON.onclick = ()=>{
    let request = new XMLHttpRequest();
    request.open("get",'5.json');
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            let json = request.response;
            myName.innerHTML = JSON.parse(json).name;
        }
    }
    request.send();
};
page1.onclick = ()=>{
    let request = new XMLHttpRequest();
    request.open('get','page1.json');
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            console.log(typeof request.response);
            let result = '<ul>' + JSON.parse(request.response).map(item=>`<li>${item.id}</li>`).join('') + '</ul>';
            page.innerHTML =result;
            pageNumber = 1;
    }
  };
    request.send();
};
page2.onclick = ()=>{
    let request = new XMLHttpRequest();
    request.open('get','page2.json');
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            let result = '<ul>' + JSON.parse(request.response).map(item=>`<li>${item.id}</li>`).join('') + '</ul>';
            page.innerHTML =result;
            pageNumber = 2;
    }
  };
    request.send();
};
page3.onclick = ()=>{
    let request = new XMLHttpRequest();
    request.open('get','page3.json');
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            let result = '<ul>' + JSON.parse(request.response).map(item=>`<li>${item.id}</li>`).join('') + '</ul>';
            page.innerHTML =result;
            pageNumber = 3;
    }
  };
    request.send();
};
nextPage.onclick = ()=>{
    let request = new XMLHttpRequest();
    if(pageNumber === 3){
        document.querySelector('ul').innerHTML ='';
        request.open('get','page1.json');
    }else{    
        request.open('get',`page${pageNumber+1}.json`);
    };
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            let array = JSON.parse(request.response);
            array.forEach(item=>{
                let li = document.createElement('li');
                li.innerHTML = item.id;
                console.log(li);
                document.querySelector('ul').appendChild(li);
            });
            pageNumber += 1;
            if(pageNumber === 4){pageNumber = 1};
        };        
    };
    request.send();
}
let style = ()=>{
    let style = document.createElement('style');
    style.innerHTML = 'h1{color:pink}';
    document.head.appendChild(style);
};



