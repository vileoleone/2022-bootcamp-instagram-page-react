import Stories from "./Stories"
import React from "react"

export default function Posts() {

    const postArray = [
        { imageLineAbove: "./content_src/meowed.png", txtAbove: "meowed", centerImage: "content_src/horse1.jpeg", centerImageText: "horse1", likeImage: "./content_src/respondeai.jpeg", likeText: "respondeai", likes: "101.523" },
        { imageLineAbove: "./content_src/barked.jpeg", txtAbove: "barked", centerImage: "content_src/horse2.jpeg", centerImageText: "horse2", likeImage: "./content_src/adorable.jpeg", likeText: "adorable", likes: "95.520" },
        { imageLineAbove: "./content_src/wawawiwa.jpeg", txtAbove: "wawawiwa", centerImage: "content_src/horse3.jpeg", centerImageText: "horse3", likeImage: "./content_src/alien.jpeg", likeText: "alien", likes: "30.310" }
    ]


    function Post(props) {
        const [heartType, heartSet] = React.useState("heart-outline")
        const [heartColor, heartColorSet] = React.useState("none")
        const [className, nameSet] = React.useState("bookmark-outline")
        const [likes, setLikes] = React.useState(props.likes);
        const formatNumber = Intl.NumberFormat('pt-BR')

        function addLike() {
           let addNumber = parseInt(likes.replace(/\./g,"")) + 1;
          
            setLikes(formatNumber.format(addNumber));
        }

        function minusLike() {
            let reduceNumber = parseInt(likes.replace(/\./g,"")) - 1;
            setLikes(formatNumber.format(reduceNumber));
        }

        function Save() {
            (className === "bookmark-outline") ? nameSet("bookmark") : nameSet("bookmark-outline")
        }

        function changeHeart() {

            if (heartType === "heart-outline") {
                heartSet("heart")
                addLike();
            }
            else {
                heartSet("heart-outline");
                minusLike();
            }

            (heartColor === "none") ? heartColorSet("danger") : heartColorSet("none");

        }

        return (
            <div class="center-box">
                <div class="head-box">
                    <img src={props.imageAbove} alt={props.txtabove} />
                    <figcaption>{props.txtabove}</figcaption>
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
                <div class="image-box">
                    <img src={props.centerImage} alt={props.centerImageText} />
                </div>
                <div class="footer-box">
                    <span class="icon-section">
                        <ion-icon name={heartType} onClick={() => { changeHeart() }} color={heartColor}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name={className} onClick={() => { Save() }}></ion-icon>
                    </span>
                    <span class="like-section">
                        <img src={props.likeImage} alt={props.likeText} />
                        <p>Curtido por <b>{props.likeText}</b> e outras <b>{likes} pessoas</b></p>
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div class="left-column">
            <Stories />

            {postArray.map((post) => {
                return (
                    <Post imageAbove={post.imageLineAbove} txtAbove={post.txtAbove} centerImage={post.centerImage} centerImageText={post.centerImageText} likeImage={post.likeImage} likeText={post.likeText} likes={post.likes} />
                )
            })}
        </div>
    );
}