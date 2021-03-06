import styles from "./DrivingConditionsPage.module.scss";

import {useMemo} from "react";
import {nanoid} from "nanoid";
import {CONDITIONS} from "@constants";
import {motion} from "framer-motion";
import {container, item} from "@variants/tiles";
import Light from "@components/shared/Light";
import { WiDaySunny, WiHorizon, WiMoonWaningCrescent2 } from "react-icons/wi";
import { AiOutlineEye } from "react-icons/ai";


export default function DrivingConditionsPage({theme, methods: {update, implode}}) {

    const wrapperStyles = implode([styles.wrapper, styles[theme]]);
    const options = useMemo(() => CONDITIONS, []);

    const Icon = () => {
        switch (theme) {
            case "default": return <WiDaySunny/>;
            case "dark": return <WiHorizon/>;
            case "contrast": return <WiMoonWaningCrescent2/>;
            case "dracula": return <AiOutlineEye/>;
        }
    }

    return (
        <main role="main" className={wrapperStyles}>

            <div className="container flex justify-center mt-16">
                <div className="w-5/6 lg:w-3/4 mb-20">

                    <form>

                        <fieldset>
                            <legend id="legend-1">
                                <h1 className="text-2xl"><Light>Choose your favorite</Light> driving condition:</h1>
                            </legend>
                            <motion.ul
                                aria-labelledby="legend-1"
                                role="radiogroup"
                                variants={container}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className={styles.fieldGroup}
                            >
                                {Object.keys(options).map(key => {
                                    const option = options[key];
                                    return (
                                        <motion.li
                                            key={nanoid()}
                                            role="radio"
                                            aria-checked={option.value === theme}
                                            tabIndex="0"
                                            aria-labelledby={"label_" + option.value}
                                            data-value={option.label}
                                            variants={item}
                                            className={styles.tile + " " + (option.value === theme ? styles.active : "") }
                                            onClick={() => update(option.value)}
                                        >
                                            <label id={"label_" + option.value}>{ option.label }</label>
                                            { option.value === theme && <Icon aria-hidden="true"/> }
                                        </motion.li>
                                    )
                                })}
                            </motion.ul>
                        </fieldset>

                    </form>

                </div>
            </div>

        </main>
    )

}
