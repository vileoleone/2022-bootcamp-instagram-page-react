import React from "react";
export default function Usuario() {  

    const [name, setName]= React.useState("Catanacomics");
    const [lastName, setLastName]= React.useState("Catana");
    const [userPhoto, setPhoto]= React.useState("./content_src/catancomics.jpeg");

    function ModifyName() {
        let promptName = prompt("Digite seu nome");
        let promptLastName = prompt("Digite seu  sobrenome");
        setLastName(promptLastName);
        setName(promptName);
    }

    function modifyPhoto () {
        let promptPhoto = prompt("Digite o link da sua foto");
        setPhoto(promptPhoto);
    }

    let initialUser = [name,lastName,userPhoto]
    
    function Userid (props) {
        return (
            <span class="sidebar-user">
            <figure><img src={props.photoLink} alt="Catancomics" onClick = {modifyPhoto}/></figure>
            <div>
                <p><b>{props.username}</b></p>
                <br/>
                <span class = "user-name">
                    <p class = "p2">{props.lastUserName}</p>
                    <ion-icon name="pencil-outline" class = "pencil-outline" onClick = {ModifyName}></ion-icon>
                </span>
            </div>
        </span>
        )
    }

    return (
        <Userid photoLink ={initialUser[2]} username={initialUser[0]} lastUserName = {initialUser[1]} />
    );
}