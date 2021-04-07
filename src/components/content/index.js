import React, { useState } from 'react'
import ContentHead from './ContentHead'
import Card from '../card'
import Table from '../table/index'
import Modal from '../modal'

const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchText, setSearchText] = useState('')

  return (
    <div className="content">
      <ContentHead
        onModalOpen={() => setIsModalOpen(true)}
        searchText={searchText}
        onSearchTextChange={setSearchText}
      />
      <Card />
      <Table searchText={searchText} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default Content
