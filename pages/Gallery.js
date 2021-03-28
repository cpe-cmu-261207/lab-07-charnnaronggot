import Link from "next/link";
const Gallery = () => {
  return (
    <>
      <table>
        <table id="Head">
          <tr>
            <Link href="/"> Homepage</Link>

            <Link href="/Gallery"> Gallery</Link>

            <Link href="/Contract">Contract </Link>
          </tr>
        </table>
        <table>
          <table>
            <tr>
              <td>
                <h1>Charnnarong Charroensanongkun</h1>
                <h3>Student</h3>
                <h2>Charnnarong_c@cmu.ac.th</h2>
              </td>
              <th>
                <img width="200px" src="Resource/9.jpg" alt="5" />
              </th>
            </tr>
          </table>
        </table>
        <h1>Gallery</h1>

        <table>
          <table border="1px">
            <tr>
              <th>
                <img width="300px" src="Resource/1.png" alt="1" />
                <p>Stalin</p>
              </th>
              <th>
                <img width="300px" src="Resource/2.jpg" alt="2" />
                <p>Bertram Ramsay</p>
              </th>
              <th>
                <img width="300px" src="Resource/3.jpg" alt="3" />
                <p>Dog</p>
              </th>
            </tr>
            <tr>
              <th>
                <img width="300px" src="Resource/4.png" alt="4" />
                <p>cat</p>
              </th>
              <th>
                <img width="300px" src="Resource/5.jpg" alt="5" />
                <p>Hard bass</p>
              </th>
              <th>
                <img width="300px" src="Resource/6.jpg" alt="6" />
                <p>lana del ray</p>
              </th>
            </tr>
            <tr>
              <th>
                <img width="300px" src="Resource/7.jpg" alt="7" />
                <p>Redremasted</p>
              </th>
              <th>
                <img width="300px" src="Resource/8.jpg" alt="8" />
                <p>Stonk</p>
              </th>
              <th>
                <img width="300px" src="Resource/9.jpg" alt="9" />
                <p>Pee To</p>
              </th>
            </tr>
          </table>
        </table>
      </table>
    </>
  );
};

export default Gallery;
