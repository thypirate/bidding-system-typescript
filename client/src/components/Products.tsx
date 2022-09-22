import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Products = () => {
  return (
    <>
      <Container>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            <Link to="/products/add" >
              ADD PRODUCTS
            </Link>
          </Button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Last Bidder</th>
              <th>Creator</th>
              <th>Edit</th>
            </tr>
          </thead>
          {/* Data for display, we will later get it from the server */}
          <tbody>
            <tr>
              <td>Tesla Model S</td>
              <td>$30,000</td>
              <td>@david_show</td>
              <td>@elon_musk</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>

            <tr>
              <td>Ferrari 2021</td>
              <td>$50,000</td>
              <td>@bryan_scofield</td>
              <td>@david_asaolu</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  )
}
export default Products