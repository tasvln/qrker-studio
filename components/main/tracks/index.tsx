import React from "react";
import styles from './index.module.scss'

const Tracks: React.FC = () => {
  const [trackName, setTrackName] = React.useState<string | any>('Track #1');

  // React.useEffect(() => {
  //   if (!trackName) {
  //     setTrackName('NoName')
  //   }
  // }, [trackName])

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.track}>
          <div className={styles.name}>
            <span>Track Name</span>
            <input 
              type={"text"}
              value={trackName} 
              onChange={(e) => setTrackName(e.target.value)} 
            />
          </div>
          <div className={styles.clicks}>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
      <div className={styles.tracks}>
        <div className={styles.audio}>

        </div>
      </div>
    </div>
  )
}

export default Tracks;