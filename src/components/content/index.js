import React, { useState } from 'react'
import ContentHead from './ContentHead'
import Card from '../card'
import Table from '../table/index'
import ModalContent from '../modal/ModalContent'

const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="content">
      <ContentHead onModalOpen={() => setIsModalOpen(true)} />
      <Card />
      <Table />
      {isModalOpen && (
        <ModalContent onModalClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}

export default Content
