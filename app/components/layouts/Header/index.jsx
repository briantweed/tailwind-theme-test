import styles from './Header.module.scss';
import {useAppContext} from "@libraries/ThemeWrapper";


export default function Header() {

    const {theme, implode, label} = useAppContext();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    return (
        <div className={wrapperStyles}>

            <div className={styles.content}>

                <h1 className={styles.title}>Theme <span className="font-light">Test</span></h1>
                <h2 className='text-sm'>{ label } <span className="font-light">Theme</span></h2>

            </div>

        </div>
    )
}