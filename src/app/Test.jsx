import React from 'react'
import styles from './page.module.css'

const Navbar = () => {
    const dataTime =25
  return (
    <div className={styles.container}>
        <table className={styles.table}>
            <tbody className={styles.tbody}>
                <tr>
                    <td>
                        <img src="./benefit.jpg" alt="benefit logo" />
                    </td>
                    <td>
                        <font>
                            <b>BENEFIT PAYMENT GETWAY</b>
                            <br />
                            <b>{dataTime}</b>
                        </font>
                    </td>
                    <td>
                        TAP PAYMENTS 
                        <br />
                        https://tap.company
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Navbar
