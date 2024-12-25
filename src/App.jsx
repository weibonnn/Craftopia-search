import { useState } from 'react';
import './css/App.css';
import 'csshake/dist/csshake.min.css';
import SearchSection from './SearchSection';
import Results from './Results';
import ClassList from './ClassList';
import courseData from "../public/courseData";




function App() {

  // 課程搜尋篩選條件
  const [filteredCourses, setFilteredCourses] = useState(courseData); //初始狀態未篩選顯示所有課程

  const handleSearch = (filters) => {

    const { location, type, date, adults, children } = filters;
    const filtered = courseData.filter((course) => {
      // 目前篩選條件只有地點與類型，後續可加入日期與人數
      const matchesLocation = location ? course.location === location : true;
      const matchesType = type ? course.type === type : true;

      return matchesLocation && matchesType;

    });

    setFilteredCourses(filtered);
  };


  // 管理點擊搜尋課程後顯示搜尋結果
  const [resultVisible, setResultVisible] = useState(false);

  // 點擊搜尋按鈕時的行為
  const handleSearchResult = () => {
    setResultVisible(false); // 先隱藏結果
    setTimeout(() => {
      setResultVisible(true); // 再次顯示搜尋結果
    }, 0); // 設置一個短暫延遲 (100ms)
  };


  return (
    <>

      <header id="topbar">

        <h1 className="logo"><a href="./index.html">
          <img src="./images/logo.svg" alt="Craftopia LOGO" />
        </a></h1>


        <nav className="navigation">
          <ul className="search">
            <li><a href="#"><img src="./images/icons-search.svg" alt="搜尋課程" />搜尋課程</a></li>
          </ul>
          <ul className="menu">
            <li><img src="./images/icons-menu.svg" alt="menu選單" /></li>
          </ul>
        </nav>
      </header>


      <main>

        <section className="banner">
          <h2 className='engTitle'>Discover Your Next Creative Journey !</h2>
          <h2>想去哪裡體驗什麼?</h2>


          <SearchSection handleSearch={handleSearch} handleSearchResult={() => handleSearchResult()} />


          <figure className="left-filled custom-shake-v shake-constant"><img src="./images/decor-searchBanner-leftbubbleFilled.png" alt="" /></figure>
          <figure className="left-stroke custom-shake-h shake-constant"><img src="./images/decor-searchBanner-leftbubbleStroke.png" alt="" /></figure>
          <figure className="left-tool custom-shake-t shake-constant"><img src="./images/decor-searchBanner-LeftTool.png" alt="" /></figure>
          <figure className="right-filled custom-shake-v shake-constant"><img src="./images/decor-searchBanner-rightbubbleFilled.png" alt="" /></figure>
          <figure className="right-stroke custom-shake-h shake-constant"><img src="./images/decor-searchBanner-rightbubbleStroke.png" alt="" /></figure>
          <figure className="right-tool custom-shake-t shake-constant"><img src="./images/decor-searchBanner-RightTool.png" alt="" /></figure>


        </section>





        <Results filteredCourses={filteredCourses} resultVisible={resultVisible} />



        {/* 課程搜尋結果 */}

        {/* <section className="searchResault">

          <figure className="listTitle">
            <img src="./images/title-resault.svg" alt="" />
          </figure>

          <div className="classList">

            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>

          </div>




          <div className="seeMore">

            <figure><img src="./images/small-circle.svg" alt="" /></figure>
            <div>
              <a href="#">
                <p>See</p>
                <p>More</p>
                <img className="icons-arrowDown" src="./images/icons-arrowDown.svg" alt="" />
              </a>
            </div>

          </div>

        </section> */}

        {/* 熱門課程推薦&最新上架課程 */}


        <ClassList />

        {/* <section className="hotClassRecommend">

          <figure className="listTitle">
            <img src="./images/title-hotClass.svg" alt="" />
          </figure>

          <div className="classList">

            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>
            <div className="classCard">

              <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                </a>
              </figure>
              <div className="classTag">
                <p className="classLevel">入門</p>
                <p className="classTime">3hr</p>
              </div>
              <div className="classTitle">
                <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
              </div>
              <div className="classPrice">
                <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                <p className="classPrice">$ 3800</p>
              </div>

            </div>

          </div>

          <div className="seeMore">

            <figure><img src="./images/small-circle.svg" alt="" /></figure>
            <div>
              <a href="#">
                <p>See</p>
                <p>More</p>
                <img className="icons-arrowDown" src="./images/icons-arrowDown.svg" alt="" />
              </a>
            </div>

          </div>

        </section>


        <section className="newestClass">

          <figure className="listTitle">
            <img src="./images/title-newClass.svg" alt="" />
          </figure>

          <div className="classList">

            <div className="classCard">
              
                <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-new.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                  </a>
                </figure>
                <div className="classTag">
                  <p className="classLevel">入門</p>
                  <p className="classTime">3hr</p>
                </div>
                <div className="classTitle">
                  <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                  <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
                </div>
                <div className="classPrice">
                  <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                  <p className="classPrice">$ 3800</p>
                </div>
              
            </div>

            <div className="classCard">
              
                <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-new.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                  </a>
                </figure>
                <div className="classTag">
                  <p className="classLevel">入門</p>
                  <p className="classTime">3hr</p>
                </div>
                <div className="classTitle">
                  <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                  <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
                </div>
                <div className="classPrice">
                  <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                  <p className="classPrice">$ 3800</p>
                </div>
              
            </div>

            <div className="classCard">
              
                <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-new.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                  </a>
                </figure>
                <div className="classTag">
                  <p className="classLevel">入門</p>
                  <p className="classTime">3hr</p>
                </div>
                <div className="classTitle">
                  <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                  <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
                </div>
                <div className="classPrice">
                  <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                  <p className="classPrice">$ 3800</p>
                </div>
              
            </div>

            <div className="classCard">
              
                <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-new.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                  </a>
                </figure>
                <div className="classTag">
                  <p className="classLevel">入門</p>
                  <p className="classTime">3hr</p>
                </div>
                <div className="classTitle">
                  <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                  <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
                </div>
                <div className="classPrice">
                  <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                  <p className="classPrice">$ 3800</p>
                </div>
              
            </div>

            <div className="classCard">
              
                <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-new.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                  </a>
                </figure>
                <div className="classTag">
                  <p className="classLevel">入門</p>
                  <p className="classTime">3hr</p>
                </div>
                <div className="classTitle">
                  <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                  <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
                </div>
                <div className="classPrice">
                  <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                  <p className="classPrice">$ 3800</p>
                </div>
              
            </div>

            <div className="classCard">
              
                <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-new.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                  </a>
                </figure>
                <div className="classTag">
                  <p className="classLevel">入門</p>
                  <p className="classTime">3hr</p>
                </div>
                <div className="classTitle">
                  <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                  <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
                </div>
                <div className="classPrice">
                  <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                  <p className="classPrice">$ 3800</p>
                </div>
              
            </div>


            <div className="classCard">
              
                <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-new.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                  </a>
                </figure>
                <div className="classTag">
                  <p className="classLevel">入門</p>
                  <p className="classTime">3hr</p>
                </div>
                <div className="classTitle">
                  <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                  <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
                </div>
                <div className="classPrice">
                  <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                  <p className="classPrice">$ 3800</p>
                </div>
              
            </div>


            <div className="classCard">
              
                <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-new.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                  </a>
                </figure>
                <div className="classTag">
                  <p className="classLevel">入門</p>
                  <p className="classTime">3hr</p>
                </div>
                <div className="classTitle">
                  <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                  <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
                </div>
                <div className="classPrice">
                  <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                  <p className="classPrice">$ 3800</p>
                </div>
              
            </div>

            <div className="classCard">
              
                <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-new.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                  </a>
                </figure>
                <div className="classTag">
                  <p className="classLevel">入門</p>
                  <p className="classTime">3hr</p>
                </div>
                <div className="classTitle">
                  <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                  <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
                </div>
                <div className="classPrice">
                  <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                  <p className="classPrice">$ 3800</p>
                </div>
              
            </div>

            <div className="classCard">
              
                <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-new.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                  </a>
                </figure>
                <div className="classTag">
                  <p className="classLevel">入門</p>
                  <p className="classTime">3hr</p>
                </div>
                <div className="classTitle">
                  <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                  <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
                </div>
                <div className="classPrice">
                  <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                  <p className="classPrice">$ 3800</p>
                </div>


                
              
            </div>


            <div className="classCard">
              
                <figure className="classPhoto">
                <a href="#">
                  <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                  <img className="tagHotorNew" src="./images/labels-new.svg" alt="" />
                  <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                  </a>
                </figure>
                <div className="classTag">
                  <p className="classLevel">入門</p>
                  <p className="classTime">3hr</p>
                </div>
                <div className="classTitle">
                  <h3><a href="#">創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課</a></h3>
                  <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
                </div>
                <div className="classPrice">
                  <p className="classStoreName"><a href="#">草樹工作坊</a></p>
                  <p className="classPrice">$ 3800</p>
                </div>
              
            </div>

            

          </div>

          

          <div className="seeMore">
            <figure><img src="./images/small-circle.svg" alt="" /></figure>
            <div>
              <a href="#">
                <p>See</p>
                <p>More</p>
                <img className="icons-arrowDown" src="./images/icons-arrowDown.svg" alt="" />
              </a>
            </div>

          </div>

        </section> */}


      </main>


      {/* 頁尾區 */}

      <footer>
        <div className="footer-bgDeco">
          <img src="./images/footer-deco.png" alt="" />
        </div>
        <div className="foot-content">
          <img src="./images/footer-logo.svg" alt="" />

          <ul className="menu">
            <li><a href="">首頁</a></li>
            <li>
              <a href="">發掘店家</a>
              <ul>
                <li><a href="">金工</a></li>
                <li><a href="">陶藝</a></li>
                <li><a href="">皮革</a></li>
              </ul>
            </li>
            <li>
              <a href="">預約課程</a>
              <ul>
                <li><a href="">熱門課程</a></li>
                <li><a href="">最新課程</a></li>
              </ul>
            </li>

            <li>
              <a href="">會員中心</a>
              <ul>
                <li><a href="">會員資料</a></li>
                <li><a href="">預約紀錄</a></li>
                <li><a href="">收藏紀錄</a></li>
                <li><a href="">我的分享</a></li>
              </ul>
            </li>


            <li>
              <a href="">常見問題</a>
              <ul>
                <li><a href="">會員相關</a></li>
                <li><a href="">預約相關</a></li>
                <li><a href="">課程相關</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <small> Copyright© 2024 CRAFTOPIA All rights reserved. </small>
      </footer>

    </>
  )
}

export default App
