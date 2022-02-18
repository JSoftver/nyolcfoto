// Version and image data
let vdata = {
    nature: [
        {
            name: "Fa...",
            desc: "Egyrészt ezt már régen csináltam, másrészt pedig fogalmam sincs, hogy milyen nevet lehetne ennek adni",
            date: "2021. 09. 12.",
            originalName: "0",
            album: "Anno",
        },
        {
            name: "Strand...",
            desc: "Egyrészt ezt már régen csináltam, másrészt pedig fogalmam sincs, hogy milyen nevet lehetne ennek adni",
            date: "2021. 09. 12.",
            originalName: "2",
            album: "Anno",
        },
        {
            name: "Bogár...",
            desc: "Ez egy bogár. Akármennyire is makrófotónak tűnik, nem az.",
            date: "2021. 09. 12.",
            originalName: "3",
            album: "Anno",
        },
        {
            name: "Hajó oldalról nézve...",
            desc: "Nem volt vízben a hajó...",
            date: "2021. 09. 12.",
            originalName: "4",
            album: "Anno",
        },
        {
            name: "Kacsa meg szikla...",
            desc: "Szeretem a kacsát. A szikla viszont már túl kemény a fogamnak.",
            date: "2021. 09. 12.",
            originalName: "5",
            album: "Anno",
        },
    ],

    street: [
        {
            name: "Gördeszkapálya földről nézve portré móddal",
            desc: "Ez egy gördeszkapályának egy kis része, amit - szokásomhoz hűen - földről fotóztam.",
            date: "2022. 02. 14.",
            originalName: "6",
            album: "Street Start Pack 1",
        },
        {
            name: "Egy lépcső földről nézve portré móddal",
            desc: "Ezt a kis lépcsőt egy kisbolt hátsó bejárata mellett fotóztam a földről - szokásomhoz hűen.",
            date: "2022. 02. 14.",
            originalName: "7",
            album: "Street Start Pack 1",
        },
    ],

    macro: [
        {
            name: "Moha...",
            desc: "Egyrészt ezt már régen csináltam, másrészt pedig fogalmam sincs, hogy milyen nevet lehetne ennek adni. Egyébként szerintem szép lett.",
            date: "2021. 09. 12.",
            originalName: "1",
            album: "Anno",
        },
        {
            name: "Növény...",
            desc: "Ezt már nagyon régen csináltam, de azt még most is látom, hogy egy gaz van a képen.",
            date: "2021. 09. 12.",
            originalName: "9",
            album: "Anno",
        },
    ],

    portrai: [
        {
            name: "Szürke cica pózol",
            desc: `Ezt a képet már nagyon régen csináltam, és ez még nem is fényképezőgéppel készült, hanem egy egyszerű telefonnal. 
            És képzeld: semmi szerkesztés, azt az egy szemkiszúró effektet kivéve.`,
            date: "2021. 11. 12.",
            originalName: "8",
            album: "Anno",
        },
    ],

    object: [
        {
            name: "Deadpool lights",
            desc: `Megpróbáltam mindent beleadni a háttérbe. Előtte a Deadpool-os pendrive-om pózol.`,
            date: "Nincs dátum hozzáadva",
            originalName: "11",
            album: "Karantén fotók",
        },
    ],

    phenomenon: [
        {
            name: "Fénycsík 1. próba",
            desc: `Ez az első olyan képem, aminél egy autó által húzott fénycsíkot akartam lefotózni. 
            Mivel nem konkrétan ezt mentem fotózni, nem lett olyan jó, de majd csak jobb lesz :)`,
            date: "2022. 02. 14.",
            originalName: "10",
            album: "Záridőőő",
        },
    ],
    
    albums: [
        'Anno',
        'Street Start Pack 1',
        'Záridőőő',
        'Karantén fotók',
        ''
    ],

    device: "",
}

