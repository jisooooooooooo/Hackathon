import React from "react";
import styles from "../Styles/ContentPage.module.css";
import IMG1 from "../assets/image1.png";
import IMG2 from "../assets/image2.png";
import IMG3 from "../assets/image3.png";
import IMG4 from "../assets/image4.png";
import IMG5 from "../assets/image5.png";
import IMG6 from "../assets/image6.png";

const ContentsPage = () => {
  const articles = [
    {
      id: 1,
      title: "5년차 영양사의 아이 간식 추천",
      content:
        "모든 아이가 건강하게 먹을 수 있는 안전간식 10가지를 들고 와 봤어요~!",
      imageUrl: IMG1,
    },
    {
      id: 2,
      title: "당뇨아이 엄마의 일주일 레시피",
      content:
        "저희 아이와 비슷한 증상인 아이들이 많을 것 같아서 공유합니다! 특히 당류에 조심해서 짠 식단이니 많은 도움이 되셨으면 좋겠어요~ ",
      imageUrl: IMG2,
    },
    {
      id: 3,
      title: "우리 아이 아토피 의심된다면?",
      content:
        "저희 아이와 비슷한 증상인 아이들이 많을 것 같아서 공유합니다! 특히 당류에 조심해서 짠 식단이니 많은 도움이 되셨으면 좋겠어요~ ",
      imageUrl: IMG3,
    },
    {
      id: 4,
      title: "아이가 좋아하는 건강 간식",
      content:
        "저희 아이와 비슷한 증상인 아이들이 많을 것 같아서 공유합니다! 특히 당류에 조심해서 짠 식단이니 많은 도움이 되셨으면 좋겠어요~ ",
      imageUrl: IMG4,
    },
    {
      id: 5,
      title: "까다로운 아이도 잘 먹는 영양제",
      content:
        "저희 아이와 비슷한 증상인 아이들이 많을 것 같아서 공유합니다! 특히 당류에 조심해서 짠 식단이니 많은 도움이 되셨으면 좋겠어요~ ",
      imageUrl: IMG5,
    },
    {
      id: 6,
      title: "당뇨아이 엄마의 일주일 레시피",
      content:
        "저희 아이와 비슷한 증상인 아이들이 많을 것 같아서 공유합니다! 특히 당류에 조심해서 짠 식단이니 많은 도움이 되셨으면 좋겠어요~ ",
      imageUrl: IMG6,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.title}>이런 글도 읽어보세요</div>
      <div className={styles.scrollContainer}>
        {articles.map((article) => (
          <div key={article.id} className={styles.box}>
            <div className={styles.boximg}>
              <img src={article.imageUrl} alt="아티클 이미지" />
            </div>
            <div className={styles.boxcontent}>
              <div className={styles.boxcontenttitle}>{article.title}</div>
              <div className={styles.boxcontenttitle2}>{article.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentsPage;
