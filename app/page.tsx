import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

// для продактиона этот параметр revalidate нужно устанавливать гораздо больше. типа день... в секундах

export const revalidate = 86400; /*1 день ревалидации */

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Привет! &nbsp;
        <span className="whitespace-nowrap">
          Я <span className="font-bold"> Егор </span>
        </span>
        А это тестовый блог на NEXT.JS
      </p>
      <Posts />
    </div>
  );
}
