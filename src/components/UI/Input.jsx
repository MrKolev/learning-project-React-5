import styles from './Input.module.css'

export const Input = ({ label="", input={} }) => {
    return <div className={styles.input}>
        <label htmlFor={input.id} >{label}</label>
        <input {...input} />
    </div>



}