import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://res.cloudinary.com/dqvaejele/image/upload/v1669819735/WhatsApp_Image_2022-11-30_at_8.17.50_PM_gw1kg8.jpg',
    name: 'Salman',
    role: 'UI/UX Developer',
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://res.cloudinary.com/dqvaejele/image/upload/v1663773228/WhatsApp_Image_2022-09-21_at_8.43.16_PM_zk8a9n.jpg',
    name: 'sandhya',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Sofy',
    role: 'SQL Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Tarun',
    role: 'React Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
