
export default function Stories() {

    const stories = [
        { img: "./content_src/9gag.jpeg", txt: "9gag" },
        { img: "./content_src/meowed.png", txt: "meowed" },
        { img: "./content_src/barked.jpeg", txt: "barked" },
        { img: "./content_src/alien.jpeg", txt: "alien" },
        { img: "./content_src/wawawiwa.jpeg", txt: "wawawiwa" },
        { img: "./content_src/respondeai.jpeg", txt: "respondeai" },
        { img: "./content_src/filosofia.jpeg", txt: "filosofia" },
        { img: "./content_src/memeria.jpeg", txt: "memeria" },
        { img: "./content_src/9gag.jpeg", txt: "9gag" }
    ];

    return (
        <nav class="above-nav">
            <div class="above-nav-wrapper" >
                <ion-icon name="chevron-forward"></ion-icon>
                {stories.map((storie) => {
                    return (
                        <figure>
                            <div class="nav-img">
                                <img src={storie.img} alt={storie.txt} />
                            </div>
                            <figcaption>{storie.txt}</figcaption>
                        </figure>
                    )
                })}
            </div>
        </nav>
    );

}

