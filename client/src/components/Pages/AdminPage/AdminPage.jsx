import React from 'react';
import Button from '../../Button/Button';
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
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Level</th>
                        <th>Questions Asked</th>
                        <th>Questions Answered</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1118393</td>
                        <td>Ezpionage</td>
                        <td>21100483@virtualwindow.co.za</td>
                        <td>Second Year</td>
                        <td>23</td>
                        <td>11</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
