
async function getdata() {
  const response = await fetch("https://coding-week-2024-api.onrender.com/api/data")
  const info = await response.json();
  return info;
}

async function displaydata() {
  const data = await getdata();
  console.log(data);

  {
    var element = data[0]
    var i = document.createElement('img')
    i.src = element.image
    document.getElementById("img_1").appendChild(i)

    var par = document.createElement('d')
    par.textContent = element.headline
    document.getElementById("text_1").appendChild(par)

    var typ = document.createElement('d')
    typ.textContent = element.type
    document.getElementById("type_1").appendChild(typ)

    var dt = document.createElement('d')
    dt.textContent = element.date
    document.getElementById("date_1").appendChild(dt)


    var head = document.createElement("d")
    head.textContent = element.headline
    document.getElementById("headline_1").appendChild(head)

    var autr = document.createElement("d")
    autr.textContent = element.author
    document.getElementById("author_1").appendChild(autr)

    var cnt = document.createElement("d")
    cnt.textContent = element.content
    document.getElementById("content_1").appendChild(cnt)
  }

  {
    var element = data[1]
    var i = document.createElement('img')
    i.src = element.image
    document.getElementById("img_2").appendChild(i)

    var par = document.createElement('d')
    par.textContent = element.headline
    document.getElementById("text_2").appendChild(par)

    var typ = document.createElement('d')
    typ.textContent = element.type
    document.getElementById("type_2").appendChild(typ)

    var dt = document.createElement('d')
    dt.textContent = element.date
    document.getElementById("date_2").appendChild(dt)


    var head = document.createElement("d")
    head.textContent = element.headline
    document.getElementById("headline_2").appendChild(head)

    var autr = document.createElement("d")
    autr.textContent = element.author
    document.getElementById("author_2").appendChild(autr)

    var cnt = document.createElement("d")
    cnt.textContent = element.content
    document.getElementById("content_2").appendChild(cnt)
  }

  {
    var element = data[2]
    var i = document.createElement('img')
    i.src = element.image
    document.getElementById("img_3").appendChild(i)

    var par = document.createElement('d')
    par.textContent = element.headline
    document.getElementById("text_3").appendChild(par)

    var typ = document.createElement('d')
    typ.textContent = element.type
    document.getElementById("type_3").appendChild(typ)

    var dt = document.createElement('d')
    dt.textContent = element.date
    document.getElementById("date_3").appendChild(dt)


    var head = document.createElement("d")
    head.textContent = element.headline
    document.getElementById("headline_3").appendChild(head)

    var autr = document.createElement("d")
    autr.textContent = element.author
    document.getElementById("author_3").appendChild(autr)

    var cnt = document.createElement("d")
    cnt.textContent = element.content
    document.getElementById("content_3").appendChild(cnt)
  }

  {
    var element = data[3]
    var i = document.createElement('img')
    i.src = element.image
    document.getElementById("img_4").appendChild(i)

    var par = document.createElement('d')
    par.textContent = element.headline
    document.getElementById("text_4").appendChild(par)

    var typ = document.createElement('d')
    typ.textContent = element.type
    document.getElementById("type_4").appendChild(typ)

    var dt = document.createElement('d')
    dt.textContent = element.date
    document.getElementById("date_4").appendChild(dt)


    var head = document.createElement("d")
    head.textContent = element.headline
    document.getElementById("headline_4").appendChild(head)

    var autr = document.createElement("d")
    autr.textContent = element.author
    document.getElementById("author_4").appendChild(autr)

    var cnt = document.createElement("d")
    cnt.textContent = element.content
    document.getElementById("content_4").appendChild(cnt)
  }

  for (let index = 4; index < data.length; index++) {
    var element = data[index]

    var con = document.createElement("div")
    var i = document.createElement('img')
    i.src = element.image
    con.appendChild(i)
    document.getElementById("sub_box_img").appendChild(con)

    var con = document.createElement("div")
    var txt = document.createElement("p")
    txt.textContent = element.headline
    con.appendChild(txt)
    document.getElementById("sub_box_txt").appendChild(con)

    var con = document.createElement("div")
    var i = document.createElement('img')
    i.src = "images/calendar_b.png"
    con.appendChild(i)
    document.getElementById("sub_date").appendChild(con)

    var con = document.createElement("div")
    var dt = document.createElement('p')
    dt.textContent = element.date
    con.appendChild(dt)
    document.getElementById("sub_date").appendChild(con)

  };

  var header = document.getElementById("ul1");
  var btns = header.getElementsByClassName("option");
  for (var index = 0; index < btns.length; index++) {
    btns[index].addEventListener("click", function () {
      var current = document.getElementsByClassName("option act");
      current[0].className = current[0].className.replace("option act", "option");
      this.className += " act";
    });
  }

  var header = document.getElementById("tglbut");
  var btns = header.getElementsByClassName("but");
  for (var index = 0; index < btns.length; index++) {
    btns[index].addEventListener("click", function () {
      var current = document.getElementsByClassName("but active");
      current[0].className = current[0].className.replace("but active", "but");
      this.className += " active";
    });
  }

}

function on_1() {
  document.getElementById("overlay_1").style.display = "block";
}

function off_1() {
  document.getElementById("overlay_1").style.display = "none";
}

function on_2() {
  document.getElementById("overlay_2").style.display = "block";
}

function off_2() {
  document.getElementById("overlay_2").style.display = "none";
}

function on_3() {
  document.getElementById("overlay_3").style.display = "block";
}

function off_3() {
  document.getElementById("overlay_3").style.display = "none";
}

function on_4() {
  document.getElementById("overlay_4").style.display = "block";
}

function off_4() {
  document.getElementById("overlay_4").style.display = "none";
}


displaydata()





