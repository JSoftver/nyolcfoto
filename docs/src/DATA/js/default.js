document.getElementById("texts").style.marginTop = String(screen.height + 30) + "px";

function getId(obj) {
    return document.getElementById(obj);
}

let last = 0;
window.onscroll = function() {
    var scroll  = window.pageYOffset || document.documentElement.scrollTop;
    const nbt = getId("navbar-top");
    if (scroll > 60 && last == 0) {
        last = 1;
        nbt.style.backgroundColor = `rgba(0, 0, 0, 0.4)`;
        nbt.style.boxShadow = `5px 14px 15px 5px rgba(0, 0, 0, 0.82)`;
    } else if (scroll <= 60 && last > 0) {
        last = 0;
        nbt.style.backgroundColor = `rgba(0, 0, 0, 0)`;
        nbt.style.boxShadow = `none`;
    }
}

function sendEmail(email, subject, body) {
    window.open(`mailto:${String(email)}?subject=${String(subject)}&body=${String(body)}`);
}

let lastMenu = getId("home");
const opn = {
    categories: (box) => {
        lastMenu.classList.remove("selected");
        box.classList.add("selected");
        lastMenu = box;
        document.title = "Kategóriák - 8 Fotó";
        getId("texts").innerHTML = `
        <div id="cats">
            <a href="#catNature">Természetfotók</a>    
            <a href="#catObject">Tárgyfotók</a>    
            <a href="#catMacro">Makrófotók</a>    
            <a href="#catStreet">Street fotók</a>    
            <a href="#catPortrai">Portré fotók</a>    
            <a href="#catPhenomenon">Jelenségek</a>    
        </div>
        `;
        window.location.href = "#texts";
        
        // Nature
        getId("texts").innerHTML += "<h1 id='catNature'>Természetfotók</h1>";
        for (let i = 0; i < vdata.nature.length; i++) {            
            getId("texts").innerHTML += `<img onclick="window.open(this.src, '_blank')" class='img' src="src/DATA/stored_images/${vdata.nature[i].originalName}.jpg"><br><div class="img-text"><br><span>&commat; Név: ${vdata.nature[i].name}</span><br><span>&Lscr; Leírás: ${vdata.nature[i].desc}</span><br><span>&check; Dátum: ${vdata.nature[i].date}</span><br><span>&#10063; Album: ${vdata.nature[i].album}</span><br><br></div><br><br>`;
        }

        // Street
        getId("texts").innerHTML += "<br><br>";
        getId("texts").innerHTML += "<h1 id='catStreet'>Street fotók</h1>";
        for (let i = 0; i < vdata.street.length; i++) {            
            getId("texts").innerHTML += `<img onclick="window.open(this.src, '_blank')" class='img' src="src/DATA/stored_images/${vdata.street[i].originalName}.jpg"><br><div class="img-text"><br><span>&commat; Név: ${vdata.street[i].name}</span><br><span>&Lscr; Leírás: ${vdata.street[i].desc}</span><br><span>&check; Dátum: ${vdata.street[i].date}</span><br><span>&#10063; Album: ${vdata.street[i].album}</span><br><br></div><br>`;
        }

        // Object
        getId("texts").innerHTML += "<br><br>";
        getId("texts").innerHTML += "<h1 id='catObject'>Tárgyak</h1>";
        for (let i = 0; i < vdata.object.length; i++) {            
            getId("texts").innerHTML += `<img onclick="window.open(this.src, '_blank')" class='img' src="src/DATA/stored_images/${vdata.object[i].originalName}.jpg"><br><div class="img-text"><br><span>&commat; Név: ${vdata.object[i].name}</span><br><span>&Lscr; Leírás: ${vdata.object[i].desc}</span><br><span>&check; Dátum: ${vdata.object[i].date}</span><br><span>&#10063; Album: ${vdata.object[i].album}</span><br><br></div><br>`;
        }

        // Portrai
        getId("texts").innerHTML += "<br><br>";
        getId("texts").innerHTML += "<h1 id='catPortrai'>Portrék</h1>";
        for (let i = 0; i < vdata.portrai.length; i++) {            
            getId("texts").innerHTML += `<img onclick="window.open(this.src, '_blank')" class='img' src="src/DATA/stored_images/${vdata.portrai[i].originalName}.jpg"><br><div class="img-text"><br><span>&commat; Név: ${vdata.portrai[i].name}</span><br><span>&Lscr; Leírás: ${vdata.portrai[i].desc}</span><br><span>&check; Dátum: ${vdata.portrai[i].date}</span><br><span>&#10063; Album: ${vdata.portrai[i].album}</span><br><br></div><br>`;
        }

        // Macro
        getId("texts").innerHTML += "<br><br>";
        getId("texts").innerHTML += "<h1 id='catMacro'>Makrók</h1>";
        for (let i = 0; i < vdata.macro.length; i++) {            
            getId("texts").innerHTML += `<img onclick="window.open(this.src, '_blank')" class='img' src="src/DATA/stored_images/${vdata.macro[i].originalName}.jpg"><br><div class="img-text"><br><span>&commat; Név: ${vdata.macro[i].name}</span><br><span>&Lscr; Leírás: ${vdata.macro[i].desc}</span><br><span>&check; Dátum: ${vdata.macro[i].date}</span><br><span>&#10063; Album: ${vdata.macro[i].album}</span><br><br></div><br>`;
        }

        // Phenomenon
        getId("texts").innerHTML += "<br><br>";
        getId("texts").innerHTML += "<h1 id='catPhenomenon'>Jelenségek</h1>";
        for (let i = 0; i < vdata.phenomenon.length; i++) {            
            getId("texts").innerHTML += `<img onclick="window.open(this.src, '_blank')" class='img' src="src/DATA/stored_images/${vdata.phenomenon[i].originalName}.jpg"><br><div class="img-text"><br><span>&commat; Név: ${vdata.phenomenon[i].name}</span><br><span>&Lscr; Leírás: ${vdata.phenomenon[i].desc}</span><br><span>&check; Dátum: ${vdata.phenomenon[i].date}</span><br><span>&#10063; Album: ${vdata.phenomenon[i].album}</span><br><br></div><br>`;
        }
    },

    albums: (box) => {
        lastMenu.classList.remove("selected");
        box.classList.add("selected");
        lastMenu = box;
        document.title = "Albumok - 8 Fotó";
        getId("texts").innerHTML = "";
        window.location.href = "#texts";
        for (let albumI = 0; albumI < vdata.albums.length - 1; albumI++) {
            let imagesInAlbum = [];
            for (let i = 0; i < vdata.macro.length; i++) {
                if (vdata.macro[i].album == vdata.albums[albumI]) {
                    imagesInAlbum.push(vdata.macro[i]);
                }
            }
            for (let i = 0; i < vdata.nature.length; i++) {
                if (vdata.nature[i].album == vdata.albums[albumI]) {
                    imagesInAlbum.push(vdata.nature[i]);
                }
            }
            for (let i = 0; i < vdata.object.length; i++) {
                if (vdata.object[i].album == vdata.albums[albumI]) {
                    imagesInAlbum.push(vdata.object[i]);
                }
            }
            for (let i = 0; i < vdata.portrai.length; i++) {
                if (vdata.portrai[i].album == vdata.albums[albumI]) {
                    imagesInAlbum.push(vdata.portrai[i]);
                }
            }
            for (let i = 0; i < vdata.street.length; i++) {
                if (vdata.street[i].album == vdata.albums[albumI]) {
                    imagesInAlbum.push(vdata.street[i]);
                }
            }
            for (let i = 0; i < vdata.phenomenon.length; i++) {
                if (vdata.phenomenon[i].album == vdata.albums[albumI]) {
                    imagesInAlbum.push(vdata.phenomenon[i]);
                }
            }
            getId("texts").innerHTML += `<div style="background-image: url(src/DATA/stored_images/${imagesInAlbum[0].originalName}.jpg);" onclick="opn.album(${JSON.stringify(imagesInAlbum)})" class="album"><h1>${vdata.albums[albumI]}</h1><br></div><br><br>`;
        }
    },

    blog: (box) => {
        lastMenu.classList.remove("selected");
        box.classList.add("selected");
        lastMenu = box;
        document.title = "Albumok - 8 Fotó";
        getId("texts").innerHTML = ``;
        window.location.href = "#texts";
        for (let i = 0; i < bdata.blogs.length; i++) {
            if (bdata.blogs[i].data.length > 1000) {
                getId("texts").innerHTML += `
                <div class="blogBox">
                    <h1 class="blogName">${bdata.blogs[i].name}</h1><span class="blogDate">Dátum: ${bdata.blogs[i].date}</span><br><br>
                    <div class="blogData" id="blogData${i}">${bdata.blogs[i].data.slice(0, 997)}...</div><br><span class="readMore" onclick="readMore(this, ${i})">Több megjelenítése...</span>
                </div>`;
            } else {
                getId("texts").innerHTML += `
                <div class="blogBox">
                    <h1 class="blogName">${bdata.blogs[i].name}</h1><span class="blogDate">Dátum: ${bdata.blogs[i].date}</span><br><br>
                    <div class="blogData" id="blogData${i}">${bdata.blogs[i].data}</div>
                </div>`;
            }
        }
    },

    feedback: (box) => {
        lastMenu.classList.remove("selected");
        box.classList.add("selected");
        lastMenu = box;
        document.title = "Albumok - 8 Fotó";
        getId("texts").innerHTML = "";
        window.location.href = "#texts";
        getId("texts").innerHTML = `
        <br><br>
        <h1>Visszajelzés írása</h1>
        <span>Kérjük, írja le ide a nevét illetve a visszajelzést irántunk!</span><br><br>
        <textarea spellcheck='false' id="feedbackData" style="width: 300px; height: 100px;"></textarea><br><br>
        <button onclick="sendEmail('nyolcfoto@gmail.com', 'Feedback - Visszajelzés', document.getElementById('feedbackData').value)";>Küldés</button><br><br>
        <em>Köszönjük a visszajelzést! Legyen szép napja! ;)</em><br><br>
        <h1>Facebook csoport leírása & szabályzata:</h1>
        <span>
            Ez a csoport a 8 Fotó oldalnak a csoportja. Itt mindenki feltöltheti a saját fotóit, és építő jellegű kritikát írhat másoknak. További információk a csoportban és az oldalon.

            Tippeket adhatsz és tippeket kérhetsz másoktól.

            Feltölthetsz fotókat, és az is lehet, hogy fel kerül a weboldalra, természetesen a te neveddel alatta. De még mielőtt feltöltenénk, nyilvánvalóan kérünk tőled engedélyt, hogy feltölthessük. További információ a SZABÁLYZAT-nál olvasható.

            Linkek:
            <ul>
                <li><a style="cursor: pointer; color: lawngreen; text-decoration: underline;" href="https://www.facebook.com/nyolcfoto/">Facebook oldal</li>
                <li><a style="cursor: pointer; color: lawngreen; text-decoration: underline;" href="https://www.youtube.com/channel/UCmnAACnGn8Hj8zBnHWmlUqw">YouTube csatorna</li>
                <li><a style="cursor: pointer; color: lawngreen; text-decoration: underline;" href="https://jsoftver.github.io/nyolcfoto">Weboldal</a></li>
            </ul>
            
            <br><br>
            <span style="color: blueviolet;">SZABÁLYZAT:</span>
            <br><br>
            <span style="color: red;">Amit tilos:</span>
            <ul>
                <li>Tilos a nem saját képek feltöltése (a mostani modern technikának hála ez nagyon egyszerűen kideríthető : ) ), ez alól kivétel az, hogyha odaírod a nevét, hogy ki készítette, de ilyet MAXIMUM 3-at tölthetsz fel egy nap. A szabály megszegése esetén némíthatunk, vagy ki tehetünk téged pár napra pihenni. : )</li>
                <li>Szigorúan tilos a káromkodás, ha ilyen van, akkor úgyis jelez nekem a Facebook, meg a többi moderátornak/adminnak, és vagy én vagy ők, kitesznek a csoportból.</li>
                <li>Saját terméket, eladó cuccokat hirdetni TILOS! Ez nem egy hirdetőoldal, arra ott van a Marketplace, meg a többi hirdetőoldal! ; ) (Tiltás)</li>
            </ul>
            
            <span style="color: orange;">Amit szabad, de korláttal:</span>
            <ul>
                <li>Vicces képeket szabad feltenni, de kérlek, hogy ne szórjátok tele a csoportot ilyenekkel, ugyanis nem pont erre a célra lett tervezve! ; )</li> 
                <li>Saját weboldal hirdetése, de KIZÁRÓLAG HÉTFŐN, és csakis 1-szer!</li>
                <li>Videókat lehet feltenni, ha az kapcsolódik az oldalhoz, de amint meglátok egy gameplay videót, már raklak is ki!</li>
            </ul>
            
            <span style="color: lightgreen;">Amit jó lenne, ha megtennél nekünk, illetve bármikor megtehetsz:</span>
            <ul>
                <li>Bemutatkozás egy bejegyzésnél, (mióta fotózol, milyen stílusú képeket csinálsz/szeretsz csinálni, milyen géped van stb...)</li>
                <li>Kérhetsz segítséget bárkitől, hisz erre a célra lett tervezve a csoport!</li>
            </ul>
            <br><br>
            <span>És mi a helyzet a rangokkal?</span><br>
            <em>Igen, a rangok... nos rangot úgy lehet szerezni, ha folyamatos közreműködője vagy a csoportnak, mindik segítesz, folyamatosan aktív vagy, persze nem kell 0-24 ben aktívnak lenned, nem egy éjjel-nappali kisbolt vagy, aki segítséget árul, de jó lenne, amikor segítséget kérnek tőled, vagy mindenkitől, akkor már ott is lennél, és már írnál is neki. Valamint ha reklámozod az oldalunkat, megosztod a bejegyzéseket. Viszont a rang felelőséggel jár! Ne csak azért segíts másokon, hogy rangot szerezzél, illetve nem is biztos hogy kapni fogsz!</em>
        </span>
        `;
    }
}

