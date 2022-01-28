import { BsFillBagDashFill, BsPeopleFill } from 'react-icons/bs'
import { IoNotifications } from 'react-icons/io5'
import { RiMessage3Fill } from 'react-icons/ri'
import { TiHome } from 'react-icons/ti'

const Tags = [
  'About',
  'Accessibility',
  'Help Center',
  'Help Center',
  'Price & Terms',
  'Ad Choice',
  'Advertising',
  'Business Service',
  'Get the Linkedln spp',
  'More',
]

// const HeaderIcon = [
//   {
//     icon: <TiHome size={22} className="" style={{ color: '#6e6558' }} />,
//     title: 'Home',
//   },
//   {
//     icon: <BsPeopleFill size={22} style={{ color: '#6e6558' }} />,
//     title: 'Network',
//   },
//   {
//     icon: <BsFillBagDashFill size={22} style={{ color: '#6e6558' }} />,
//     title: 'Jobs',
//   },
//   {
//     icon: <RiMessage3Fill size={22} style={{ color: '#6e6558' }} />,
//     title: 'Messaging',
//   },
//   {
//     icon: <IoNotifications size={22} style={{ color: '#6e6558' }} />,
//     title: 'Messaging',
//   },
// ]
const HeaderIcon = [
  {
    icon: TiHome,
    title: 'Home',
  },
  {
    icon: BsPeopleFill,
    title: 'Network',
  },
  {
    icon: BsFillBagDashFill,
    title: 'Jobs',
  },
  {
    icon: RiMessage3Fill,
    title: 'Messaging',
  },
  {
    icon: IoNotifications,
    title: 'Messaging',
  },
]

export { HeaderIcon, Tags }
