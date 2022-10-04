import {FaCrown} from 'react-icons/fa'
import MainHeader from '../MainHead/MainHeader'
import {programs} from '../../data'
import Cards from '../../UI/Cards'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'


const Programs = () => {
  return (
    <section className='program_section'>
        <div className="container program_container">
            <MainHeader icon={<FaCrown/>} title="Programs"/>
            <div className="progrmas_wraper">
              {
                  programs.map(({id,icon,title,info,path}) => {
                    return (
                      <Cards className="programs_cards" key={id}>
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{info}</small>
                        <Link to={path} className="btn-1 sm">Learn More <AiFillCaretRight /></Link>
                      </Cards>
                    )
                  })
              }
            </div>
        </div>
    </section>
  )
}

export default Programs