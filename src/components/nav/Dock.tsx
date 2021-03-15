import { Image } from "@chakra-ui/image";
import styles from "./Dock.module.css";

export default function Dock() {
    return(
        <div className={`fixed py-2 px-4 bg-white rounded-xl ${styles.dock} shadow-md w-4/5 lg:w-auto`}>
            <div className="flex justify-between space-x-4 lg:space-x-8">
                <Image className={`cursor-pointer ${styles.app} transition duration-300 ease-in-out`} src="/img/facetime.png" boxSize={40} />
                <Image className={`cursor-pointer ${styles.app} transition duration-300 ease-in-out`} src="/img/messages.png" boxSize={40} />
                <Image className={`cursor-pointer ${styles.app} transition duration-300 ease-in-out`} src="/img/photos.png" boxSize={40} />
                <Image className={`cursor-pointer ${styles.app} transition duration-300 ease-in-out`} src="/img/feedbackassistant.png" boxSize={40} />
            </div>
        </div>
    )
}