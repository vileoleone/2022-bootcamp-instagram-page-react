import Sugestoes from "./Sugestoes";
import Usuário from "./Usuario"

export default function Sidebar() {
    return (
        <div class="right-column">
            <nav class="side-bar">
               <Usuário/>
               <Sugestoes/>
                <div class="rightcolumn-footer">
                    <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags • 
                        Idioma</p>
                    <p>© 2021 INSTAGRAM DO FACEBOOK</p>    
                </div>
            </nav>
        </div>
    );
}