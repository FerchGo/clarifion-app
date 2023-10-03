import {React} from 'react'
import '@radix-ui/themes/styles.css';
import './index.css'
import DecorativeBox from './DecorativeBox'
import DecorativeBoxtwo from './DecorativeBoxtwo'
import DecorativeBoxthree from './DecorativeBoxthree'

const Mainbanner = () => {

  return (
    <div className='frame9'>
            <div>
                <DecorativeBox />
            </div>
            <div>
                <DecorativeBoxtwo />
            </div>
            <div>
                <DecorativeBoxthree />
            </div>
    </div>
  )
}

export default Mainbanner