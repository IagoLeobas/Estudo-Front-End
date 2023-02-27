
import imagem1 from '../assets/imagem1.jpg'

const Images = () => {
    return(
        <div>
            <img src="/imagem2.png"></img>
            <img src={imagem1}></img>
        </div>
    );
};
export default Images;