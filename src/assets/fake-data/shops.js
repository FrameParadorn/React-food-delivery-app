import image1 from "../images/shop1.png"
import image2 from "../images/shop2.png"
import image3 from "../images/shop3.png"
import image4 from "../images/shop4.png"


const TYPE_1 = "ตามสั่ง"
const TYPE_2 = "ไก่ทอด"
const TYPE_3 = "ก๋วยเตี๋ยว"
const TYPE_4 = "น้ำ"

const shops = [
  {
    id: "1",
    title: "ร้านสะบัดมือ",
    profile_image: image1,
    category: TYPE_1,
  },
  {
    id: "2",
    title: "ร้านไก่ทอด 309 ซ.19",
    profile_image: image2,
    category: TYPE_2,
  },
  {
    id: "3",
    title: "ร้านกั๋วยเตี๋ยว",
    profile_image: image3,
    category: TYPE_3,
  },
  {
    id: "4",
    title: "ร้าน BearBike หมีปั่น",
    profile_image: image4,
    category: TYPE_4,
  },

];

export default shops;
