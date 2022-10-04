import {FaCrown} from 'react-icons/fa'

const MainHeader = ({icon,title,className}) => {
  return (
    <div className={`program_head ${className}`}>
     {/* <div className={"program_head" +{className}}> */}
            <span>{icon}</span>
            <h2>{title}</h2>
    </div>
  )
}

export default MainHeader