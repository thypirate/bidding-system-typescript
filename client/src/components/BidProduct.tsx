import React from 'react'
import { Socket } from 'socket.io-client'
import { ClientToServerEvents, ServerToClientEvents } from '../interfaces'

type BidProductProps = {
  socket: Socket<ClientToServerEvents, ServerToClientEvents>
}

const BidProduct = ({ socket }: BidProductProps) => {
  return (
    <div>BidProduct</div>
  )
}

export default BidProduct
