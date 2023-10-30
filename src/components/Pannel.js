import { t } from 'i18next'
import '../styles/Pannel.css'

function Pannel() {
    
    return (
        <div className='inx-eco-pannel'>
            <h2>{t('pannel_title')}</h2>
            <p>{t('pannel_instructions')}</p>
        </div>
    )
}

export default Pannel