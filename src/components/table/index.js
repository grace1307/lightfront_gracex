import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import penIcon from '../../assets/pen.svg'
import trashCanGray from '../../assets/trashcan_white.svg'
import ellipsisIcon from '../../assets/ellipsis.svg'
import productData from '../../constants/product'
import ItemPerPageSelect from '../common/ItemPerPageSelect'
import Button from '../common/Button'

const NOOP = () => true
const maxItem = 10
const products = [...Array(maxItem).keys()].map((i) => ({
  ...productData,
  key: uuid()
}))

const TableRow = ({ item }) => {
  return (
    <tr className="tableRow">
      <td className="tableCell tableCell--sku">{item.sku}</td>
      <td className="tableCell tableCell--barCode">{item.barCode}</td>
      <td className="tableCell tableCell--name">
        <div className="tableCell__image">
          <img className="tableCell__img" src={item.img} alt="img" />
        </div>
        <div className="tableCell__name">{item.name}</div>
      </td>
      <td className="tableCell tableCell--packing">{item.packing}</td>
      <td className="tableCell tableCell--weight">{item.weight}</td>
      <td className="tableCell tableCell--size">{item.size}</td>
      <td className="tableCell tableCell--cbm">{item.cbm}</td>
      <td className="tableCell tableCell--perCase">
        {item.perCase}
        <button className="tableCell__editButton" type="button" onClick={NOOP}>
          <img className="tableCell__editButtonIcon" src={penIcon} alt="edit" />
        </button>
      </td>
      <td className="tableCell tableCell--caseNum">
        <input
          className="tableCell__input"
          type="text"
          value={item.caseNum}
          disabled
        />
      </td>
      <td className="tableCell tableCell--totalItem">{item.totalItem}</td>
      <td className="tableCell tableCell--totalCbm">{item.totalCbm}</td>
      <td className="tableCell tableCell--totalWeight">{item.totalWeight}</td>
      <td className="tableCell tableCell--remove">
        <button
          className="tableCell__removeButton"
          type="button"
          onClick={NOOP}
        >
          <img
            className="tableCell__removeButtonIcon"
            src={trashCanGray}
            alt="remmove"
          />
        </button>
      </td>
    </tr>
  )
}

TableRow.propTypes = {
  item: PropTypes.shape({
    sku: PropTypes.string.isRequired,
    barCode: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    packing: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    cbm: PropTypes.number.isRequired,
    perCase: PropTypes.number.isRequired,
    caseNum: PropTypes.number.isRequired,
    totalItem: PropTypes.number.isRequired,
    totalCbm: PropTypes.number.isRequired,
    totalWeight: PropTypes.number.isRequired
  }).isRequired
}

const TableHeadRow = () => {
  return (
    <tr className="tableHeadRow">
      <td className="tableHeadRow tableHeadRow--sku">Merchant SKU</td>
      <td className="tableHeadRow tableHeadRow--barCode">Barcode</td>
      <td className="tableHeadRow tableHeadRow--name">Product</td>
      <td className="tableHeadRow tableHeadRow--packing">Packing</td>
      <td className="tableHeadRow tableHeadRow--weight">Box weight</td>
      <td className="tableHeadRow tableHeadRow--size">Box size</td>
      <td className="tableHeadRow tableHeadRow--cbm">CBM</td>
      <td className="tableHeadRow tableHeadRow--perCase">Number per case</td>
      <td className="tableHeadRow tableHeadRow--caseNum">Number of cases</td>
      <td className="tableHeadRow tableHeadRow--totalItem">Total items</td>
      <td className="tableHeadRow tableHeadRow--totalCbm">Total CBM</td>
      <td className="tableHeadRow tableHeadRow--totalWeight">Total weight</td>
      <td className="tableHeadRow tableHeadRow--remove">
        <img
          className="tableHeadRow__removeButton"
          src={ellipsisIcon}
          alt="remove"
        />
      </td>
    </tr>
  )
}

const Table = () => {
  const [perPage, setPerPage] = useState(maxItem)

  return (
    <div className="contentTable">
      <Button
        className="contentTable__saveButton"
        onButtonClick={NOOP}
        title="Save Config"
      />
      <ItemPerPageSelect
        onSelectChange={setPerPage}
        value={perPage}
        max={maxItem}
      />
      <table className="contentTable__table">
        <thead>
          <TableHeadRow />
        </thead>
        <tbody>
          {products
            .map((item, index) =>
              index <= perPage - 1 ? (
                <TableRow key={item.key} item={item} />
              ) : null
            )
            .filter((item) => item)}
        </tbody>
      </table>
    </div>
  )
}

export default Table
