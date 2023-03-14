import React from 'react';
import InputContent from '../inputContent';
import styles from './addressForm.module.css';
import Button from '../../UI/Button';
import { ReactComponent as RightArrowIcon } from '../../../public/icons/right-arrow.svg';

function Cities () {
  const cityCodes = ['', 'KLU', 'TPH', 'TPE', 'TYC', 'HSH', 'HSC', 'MAC', 'MAL', 'TXG', 'CWH', 'CWS', 'NTC', 'NTO', 'YLH', 'CHY', 'CYI', 'TNN', 'KHH', 'IUH', 'PTS', 'ILN', 'ILC', 'HWA', 'HWC', 'TTC', 'TTT', 'PEH', 'KMN', 'LNN']
  const cityNames = ['請選擇城市', '基隆市', '新北市', '台北市', '桃園市', '新竹縣', '新竹市', '苗栗市', '苗栗縣', '台中市', '彰化縣', '彰化市', '南投市', '南投縣', '雲林縣', '嘉義縣', '嘉義市', '台南市', '高雄市', '屏東縣', '屏東市', '宜蘭縣', '宜蘭市', '花蓮縣', '花蓮市', '台東市', '台東縣', '澎湖縣', '金門縣', '連江縣']
  const cityDropdownList = cityNames.map((city, index) => 
    {return (<option value={cityCodes} key={cityCodes[index]}>{city}</option>)})
   return (
    <select required>
      {cityDropdownList}
    </select>
      )
}

function Titles () {
  const titleLabel = ['mr', 'ms', 'mx']
  const titleValue = ['先生', '女士', '不明']
  const titleDropdownList = titleValue.map((title, index) => 
    {return (<option value={titleLabel} key={titleLabel[index]}>{title}</option>)})
  return (<select>{titleDropdownList}</select>)
}



export default function AddressForm({onToNextStep}) {

  return(
    <div className="stepOne">
    {/* <!-- address phase --> */}
    <form className={styles.formContainer} data-phase="address">
      <h3 className={styles.formTitle}>寄送地址</h3>
        <section className={styles.formBody}>
          <div className={styles.inputContainer}>
            <div className={`${styles.inputGroup} ${styles.title}`} >
              <div className={styles.inputLabel}>稱謂</div>
                <div className={styles.selectContainer}>
                  <Titles />
                </div>
            </div>
              <InputContent
                inputClassName={styles.name}
                inputLabel="姓名"
                inputType="text"
                name="name"
                placeHolder="請輸入姓名"
              />
          </div>
          <div className={styles.inputContainer}>
              
              <InputContent
                inputClassName={styles.phone}
                inputLabel="電話"
                inputType="tel"
                name="telNum"
                placeHolder="請輸入行動電話"
              />
              <InputContent
                inputClassName={styles.email}
                inputLabel="Email"
                inputType="email"
                name="email"
                placeHolder="請輸入電子郵件"
              />
          </div>
          <div className={styles.inputContainer}>
            <div className={`${styles.inputGroup} ${styles.city}`}>
              <div className={styles.inputLabel}>縣市</div>
                <div className={styles.selectContainer}>
                  <Cities />
              </div>
          </div>
            <InputContent
              inputClassName={styles.address}
              inputLabel="地址"
              inputType="text"
              placeHolder="請輸入地址"
            />
          </div>
        </section>
      </form>
      <div className={styles.btnGroup}>
        <Button className="nextProgressBtn" type="button" onClick={onToNextStep}>
          下一步
          <RightArrowIcon />
        </Button>
      </div>
    </div>
  )
}