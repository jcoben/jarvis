// The default export of this file becomes the main component
import style from './style.css';

export default ({className='', onClick, text='', isActive=false }) => {
    return (
        <svg className={`${className} ${style.button} ${isActive ? style.on : style.off }`} height="2em" onClick={onClick} version="1.1" viewBox="0 0 10 10" width="2em">
            <g>
                <line className={`${style.topline}`} x1="1.18" x2="8.82" y1="1.586" y2="1.586"/>
                <line className={`${style.middleline}`} x1="1.18" x2="8.82" y1="5" y2="5"/>
                <line className={`${style.bottomline}`} x1="1.18" x2="8.82" y1="8.414" y2="8.414"/>
            </g>
        </svg>
    )
}
