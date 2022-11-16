import React, {ChangeEvent, useState, WheelEvent} from 'react';
import styles from './Select.module.css'
import arrow from '../../assets/keyboard_arrow_down.svg'

export const Select = () => {
    const [isOpen, setIsOpen] = useState(false)
    const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e)
    }
    const x = (event: WheelEvent<HTMLOptionElement>) => {
        console.log(event)
    }
    return (
        <div className={styles.selectWrapper}>
            <select className={styles.select}
                    onChange={(e) => selectHandler(e)}
                    onClick={() => setIsOpen(prevState => !prevState)}
                    onBlur={() => setIsOpen(false)}
            >
                <option className={styles.option} value="new"
                        onWheelCapture={(e) => x(e)}
                >
                    New blogs first
                </option>
                <option className={styles.option} value="old">
                    Old blogs first
                </option>
                <option className={styles.option} value="a">
                    From A to Z
                </option>
                <option className={styles.option} value="z">
                    From Z to A
                </option>
            </select>
            <img src={arrow} alt="arrow" className={isOpen ? styles.arrowUp: styles.arrowDown}/>
        </div>
    );
};