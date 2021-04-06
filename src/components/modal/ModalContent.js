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

const NOOP = () => true
const TOTAL_ITEM_COUNT = 190
const MAX_ITEM = 10
const PRODUCTS_DATA = [...Array(TOTAL_ITEM_COUNT).keys()].map((i) => ({
  ...productData,
  key: uuid(),
  isChecked: false
}))

const ModalTableRow = ({ item, onCheckChange, isChecked }) => {
  const handleCheckChange = (isChecked) =>
    onCheckChange({ isChecked, key: item.key })

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
      <td className="modalTableCell modalTableCell--checkbox">
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

const ModalContent = () => {
  const [perPage, setPerPage] = useState(MAX_ITEM)
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState('')
  const [products, setProducts] = useState(PRODUCTS_DATA)

  const handleCheckChange = ({ isChecked, key }) => {
    setProducts(
      products.map((product) => ({
        ...product,
        isChecked: product.key === key ? isChecked : product.isChecked
      }))
    )
  }

  const handleAllCheckChange = (isChecked) => {
    setProducts(products.map((product) => ({ ...product, isChecked })))
  }

  return (
    <div className="modalContentTable">
      <Title title="Add products" className="modalContentTable__title" />
      <SearchBox
        className="modalContentTable__search"
        placeholder="Enter title, merchant SK or ASIN"
        onSearchKeyUp={setSearchText}
        value={searchText}
      />
      <table className="modalContentTable__table">
        <thead>
          <ModalTableHeadRow
            isChecked={!products.filter((item) => !item.isChecked).length}
            onCheckChange={handleAllCheckChange}
          />
        </thead>
        <tbody>
          {products
            .map((item, index) =>
              index <= perPage - 1 ? (
                <ModalTableRow
                  key={item.key}
                  isChecked={item.isChecked}
                  item={item}
                  onCheckChange={handleCheckChange}
                />
              ) : null
            )
            .filter((item) => item)}
        </tbody>
      </table>
      <div className="modalContentTable__action">
        <ItemCount
          totalItemCount={TOTAL_ITEM_COUNT}
          page={page}
          className="modalContentTable__pageCountd"
          size={perPage}
        />
        <Pagination
          page={page}
          onPageChange={setPage}
          maxPage={Math.ceil(TOTAL_ITEM_COUNT / perPage)}
        />
        <PerPageInput
          onValueChange={setPerPage}
          value={perPage}
          className="modalContentTable__pageSizeInput"
          max={MAX_ITEM}
        />
      </div>
    </div>
  )
}

export default ModalContent