function readMore(box, i) {
    document.getElementById('blogData' + i).innerHTML = bdata.blogs[i].data; 
    box.classList.add('hidden');
}

/* 
let readMoreEnables = [];
function readMore(button, data, box) {
    for (let i = 0; i < readMoreEnables.length; i++) {
        if (readMoreEnables[i].box == box && readMoreEnables[i].enabled == true) {
            button.value = "Több megjelenítése";
            box.innerText = data.slice(0, 997);
            readMoreEnables.slice({box: box, enabled: true}, 1);
        } else {
            button.value = "Több elrejtése";
            box.innerText = data;
            readMoreEnables.push({box: box, enabled: true});
        }        
    }
} */

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 0) {
        document.getElementById("btt").classList.remove("hidden");
        document.getElementById("btt").style.animationName = "popupBtt";
        document.getElementById("btt").style.color = "black";
        document.getElementById("btt").style.backgroundColor = "gray";
    } else {
        document.getElementById("btt").style.animationName = "popdownBtt";
        document.getElementById("btt").style.color = "transparent";
        document.getElementById("btt").style.backgroundColor = "transparent";
        setTimeout(function() {
            document.getElementById("btt").classList.add("hidden");
        }, 200);
    }
});

// Newest Photos
getId("newestUploads").innerHTML = `
    <h1>Legújabb feltöltések</h1><br>

    <h2>Makró</h2>
    <img onclick="window.open(this.src, '_blank')" class='img' src="src/DATA/stored_images/${vdata.macro[vdata.macro.length - 1].originalName}.jpg"><br><div class="img-text"><br><span>&commat; Név: ${vdata.macro[vdata.macro.length - 1].name}</span><br><span>&Lscr; Leírás: ${vdata.macro[vdata.macro.length - 1].desc}</span><br><span>&check; Dátum: ${vdata.macro[vdata.macro.length - 1].date}</span><br><span>&#10063; Album: ${vdata.macro[vdata.macro.length - 1].album}</span><br><br></div><br><br>
    
    <h2>Street Fotó</h2>
    <img onclick="window.open(this.src, '_blank')" class='img' src="src/DATA/stored_images/${vdata.street[vdata.street.length - 1].originalName}.jpg"><br><div class="img-text"><br><span>&commat; Név: ${vdata.street[vdata.street.length - 1].name}</span><br><span>&Lscr; Leírás: ${vdata.street[vdata.street.length - 1].desc}</span><br><span>&check; Dátum: ${vdata.street[vdata.street.length - 1].date}</span><br><span>&#10063; Album: ${vdata.street[vdata.street.length - 1].album}</span><br><br></div><br><br>
    
    <h2>Portré</h2>
    <img onclick="window.open(this.src, '_blank')" class='img' src="src/DATA/stored_images/${vdata.portrai[vdata.portrai.length - 1].originalName}.jpg"><br><div class="img-text"><br><span>&commat; Név: ${vdata.portrai[vdata.portrai.length - 1].name}</span><br><span>&Lscr; Leírás: ${vdata.portrai[vdata.portrai.length - 1].desc}</span><br><span>&check; Dátum: ${vdata.portrai[vdata.portrai.length - 1].date}</span><br><span>&#10063; Album: ${vdata.portrai[vdata.portrai.length - 1].album}</span><br><br></div><br><br>
    
    <h2>Természet</h2>
    <img onclick="window.open(this.src, '_blank')" class='img' src="src/DATA/stored_images/${vdata.nature[vdata.nature.length - 1].originalName}.jpg"><br><div class="img-text"><br><span>&commat; Név: ${vdata.nature[vdata.nature.length - 1].name}</span><br><span>&Lscr; Leírás: ${vdata.nature[vdata.nature.length - 1].desc}</span><br><span>&check; Dátum: ${vdata.nature[vdata.nature.length - 1].date}</span><br><span>&#10063; Album: ${vdata.nature[vdata.nature.length - 1].album}</span><br><br></div><br><br>
    
    <h2>Tárgy</h2>
    <img onclick="window.open(this.src, '_blank')" class='img' src="src/DATA/stored_images/${vdata.object[vdata.object.length - 1].originalName}.jpg"><br><div class="img-text"><br><span>Név: ${vdata.object[vdata.object.length - 1].name}</span><br><span>&Lscr; Leírás: ${vdata.object[vdata.object.length - 1].desc}</span><br><span>&check; Dátum: ${vdata.object[vdata.object.length - 1].date}</span><br><span>&#10063; Album: ${vdata.object[vdata.object.length - 1].album}</span><br><br></div><br><br>
    
    <h2>Jelenségek</h2>
    <img onclick="window.open(this.src, '_blank')" class='img' src="src/DATA/stored_images/${vdata.phenomenon[vdata.phenomenon.length - 1].originalName}.jpg"><br><div class="img-text"><br><span>Név: ${vdata.phenomenon[vdata.phenomenon.length - 1].name}</span><br><span>&Lscr; Leírás: ${vdata.phenomenon[vdata.phenomenon.length - 1].desc}</span><br><span>&check; Dátum: ${vdata.phenomenon[vdata.phenomenon.length - 1].date}</span><br><span>&#10063; Album: ${vdata.phenomenon[vdata.phenomenon.length - 1].album}</span><br><br></div><br><br>
`;

