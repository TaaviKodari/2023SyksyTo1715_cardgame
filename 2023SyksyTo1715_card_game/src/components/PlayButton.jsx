export default function PlayButton({text, handleClick}){
    return(
        <button className='play-button' onClick={handleClick} type="button">{text}</button>
    );
}