import imageDoctor1 from "../assets/doctors/doctor1.png"
import imageDoctor2 from "../assets/doctors/doctor2.png"
import imageDoctor3 from "../assets/doctors/doctor3.png"
import imageDoctor4 from "../assets/doctors/doctor4.png"
import imageDoctor5 from "../assets/doctors/doctor5.png"
import imageDoctor6 from "../assets/doctors/doctor6.png"

import { FaXTwitter } from "react-icons/fa6"
import { FaFacebook, FaInstagram } from "react-icons/fa"

export const doctors = [
  {
    name: "Vanseena Adams",
    image: imageDoctor1,
    specialty: "Stuff Nurse",
    socialMidias: {
      Instagram: FaInstagram,
      Facebook: FaFacebook,
      X: FaXTwitter,
    }
  },
  {
    name: "Dr. Helen Wilmore",
    image: imageDoctor2,
    specialty: "Surgery Expert",
    socialMidias: {
      Facebook: FaFacebook,
      X: FaXTwitter,
    }
  },
  {
    name: "Dr. Kate Winslot",
    image: imageDoctor3,
    specialty: "Dental Specialist",
    socialMidias: {
      Facebook: FaFacebook,
      X: FaXTwitter,
    }
  },
  {
    name: "Dr. Sonia Cameron",
    image: imageDoctor4,
    specialty: "Surgery Expert",
    socialMidias: {
      Instagram: FaInstagram,
      Facebook: FaFacebook,
      X: FaXTwitter,
    }
  },
  {
    name: "Dr. Lily Smith",
    image: imageDoctor5,
    specialty: "Dental Specialist",
    socialMidias: {
      Instagram: FaInstagram,
      Facebook: FaFacebook,
    }
  },
  {
    name: "Dr. Emily Bells",
    image: imageDoctor6,
    specialty: "Stuff Nurse",
    socialMidias: {
      Facebook: FaFacebook,
      X: FaXTwitter,
    }
  }
]
