import React from 'react';
import Input from '../../Input/Input';
import TextCarousel from '../../TextCarousel/TextCarousel';
import styles from './AdminPage.module.scss';

export default function AdminPage() {
  return (
    <div className={styles.container}>

        <div className={styles.pageContent}>
            <h1>Admin Page</h1>
            <h2>Overview</h2>
            <TextCarousel/>
            <hr />
            <br />
            <Input type="searchFilter" inputType="text" placeholder="Search Users"/>
            <br />
            <br />
            <table>
                <tr>
                    <th><p>Id</p></th>
                    <th><p>Username</p></th>
                    <th><p>Email</p></th>
                    <th><p>Questions Asked</p></th>
                    <th><p>Questions Answered</p></th>
                </tr>
                <tr>
                    <td>4304349JHfndj</td>
                    <td>CrunchBurger420</td>
                    <td>21100243@virtualwindow.co.za</td>
                    <td>23</td>
                    <td>11</td>
                </tr>
                <tr>
                    <td>4304349JHfndj</td>
                    <td>CrunchBurger420</td>
                    <td>21100243@virtualwindow.co.za</td>
                    <td>23</td>
                    <td>11</td>
                </tr>
            </table>
        </div>
    </div>
  )
}
