import { CardProduct } from "./Components/CardProduct";
import { Credits } from "./Components/Credits";

export function App() {

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <CardProduct />
        <Credits />
      </div>
    </>
  )
}