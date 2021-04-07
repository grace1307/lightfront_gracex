import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import productData from '../../constants/product'
import Title from '../common/Title'
import SearchBox from '../common/SearchBox'
import Button from '../common/Button'
import Checkbox from '../common/Checkbox'
import ItemCount from '../common/ItemCount'
import Pagination from '../common/Pagination'
import PerPageInput from '../common/PerPageInput'
import crossIcon from '../../assets/cross.svg'

const NOOP = () => true
const TOTAL_ITEM_COUNT = 190
const MAX_ITEM = 10
const PRODUCTS_DATA = [...Array(TOTAL_ITEM_COUNT).keys()].map((i) => ({
  ...productData,
  sku: uuid().slice(9, 21).toUpperCase(), // I am tailoring the uuid here to fit sku format in mock and demo search bar function
  isChecked: false
}))

const ModalTableRow = ({ item, onCheckChange, isChecked }) => {
  const handleCheckChange = (isChecked) =>
    onCheckChange({ isChecked, id: item.sku })

  return (
    <tr className="modalTableRow">
      <td className="modalTableCell modalTableCell--checkbox">
        <Checkbox isChecked={isChecked} onCheckChange={handleCheckChange} />
      </td>
      <td className="modalTableCell modalTableCell--sku">{item.sku}</td>
      <td className="modalTableCell modalTableCell--barCode">{item.barCode}</td>
      <td className="modalTableCell modalTableCell--name">
        <div className="modalTableCell__image">
          <img className="modalTableCell__img" src={item.img} alt="img" />
        </div>
        <div className="modalTableCell__name">{item.name}</div>
      </td>
      <td className="modalTableCell modalTableCell--add">
        <Button
          className="modalTableCell__addButton"
          onButtonClick={NOOP}
          title="Add Product"
        />
      </td>
    </tr>
  )
}

ModalTableRow.propTypes = {
  item: PropTypes.shape({
    sku: PropTypes.string.isRequired,
    barCode: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  isChecked: PropTypes.bool.isRequired,
  onCheckChange: PropTypes.func.isRequired
}

const ModalTableHeadRow = ({ isChecked, onCheckChange }) => {
  return (
    <tr className="modalTableHeadRow">
      <td className="modalTableHeadCell modalTableHeadCell--checkbox">
        <Checkbox isChecked={isChecked} onCheckChange={onCheckChange} />
      </td>
      <td className="modalTableHeadCell modalTableHeadCell--sku">
        Merchant SKU
      </td>
      <td className="modalTableHeadCell modalTableHeadCell--barCode">
        Barcode
      </td>
      <td className="modalTableHeadCell modalTableHeadCell--name">Product</td>
      <td className="modalTableHeadCell modalTableHeadCell--add">
        <Button
          className="modalTableHeadCell__addButton"
          onButtonClick={NOOP}
          title="Add All"
        />
      </td>
    </tr>
  )
}

const ModalContent = ({ onClose }) => {
  const [perPage, setPerPage] = useState(MAX_ITEM)
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState('')
  const [products, setProducts] = useState(PRODUCTS_DATA)

  const checkSearchTextIncluded = (item) => {
    const term = searchText.toLowerCase()

    return (
      !searchText ||
      item?.name?.toLowerCase()?.includes(term) ||
      item?.sku?.toLowerCase()?.includes(term) ||
      item?.barCode?.toLowerCase()?.includes(term)
    )
  }

  const handleCheckChange = ({ isChecked, id }) => {
    setProducts(
      products.map((product) => ({
        ...product,
        isChecked: product.sku === id ? isChecked : product.isChecked
      }))
    )
  }

  const handleAllCheckChange = (isChecked) => {
    setProducts(products.map((product) => ({ ...product, isChecked })))
  }

  const searchResult = products.filter(checkSearchTextIncluded)

  const rows = searchResult
    .map((item, index) =>
      index >= (page - 1) * perPage && index <= page * perPage - 1 ? (
        <ModalTableRow
          key={item.sku}
          isChecked={item.isChecked}
          item={item}
          onCheckChange={handleCheckChange}
        />
      ) : null
    )
    .filter((item) => item)

  const totalItemCount = searchResult.length

  // Wrap the table for max height ctrl
  return (
    <div className="modalContent">
      <Title title="Add products" className="modalContent__title" />
      <button
        className="modalContent__closeButton"
        type="button"
        onClick={onClose}
      >
        <img
          className="modalContent__closeButtonIcon"
          src={crossIcon}
          alt="x"
        />
      </button>
      <SearchBox
        className="modalContent__search"
        placeholder="Enter title, merchant SK or ASIN"
        onSearchKeyUp={setSearchText}
        value={searchText}
      />
      <table className="modalContentTable__fixTableHead">
        <thead>
          <ModalTableHeadRow
            isChecked={!products.filter((item) => !item.isChecked).length}
            onCheckChange={handleAllCheckChange}
          />
        </thead>
      </table>
      <div className="modalContentTable__wrapper">
        <table className="modalContentTable">
          <tbody>{rows}</tbody>
        </table>
      </div>
      <div className="modalContentTable__action">
        <div className="modalContentTable__action--left">
          <ItemCount
            totalItemCount={totalItemCount}
            page={page}
            className="modalContentTable__pageCount"
            size={perPage}
          />
        </div>
        <div className="modalContentTable__action--right">
          <Pagination
            page={page}
            onPageChange={(page) => {
              handleAllCheckChange(false)
              setPage(page)
            }}
            maxPage={Math.ceil(totalItemCount / perPage)}
          />
          <PerPageInput
            onValueChange={(val) => {
              handleAllCheckChange(false)
              setPage(1)
              setPerPage(val)
            }}
            value={perPage}
            className="modalContentTable__pageSizeInput"
            max={MAX_ITEM}
          />
        </div>
      </div>
    </div>
  )
}

ModalContent.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default ModalContent
