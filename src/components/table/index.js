import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import penIcon from '../../assets/pen.svg'
import trashCanGray from '../../assets/trashcan_gray.svg'
import ellipsisIcon from '../../assets/ellipsis.svg'
import productData from '../../constants/product'
import ItemPerPageSelect from '../common/ItemPerPageSelect'
import Button from '../common/Button'

const NOOP = () => true
const maxItem = 10
const products = [...Array(maxItem).keys()].map((i) => ({
  ...productData,
  sku: uuid().slice(9, 21).toUpperCase() // I am tailoring the uuid here to fit sku format in mock and demo search bar function
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
          step="0.01"
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
    caseNum: PropTypes.string.isRequired,
    totalItem: PropTypes.number.isRequired,
    totalCbm: PropTypes.number.isRequired,
    totalWeight: PropTypes.number.isRequired
  }).isRequired
}

const TableHeadRow = () => {
  return (
    <tr className="tableHeadRow">
      <td className="tableHeadCell tableHeadCell--sku">Merchant SKU</td>
      <td className="tableHeadCell tableHeadCell--barCode">Barcode</td>
      <td className="tableHeadCell tableHeadCell--name">Product</td>
      <td className="tableHeadCell tableHeadCell--packing">Packing</td>
      <td className="tableHeadCell tableHeadCell--weight">Box weight</td>
      <td className="tableHeadCell tableHeadCell--size">Box size</td>
      <td className="tableHeadCell tableHeadCell--cbm">CBM</td>
      <td className="tableHeadCell tableHeadCell--perCase">Number per case</td>
      <td className="tableHeadCell tableHeadCell--caseNum">Number of cases</td>
      <td className="tableHeadCell tableHeadCell--totalItem">Total items</td>
      <td className="tableHeadCell tableHeadCell--totalCbm">Total CBM</td>
      <td className="tableHeadCell tableHeadCell--totalWeight">Total weight</td>
      <td className="tableHeadCell tableHeadCell--remove">
        <img
          className="tableHeadCell__removeButton"
          src={ellipsisIcon}
          alt="remove"
        />
      </td>
    </tr>
  )
}

const Table = ({ searchText }) => {
  const [perPage, setPerPage] = useState(maxItem)
  const checkSearchTextIncluded = (item) => {
    const term = searchText.toLowerCase()

    return (
      !searchText ||
      item?.name?.toLowerCase()?.includes(term) ||
      item?.sku?.toLowerCase()?.includes(term) ||
      item?.barCode?.toLowerCase()?.includes(term)
    )
  }

  return (
    <div className="contentTable">
      <h3>Table</h3>
      <div className="contentTable__action">
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
      </div>
      <table className="contentTable__table">
        <thead>
          <TableHeadRow />
        </thead>
        <tbody>
          {products
            .filter(checkSearchTextIncluded)
            .map((item, index) =>
              index <= perPage - 1 ? (
                <TableRow key={item.sku} item={item} />
              ) : null
            )
            .filter((item) => item)}
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  searchText: PropTypes.string
}

export default Table
