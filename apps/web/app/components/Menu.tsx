import Link from "next/link";

import { menus } from "@app/config/menus";


export default function Menu() {

  return (
    <aside
      className="
        w-64
        shrink-0
        border-r
        p-4
      "
    >

      <h1
        className="
          mb-6
          text-xl
          font-bold
        "
      >
        Menu
      </h1>


      <nav
        className="
          flex
          flex-col
          gap-2
        "
      >

        {
          menus.map(item => (

            <Link
              key={item.href}
              href={item.href}
              className="
                rounded
                px-3
                py-2
                hover:bg-gray-100
              "
            >
              {item.name}
            </Link>

          ))
        }

      </nav>


    </aside>
  );
}