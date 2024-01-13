import Linkees, { CHANNEL_TYPES } from "linkees";
import "./App.css";

function App() {
  const items = [
    {
      title: "Blog",
      subtitle: "Look at my work!",
      type: CHANNEL_TYPES.WEBSITE,
      link: "https://blog.fosspage.com/", //your personal website or portfolio  link
    },
    {
      title: "GitHub",
      subtitle: "@prathamdupare ",
      type: CHANNEL_TYPES.GITHUB,
      link: "https://github.com/prathamdupare", //Github Profile link
    },
    {
      title: "Instagram",
      subtitle: "@pratham_mess",
      type: CHANNEL_TYPES.INSTAGRAM,
      link: "https://instagram.com/pratham_mess", //instagram profile link
    },
    {
      title: "Twitter",
      subtitle: "@prathammdupare",
      type: CHANNEL_TYPES.TWITTER,
      link: "https://twitter.com/prathammdupare", // twitter profile link
    },
    {
      title: "LinkedIn",
      subtitle: "Know more about my profession 👨‍💼",
      type: CHANNEL_TYPES.LINKEDIN,
      link: "https://www.linkedin.com/in/pratham-dupare-a99b97247/", // linkedin
    },
  ];

  return (
    <>
      <div>
        <Linkees cardItems={items} name={"Pratham"} />{" "}
      </div>
    </>
  );
}

export default App;
