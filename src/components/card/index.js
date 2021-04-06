import React from 'react'
import CardInfo, { CardInfoGroup } from '../card/CardInfo'
import companyData from '../../constants/company'
import companyIcon from '../../assets/company.svg'
import phoneIcon from '../../assets/phone.svg'
import earthIcon from '../../assets/earth.svg'

const Card = () => {
  return (
    <div className="card">
      <CardInfoGroup>
        <CardInfo
          fieldName="Company name"
          value={companyData.name}
          className="card__info--name"
          icon={companyIcon}
        />
        <CardInfo
          fieldName="Address"
          value={companyData.address}
          className="card__info--address"
        />
      </CardInfoGroup>
      <CardInfoGroup>
        <CardInfo
          fieldName="Phone"
          value={companyData.phone}
          className="card__info--phone"
          icon={phoneIcon}
        />
        <CardInfo
          fieldName="Fax"
          value={companyData.fax}
          className="card__info--fax"
        />
      </CardInfoGroup>
      <CardInfoGroup>
        <CardInfo
          fieldName="Web"
          value={companyData.web}
          className="card__info--web"
          icon={earthIcon}
        />
      </CardInfoGroup>
    </div>
  )
}

export default Card
