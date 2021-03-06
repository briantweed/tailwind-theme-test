import styles from "./Header.module.scss";

import Light from "@components/shared/Light";
import Toggle from "./Toggle";


export default function Header({theme, label, methods: {implode}}) {

    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    return (
        <div role="banner" className={wrapperStyles}>
            <div className={styles.content}>
                <h1 className={styles.title}><Toggle/></h1>
                <h2 role="presentation" className={styles.theme}>{ label } <Light>Theme</Light></h2>
            </div>
        </div>
    )

}