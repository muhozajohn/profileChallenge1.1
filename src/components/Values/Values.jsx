import {values} from '../../data'
import MainHeader from '../MainHead/MainHeader'
import {GiCutDiamond} from 'react-icons/gi'
import Cards from '../../UI/Cards'
import Image from '../../images/slide4.jpg'

const Values = () => {
  return (
    <section className='Values'>
        <div className="container value-container">
            <div className="values_left">
                <div className="values_image">
                    <img src={Image} alt="Values" />
                </div>
            </div>
            <div className="values_right"></div>

        </div>
    </section>
  )
}

export default Values