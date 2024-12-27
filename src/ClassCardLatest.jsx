import Hearttoggle from "./Hearttoggle";

// 變數名稱大家可以改成寫死的文字或是自己的資料


function ClassCardLatest() {

    return (

       
            <div key={course.id} className="classCard">

                <figure className="classPhoto">
                    <a href="#">

                        <p>See More <img src="./images/icons-arrowRightBold.svg" alt="" /></p>
                        <img className="photo" src="./images/classphoto-01.jpg" alt="" />

                        <div className="tagHotorNew ">
                            <img src="./images/labels-hot.svg" alt="" />
                            <img src="./images/labels-new.svg" alt="" />
                        </div>
                    </a>
                </figure>
                <div className="classTag">
                    <p className="classLevel">{course.level}</p>
                    <p className="classTime">{course.duration}hr</p>
                </div>
                <div className="classTitle">
                    <h3><a href="#">{course.courseName}</a></h3>
                    <Hearttoggle heartFillId='heartfill5' heartStrikeId='heartstrike5' />
                </div>
                <div className="classPrice">
                    <p className="classStoreName"><a href="#">{course.storeName}</a></p>
                    <p className="price">$ {course.price}</p>
                </div>

            </div>
       


    )

}

export default ClassCardLatest