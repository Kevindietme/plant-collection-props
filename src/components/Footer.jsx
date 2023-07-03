export default function Footer() {

    const gitHubLink = "https://github.com/";
    const getFullYear = new Date().getFullYear();
    
    return(
       <footer>
        <p>&copy; {getFullYear}</p>
        <p><a href={gitHubLink} target="_blank"
        rel="noreferrer">GitHub</a></p>
       </footer>
    )
}