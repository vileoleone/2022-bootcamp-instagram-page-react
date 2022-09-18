import Posts from "./Posts";
import Sidebar from "./Sidebar";


export default function Main() {
    return (
        <main class="main-content">
            <Posts/>
            <Sidebar/>
            <footer class="mobile-footer">
                   <ion-icon name="home"></ion-icon>
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
            </footer>  
        </main>
    );
}