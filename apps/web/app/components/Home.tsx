import Link from "next/link";


export default function Home() {


  return (

    <div>

      <h1
        className="
          text-3xl
          font-bold
        "
      >
        Home
      </h1>


      <p
        className="
          mt-4
        "
      >
        Welcome Home
      </p>


      <div
        className="
          mt-6
          flex
          flex-col
          gap-3
        "
      >

        <Link
          href="/page-one"
          className="
            rounded
            bg-gray-100
            p-3
          "
        >
          Page One
        </Link>


        <Link
          href="/page-two"
          className="
            rounded
            bg-gray-100
            p-3
          "
        >
          Page Two
        </Link>


      </div>


    </div>

  );

}