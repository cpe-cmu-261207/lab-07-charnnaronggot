import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const baseURL = "https://dummyapi.io/data/api";
const Home = () => {
  return (
    <>
      <table>
        <table id="Head">
          <tr>
            <th>
              <Link href="/">Homepage </Link>
            </th>
            <th>
              <Link href="/Gpacalc">GPACalculator</Link>
            </th>
            <th>
              <Link href="/Gallery">Gallery</Link>
            </th>
            <th>
              <Link href="/Contract">Contract</Link>
            </th>
            <th>
              <Link href="/post">Posts</Link>
            </th>
          </tr>
          <tr></tr>
        </table>
        <table>
          <table>
            <tr>
              <td>
                <h1>Charnnarong Charoensaningkun </h1>
                <h3>Student</h3>
                <h2>Charnnarong_c@cmu.ac.th</h2>
              </td>
              <th>
                <img width="200px" src="Resource/9.jpg" alt="5" />
              </th>
            </tr>
          </table>
        </table>
      </table>
      <h1>Profile</h1>
      <p>นายชาญณรงค์ เจริญสนองกุล 620612146 </p>
      <h3>Education</h3>
      <p>Sanpatong Wittayakom , Chiang Mai University</p>
      <h2>Skill&Technical</h2>
      <p>C++ Java</p>
    </>
  );
};

export default Home;