// Blog data
let bdata = {
    blogs: [
        {
            name: "Készen vagyunk!",
            data: `
            <span>Készen van a Facebook oldal és a Facebook csoport, valamint készen van a YouTube csatorna is, ahova majd képeket teszünk fel videókban egy kis zenével összevágva.</span><br><br>
            <strong>Itt érhetitek el a linkeket:</strong><br>
            <ul>
                <li>Facebook oldal: <a href="https://www.facebook.com/nyolcfoto/">https://www.facebook.com/nyolcfoto/</a></li>
                <li>Facebook csoport: <a href="https://www.facebook.com/groups/nyolcfoto">https://www.facebook.com/groups/nyolcfoto</a></li>
                <li>YouTube csatorna:  <a href="https://www.youtube.com/channel/UCmnAACnGn8Hj8zBnHWmlUqw">https://www.youtube.com/channel/UCmnAACnGn8Hj8zBnHWmlUqw</a></li>
            </ul>
            `,
            date: "2022. 02. 17.",
        },
        {
            name: `Hogyan csináltam a "Deadpool lights" képemet?`,
            data: `
            <img src="src/DATA/stored_images/11.jpg" alt="Hiba a kép betöltése során" style="height: 200px; width: auto; float: left; margin-right: 30px; margin-bottom: 10px; cursor: pointer;" onclick="window.open(this.src, '_blank')">
            <span>Ha kíváncsi vagy rá, hogy hogyan csináltam a Deadpool lights képemet, vagy te is szeretnél ilyen képet csinálni, akkor ezt mindenképp olvasd el! Vagy nézd meg YouTube-on: <a onclick="window.open('https://youtu.be/qDvnkC7N54k', '_blank')">https://youtu.be/qDvnkC7N54k</a>!</span><br>
            <h3><strong>Hogy mik is kellenek hozzá?</strong></h3>
            <ul>
                <liAlufólia</li>
                <li>Egy tárgy, amit az előtérbe szeretnénk helyezni (mivel ez egy "élettelen kép", ezért én egy játékfigurás pendrive-ot választottam)</li>
                <li>Zseblámpa, vagy egy telefonnak a vakuja.</li>
                <li>A jobb hatás érdekében jó ha van nálad tükör. (Én nem találtam, így az enyém nem lett olyan szép, de a tiéd attól még lehet szebb!)</li>
                <li>Egy kamera, ami elengedhetetlen a képhez, de ha esetleg újabb telefonod van, akkor jó lesz az is!</li>
                <li>Valamint ha nincsen egyenlő magasságban a tárgy és a kamera, akkor egy kis emelvény, például egy könyv a kamerának vagy a tárgynak. (Az én esetemben a tárgynak használtam egy könyvet alufóliával lefedve)</li>
            </ul>
            <h3><strong>Ezek után?</strong></h3>
            <span>Ezek után tépjünk le egy kis négyzet alakú alufóliadarabot, amit gyűrjünk össze, majd finoman hajtogassuk ki, nehogy beletépjünk. Majd az alufóliadarabot ragasszuk fel valahova, vagy döntsük neki valaminek, az a lényeg, hogy az lesz majd a háttér.</span><br>
            <span>Majd helyezzük a tárgyat a háttér elé. Itt jön képbe az emelvény, az én esetemben egy alufóliával befedett könyv, amire rátettem a tárgyat - a figurát - és ha neked van nagy lapos tükröd, akkor a könyv helyett mindenképpen használd azt, és arra tedd a tárgyat, ugyanis sokkal jobb lesz tőle a kép.</span><br>
            <span>Majd játsszatok a fénnyel! Higyjétek el nekem, ha egy nagyon kivilágított szobában vagy, akkor is kell a plusz fény! Próbálgassátok, hogy hogyan néz ki a legjobban a kép, a fény irányában!</span><br>
            <span>Aztán ha úgy gondolod, hogy minden készen van, minden jól be van állítva, akkor csinálhatod is a képeket!</span><br><br>
            <iframe width="731" height="411" src="https://www.youtube.com/embed/qDvnkC7N54k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `,
            date: "Nincs dátum hozzáadva",
        },
    ],
}