// Newest Blogs
if (bdata.blogs.length < 3) {
    if (bdata.blogs[bdata.blogs.length - 1].data.length > 1000) {
        getId("newestBlogs").innerHTML += `
        <div class="blogBox">
            <h1 class="blogName">${bdata.blogs[bdata.blogs.length - 1].name}</h1><span class="blogDate">Dátum: ${bdata.blogs[bdata.blogs.length - 1].date}</span><br><br>
            <div class="blogData" id="blogData${bdata.blogs.length - 1}">${bdata.blogs[bdata.blogs.length - 1].data.slice(0, 997)}...</div><br><span class="readMore" onclick="readMore(this, ${bdata.blogs.length - 1})">Több megjelenítése...</span>
        </div>`;
    } else {
        getId("newestBlogs").innerHTML += `
        <div class="blogBox">
            <h1 class="blogName">${bdata.blogs[bdata.blogs.length - 1].name}</h1><span class="blogDate">Dátum: ${bdata.blogs[bdata.blogs.length - 1].date}</span><br><br>
            <div class="blogData" id="blogData${bdata.blogs.length - 1}">${bdata.blogs[bdata.blogs.length - 1].data}</div>
        </div>`;
    }
} else {
    for (let i = 0; i < 3; i++) {
        if (bdata.blogs[i].data.length > 1000) {
            getId("newestBlogs").innerHTML += `
            <div class="blogBox">
                <h1 class="blogName">${bdata.blogs[i].name}</h1><span class="blogDate">Dátum: ${bdata.blogs[i].date}</span><br><br>
                <div class="blogData" id="blogData${i}">${bdata.blogs[i].data.slice(0, 997)}...</div><br><span class="readMore" onclick="readMore(this, ${i})">Több megjelenítése...</span>
            </div>`;
        } else {
            getId("newestBlogs").innerHTML += `
            <div class="blogBox">
                <h1 class="blogName">${bdata.blogs[i].name}</h1><span class="blogDate">Dátum: ${bdata.blogs[i].date}</span><br><br>
                <div class="blogData" id="blogData${i}">${bdata.blogs[i].data}</div>
            </div>`;
        }
    }
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById("style-link").innerHTML = `<link rel="stylesheet" href="src/DATA/css/style-phone.css">`;
    vdata.device = "phone";
    alert("FIGYELEM!!! AZ OLDAL TELEFONOS VERZIÓJA MÉG NINCSEN TELJESEN KÉSZ!");
} else {
    vdata.device = "pc";
}