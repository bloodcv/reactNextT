import Menu from "@app/components/Menu";


export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (

    <div
      className="
        flex
        min-h-screen
      "
    >

      <Menu />


      <main
        className="
          flex-1
          p-6
        "
      >

        {children}

      </main>


    </div>

  );

}