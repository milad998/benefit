import React from 'react'
import styles from './page.module.css'

const Footer = () => {
    const dataTime =25
  return (
    <div className={styles.container}>
        <table className={styles.table}>
            <tbody className={styles.tbody}>
                <tr>
                    <td>
                        <img src="./benefi.png" alt="benefit logo" />
                    </td>
                    <td>
                        <font style={{color:'black'}}>
                            <b>Powered By The BENEFIT Company. </b>
                            <br />
                            <b>Copyright © 2020-2025 The BENEFIT Company. All Rights Reserved. </b>
                        </font>
                    </td>
                    <td style={{color:'black'}}>
                        Licensed by Central Bank of Bahrain as Ancillary Service Provider. 
                        
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Footer