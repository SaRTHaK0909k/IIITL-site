import Head from "./Heading_transition";
import 'animate.css';
import Image from "next/image";
import Link from "next/link";


const Heading = () => {
  return (
    <div className="animate__bounce p-10 flex w-full justify-between items-center">
      <div className="object-left">
          <Link href="/">
            <Image
              src='/iiitlLogo.png'
              alt="IIITL"
              width={300}
              height={10}
            />
          </Link>
        </div>
        <Head/>
        {/* <span className=" float-right animate__zoomOutRight  text-gray-500 ">(An Institute of National Importance by the Act of Parliament)</span> */}
    </div>
  )
}

export default Heading
