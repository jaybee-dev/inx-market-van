import { useState } from 'react'
import {dinoList} from '../datas/dinoList'
import DinoItem from './DinoItem'
import '../styles/Calculate.css'
import '../styles/Names.css'
import { t } from 'i18next'

function Calculate() {
    const [activeName, setActiveName] = useState('')

    const [stat1, setStat1] = useState('')
    const [stat2, setStat2] = useState('')
    const [stat3, setStat3] = useState('')
    const [stat4, setStat4] = useState('')


/* coder une fonction qui permette de ne pas avoir à coder en dur du code pour chaque stat 
Il faudrait pouvoir garder uniquement le "stat", et modifier le numéro qui suit en fonction du nombre de statistiques*/ 


/* function to reset form at each dino change (and so, reset the price) */
function resetForm() {
    setStat1('')
    setStat2('')
    setStat3('')
    setStat4('')
}

let errorInfo

let valueInput = document.getElementById('stat1');
console.log(valueInput)

function verifInput() {
    if (stat1 < 80 || stat1 > 255) {
        errorInfo = "Entre 80 et 255";
    }
}

const names = dinoList.reduce(
    (acc, dino) =>
        acc.includes(dino.name) ? acc : acc.concat(dino.name),
        []
    )

    return (
        <div className='inx-eco-calc'>
            <div className='inx-eco-cat'>
                <select
                    value={activeName}
                    /* add function to reset form on change */
                    onChange={(e) => { setActiveName(e.target.value); resetForm() }}
                    className='inx-eco-name-select'
                >
                    <option value=''>{t('choose_dino')}</option>
                    {names.map((cat) => (
                        <option key={cat} value={cat}>
                            {t(cat)}
                        </option>
                    ))}
                </select>
            </div>

            <div className='inx-eco-wrap'>
                {dinoList.map(({ id, name, category, price, neutedPrice, nameStat1, nameStat2, nameStat3, nameStat4}) => 
                    activeName === name ? (
                    
                    <div className='inx-eco-main-container' key={id}>
                        <div className='inx-eco-calc-stats'>

                        

                            <div className="inx-eco-stat-container">
                                <label>{t(nameStat1)}</label><br/>
                                {nameStat1 === '' ? <p>{t('unique_price')} : {price}</p> :
                                <input className="inx-eco-stat" id={'stat'+1} type="number" placeholder={t(nameStat1)} value={Number(stat1)} onBlur={verifInput()} onChange={(e) => setStat1(e.target.value)} />
                                }
                                <span className='inx-input-info'>{errorInfo}</span>
                            </div>
                            <div className="inx-eco-stat-container">
                                <label>{t(nameStat2)}</label><br/>
                                {nameStat2 === '' ? null : 
                                <input className="inx-eco-stat" id={'stat'+2} type="number" placeholder={t(nameStat2)} value={stat2} onBlur={verifInput()} onChange={(e) => setStat2(e.target.value)} />
                                }
                                <span className='inx-input-info'>{errorInfo}</span>
                            </div>
                            <div className="inx-eco-stat-container">
                                <label>{t(nameStat3)}</label><br/>
                                {nameStat3 === '' ? null : 
                                <input className="inx-eco-stat" id={'stat'+3} type="number" placeholder={t(nameStat3)} value={stat3} onBlur={verifInput()} onChange={(e) => setStat3(e.target.value)} />
                                }
                                <span className='inx-input-info'>{errorInfo}</span>
                            </div>
                            <div className="inx-eco-stat-container">
                                <label>{t(nameStat4)}</label><br/>
                                {nameStat4 === '' ? null : 
                                <input className="inx-eco-stat" id={'stat'+4} type="number" placeholder={t(nameStat4)} value={stat4} onBlur={verifInput()} onChange={(e) => setStat4(e.target.value)} />
                                }
                                <span className='inx-input-info'>{errorInfo}</span>
                            </div>
                        </div>

                        <DinoItem 
                            name={t(name)}
                            category={category}
                            price={Math.round( ( (price*(Math.round(stat1)/80)) + (price*(Math.round(stat2)/80)*0.7) + (price*(Math.round(stat3)/80)*0.4) + (price*(Math.round(stat4)/80)*0.3) )/100 )*100}
                            neutedPrice={Math.round( ( (neutedPrice*(Math.round(stat1)/80)) + (neutedPrice*(Math.round(stat2)/80)*0.7) + (neutedPrice*(Math.round(stat3)/80)*0.4) + (neutedPrice*(Math.round(stat4)/80)*0.3) )/100 )*100}
                        />
                    </div>
                ) : null 
                )}
            </div>
        </div>
    )
}

export default Calculate