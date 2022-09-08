import NotificationButton from "../NotificationButton";
import "./styles.css";

function Card(){
    return(
        <>
        <div className="dsmeta-card">
            <h2>Vendas</h2>              
            
            <div>
              <div className="dsmeta-form-control-container">
                <input className="dsmeta-form-control" type="text" />
              </div>
              <div className="dsmeta-form-control-container">
                <input className="dsmeta-form-control" type="text" />
              </div>
            </div>

            <div>
              <table className="dsmeta-sales-table">
                <thead>
                  <tr>
                    <th className="show992">ID</th>
                    <th className="show576">Data</th>
                    <th>Vendedor</th>
                    <th className="show992">Visitas</th>
                    <th className="show992">Vendas</th>
                    <th>Total</th>
                    <th>Notificar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="show992">0</td>
                    <td className="show576">05/09/2022</td>
                    <td>Anakin</td>
                    <td className="show992">11</td>
                    <td className="show992">10</td>
                    <td>R$ 5.300,00</td>
                    <td>
                      <NotificationButton />
                    </td>
                  </tr>
                  <tr>
                    <td className="show992">1</td>
                    <td className="show576">05/09/2022</td>
                    <td>Anakin</td>
                    <td className="show992">8</td>
                    <td className="show992">1</td>
                    <td>R$ 5.300,00</td>
                    <td>
                        <NotificationButton />
                    </td>
                  </tr>
                  <tr>
                    <td className="show992">2</td>
                    <td className="show576">05/09/2022</td>
                    <td>Anakin</td>
                    <td className="show992">10</td>
                    <td className="show992">0</td>
                    <td>R$ 5.300,00</td>
                    <td>
                        <NotificationButton />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>        
        </>
    )
}

export default Card;