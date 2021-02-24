import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/bourdog.png" alt="Igor Santana" />
            <div>
                <strong>Igor Santana</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}