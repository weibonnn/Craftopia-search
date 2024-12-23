import courseData from "../public/courseData";





function ClassList() {


    /* const courseData = [
        { id: 1, courseName: "專屬銀飾打造入門班", storeName: "金藝夢想工坊", type: "金工", location: "中正區", level: "入門", duration: 3, price: 1800, hot: true, releaseDate: "2024-10-15" },
        { id: 2, courseName: "情侶銀飾設計體驗", storeName: "匠心工坊", type: "金工", location: "大安區", level: "入門", duration: 2, price: 1500, hot: false, releaseDate: "2024-08-10" },
        { id: 3, courseName: "戒指與項鍊製作課程", storeName: "手作時光", type: "金工", location: "信義區", level: "進階", duration: 4, price: 2500, hot: true, releaseDate: "2024-09-01" },
        { id: 4, courseName: "陶瓷碗盤創意課程", storeName: "泥與火生活館", type: "陶藝", location: "士林區", level: "入門", duration: 3, price: 1800, hot: true, releaseDate: "2024-10-05" },
        { id: 5, courseName: "親子陶藝趣味班", storeName: "陶樂時光", type: "陶藝", location: "文山區", level: "入門", duration: 2, price: 1200, hot: false, releaseDate: "2024-11-15" },
        { id: 6, courseName: "基礎拉胚技巧入門", storeName: "工藝生活館", type: "陶藝", location: "內湖區", level: "進階", duration: 4, price: 3200, hot: true, releaseDate: "2024-12-20" },
        { id: 7, courseName: "專屬皮革名片夾製作", storeName: "皮革物語工作室", type: "皮革", location: "松山區", level: "入門", duration: 1, price: 1400, hot: false, releaseDate: "2024-01-05" },
        { id: 8, courseName: "個性化皮件設計班", storeName: "手工匠人集社", type: "皮革", location: "中山區", level: "進階", duration: 3, price: 2200, hot: true, releaseDate: "2024-02-10" },
        { id: 9, courseName: "專屬銀飾設計與製作", storeName: "金匠學堂", type: "金工", location: "大同區", level: "進階", duration: 4, price: 3000, hot: true, releaseDate: "2024-09-25" },
        { id: 10, courseName: "陶藝花器製作體驗", storeName: "陶然時光", type: "陶藝", location: "大安區", level: "入門", duration: 2, price: 1600, hot: false, releaseDate: "2024-10-20" },
        { id: 11, courseName: "高級拉胚陶藝課程", storeName: "藝匠陶舍", type: "陶藝", location: "中正區", level: "進階", duration: 4, price: 3500, hot: true, releaseDate: "2024-03-01" },
        { id: 12, courseName: "手工皮革收納包製作", storeName: "皮藝夢工坊", type: "皮革", location: "大安區", level: "入門", duration: 2, price: 1800, hot: false, releaseDate: "2024-02-25" },
        { id: 13, courseName: "創意銀飾DIY體驗", storeName: "銀河夢工坊", type: "金工", location: "中山區", level: "入門", duration: 3, price: 2000, hot: true, releaseDate: "2024-01-15" },
        { id: 14, courseName: "手工陶器DIY基礎", storeName: "陶匠藝術館", type: "陶藝", location: "信義區", level: "入門", duration: 2, price: 1300, hot: false, releaseDate: "2024-11-30" },
        { id: 15, courseName: "專屬皮革錢包設計", storeName: "皮藝學堂", type: "皮革", location: "內湖區", level: "進階", duration: 3, price: 2700, hot: true, releaseDate: "2024-03-10" },
        { id: 16, courseName: "銀飾情侶對戒製作", storeName: "匠心銀飾館", type: "金工", location: "士林區", level: "進階", duration: 4, price: 3200, hot: true, releaseDate: "2024-09-10" },
        { id: 17, courseName: "親子陶藝花盆製作", storeName: "泥火創作坊", type: "陶藝", location: "松山區", level: "入門", duration: 2, price: 1500, hot: false, releaseDate: "2024-12-01" },
        { id: 18, courseName: "手工皮革肩背包體驗", storeName: "皮革工作坊", type: "皮革", location: "信義區", level: "進階", duration: 4, price: 3500, hot: true, releaseDate: "2024-02-05" },
        { id: 19, courseName: "陶瓷花瓶設計班", storeName: "陶藝工坊", type: "陶藝", location: "大同區", level: "入門", duration: 3, price: 2000, hot: false, releaseDate: "2024-08-25" },
        { id: 20, courseName: "金屬雕刻基礎班", storeName: "金屬藝術館", type: "金工", location: "文山區", level: "入門", duration: 3, price: 2500, hot: true, releaseDate: "2024-07-30" }
    ]; */


    /* 篩選出熱門課程 */
    const hotCourse = courseData.filter((course) => course.hot);



    /* 篩選出最新一個月內上架課程 */
    // 取得今天的日期
    const today = new Date();

    // 取得三個月前的日期
    const monthAgo = new Date();
    monthAgo.setMonth(today.getMonth() - 3);  //setMonth 設定月份

    // 篩選出最新課程
    const latestCourses = courseData.filter((course) => {
        const releaseDate = new Date(course.releaseDate); // 取得課程資料裡的上架日期
        return releaseDate >= monthAgo && releaseDate <= today; // 回傳 一個月內上架的課程&檢查上架日期是否在今天以前
    });



    



    return (
        <>
            {/* 熱門推薦課程 */}
            <section className="hotClassRecommend">

                <figure className="listTitle">
                    <img src="./images/title-hotClass.svg" alt="" />
                </figure>

                <div className="classList">


                    {hotCourse.map((course) => (
                        <div key={course.id} className="classCard">

                            <figure className="classPhoto">
                                <a href="#">
                                    <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                                    <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                                    <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                                </a>
                            </figure>
                            <div className="classTag">
                                <p className="classLevel">{course.level}</p>
                                <p className="classTime">{course.duration}hr</p>
                            </div>
                            <div className="classTitle">
                                <h3><a href="#">{course.courseName}</a></h3>
                                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
                            </div>
                            <div className="classPrice">
                                <p className="classStoreName"><a href="#">{course.storeName}</a></p>
                                <p className="classPrice">$ {course.price}</p>
                            </div>

                        </div>
                    ))}

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

            {/* 最新上架課程 */}
            <section className="newestClass">

                <figure className="listTitle">
                    <img src="./images/title-newClass.svg" alt="" />
                </figure>

                <div className="classList">

                    {latestCourses.map((course) => (

                        <div key={course.id} className="classCard">

                            <figure className="classPhoto">
                                <a href="#">
                                    <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                                    <img className="tagHotorNew" src="./images/labels-new.svg" alt="" />
                                    <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                                </a>
                            </figure>
                            <div className="classTag">
                                <p className="classLevel">{course.level}</p>
                                <p className="classTime">{course.duration}hr</p>
                            </div>
                            <div className="classTitle">
                                <h3><a href="#">{course.courseName}</a></h3>
                                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
                            </div>
                            <div className="classPrice">
                                <p className="classStoreName"><a href="#">{course.storeName}</a></p>
                                <p className="classPrice">$ {course.price}</p>
                            </div>

                        </div>


                    ))}





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


        </>
    )






}


export default ClassList