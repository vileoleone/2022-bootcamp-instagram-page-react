export default function Sugestoes() {
    const leftColumnImg = [
        { image: "./content_src/bad vibes.jpeg", text: "badvibes" },
        { image: "./content_src/chibi.jpeg", text: "chibi" },
        { image: "./content_src/razoes.jpeg", text: "razõesparaacreditar" },
        { image: "./content_src/adorable.jpeg", text: "adorable_animals" },
        { image: "./content_src/smallcat.jpeg", text: "smallcutecats" },
    ]

    const centerText = [
        { centerTextp2: "bad.vibes.memes", centerTextp3: "Segue você" },
        { centerTextp2: "chibirdart", centerTextp3: "Segue você" },
        { centerTextp2: "razoesparaacreditar", centerTextp3: "Novo Instagram" },
        { centerTextp2: "adorable_animals",centerTextp3: "Segue você" },
        { centerTextp2: "smallcuteanimals", centerTextp3: "Segue você" },
    ]

    const sideText = [
        { sideText: "Seguir" },
        { sideText: "Seguir" },
        { sideText: "Seguir" },
        { sideText: "Seguir" },
        { sideText: "Seguir" },

    ]
    return (
        <div>
            <span class="sidebar-titles">
                <p>Sugestões para você</p>
                <p class="p2"><b>Ver tudo</b></p>
            </span>
            <span class="sidebar-content">
                <span class="sidebar-leftcolumn">
                    <div class="leftcolumn-img">
                        {leftColumnImg.map((i) => {
                            return(
                                <img src={i.image} alt = {i.text}/>
                        )})}
                    </div>
                    <div class="sidebar-centertext">
                    {centerText.map((j) => {
                            return(
                                <p class="p2">
                                {j.centerTextp2}
                                <p class="p3">{j.centerTextp3}</p>
                                </p>
                        )})}
                    </div>
                </span>
                <div class="sidebar-rightcolumn">
                    {sideText.map((k) => {
                            return(
                                <p class="p3">{k.sideText}</p>
                        )})} 
                </div>
            </span>
        </div>
    );
}